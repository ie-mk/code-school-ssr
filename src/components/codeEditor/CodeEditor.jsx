import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { transform } from '@babel/standalone';
import pluginTransformReactJsxCompat from '@babel/plugin-transform-react-jsx-compat';
import pluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import Styled from './CodeEditor.styles';
import sample from './code-sample';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

function IndexPage() {
  const [value, setValue] = useState(sample);
  const transformed = transform(value, {
    presets: ['env', 'react'],
    plugins: [pluginTransformReactJsxCompat, pluginSyntaxClassProperties],
  }).code;

  return (
    <Styled.Wrapper>
      <Editor value={value} onChange={setValue} />
      <Editor value={transformed} />
    </Styled.Wrapper>
  );
}

function Editor(props) {
  return (
    <MonacoEditor
      height={'600px'}
      language="typescript"
      theme="vs-dark"
      editorDidMount={() => {
        window.MonacoEnvironment.getWorkerUrl = (moduleId, label) => {
          if (label === 'json') return '_next/static/json.worker.js';
          if (label === 'css') return '_next/static/css.worker.js';
          if (label === 'html') return '_next/static/html.worker.js';
          if (label === 'typescript' || label === 'javascript')
            return '_next/static/ts.worker.js';
          return '_next/static/editor.worker.js';
        };
      }}
      {...props}
    />
  );
}

export default IndexPage;
