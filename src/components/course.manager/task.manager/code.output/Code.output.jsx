import React, { Component } from 'react';
import { transform } from '@babel/standalone';
import pluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import pluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import { getFileExtension } from '../utils';
import { codeOutputService as service } from './Code.output.service';
import { Wrapper } from './Code.output.styles';

export class CodeOutput extends Component {
  state = {
    Component: null,
  };

  renderedFiles = {};

  componentDidMount() {
    window.React = React;
    service.setup(this);
  }

  renderOutput = files => {
    Object.values(files).forEach(this.renderFile);
  };

  renderFile = file => {
    if (this.renderedFiles[file.name] === file) return;

    this.renderedFiles[file.name] = file;

    const fileExtension = getFileExtension(file);

    if (fileExtension === 'css') return this.renderCSS(file);
    if (fileExtension === 'js') return this.renderComponent(file);
  };

  renderCSS = file => {
    let style;
    const existingStyle = document.getElementById(file.name);

    if (!existingStyle) {
      style = document.createElement('style');
      style.type = 'text/css';
      style.id = file.name;
      document.head.appendChild(style);
    } else {
      style = existingStyle;
    }

    style.innerHTML = '';

    style.appendChild(document.createTextNode(file.content));
  };

  renderComponent = file => {
    const transformation = transform(file.content, {
      presets: ['env', 'react'],
      plugins: [pluginTransformReactJsx, pluginSyntaxClassProperties],
    });

    let Component;

    eval(`
      ${transformation.code}

      Component = MyComponent;
    `);

    this.setState({ Component });
  };

  render() {
    const { Component } = this.state;

    if (!Component) return null;

    return (
      <Wrapper>
        <Component />
      </Wrapper>
    );
  }
}
