import React from 'react';
import { transform } from '@babel/standalone';
import pluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import pluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import { MonacoEditor } from './monaco.editor';
import { Wrapper } from './Code.editor.styles';

export const CodeEditor = () => {
  const transformation = transform('', {
    presets: ['env', 'react'],
    plugins: [pluginTransformReactJsx, pluginSyntaxClassProperties],
  });
  const { code } = transformation;

  return (
    <Wrapper>
      <MonacoEditor />
    </Wrapper>
  );
};
