import React, { PureComponent, Component } from 'react';
import { transform } from '@babel/standalone';
import pluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import pluginProposalClassProperties from '@babel/plugin-proposal-class-properties';
import { getFileExtension } from '../utils';
import { codeOutputService as service } from './Code.output.service';
import { Wrapper } from './Code.output.styles';

export class CodeOutput extends PureComponent {
  state = {
    Component: null,
    renderIndex: 0,
    error: false,
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

    this.setState({ renderIndex: this.state.renderIndex + 1, error: null });

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
    let transformation;

    try {
      transformation = transform(file.content, {
        presets: ['env', 'react'],
        plugins: [pluginTransformReactJsx, pluginProposalClassProperties],
      });
    } catch (error) {
      this.setState({ error });

      return;
    }

    let Component;

    try {
      eval(`
      ${transformation.code}

      Component = ${file.var};
    `);
    } catch (error) {
      this.setState({ error });

      return;
    }

    this.setState({ Component });
  };

  render() {
    const { Component, renderIndex, error } = this.state;

    if (!Component) return null;

    return (
      <Wrapper>
        {error ? (
          `${error}`
        ) : (
          <ErrorBoundary key={renderIndex}>
            <Component />
          </ErrorBoundary>
        )}
      </Wrapper>
    );
  }
}

class ErrorBoundary extends Component {
  state = { error: false };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return `${this.state.error}`;
    }

    return this.props.children;
  }
}
