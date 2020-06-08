import React, { Component } from 'react';
import { transform } from '@babel/standalone';
import pluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import pluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import { codeOutputService as service } from './Code.output.service';
import { Wrapper } from './Code.output.styles';

export class CodeOutput extends Component {
  componentDidMount() {
    service.setup(this);
  }

  render() {
    const transformation = transform('', {
      presets: ['env', 'react'],
      plugins: [pluginTransformReactJsx, pluginSyntaxClassProperties],
    });
    const { code } = transformation;

    return <Wrapper>CodeOutput</Wrapper>;
  }
}
