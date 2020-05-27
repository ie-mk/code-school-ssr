import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { transform } from '@babel/standalone';
import pluginTransformReactJsxCompat from '@babel/plugin-transform-react-jsx-compat';
import pluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import pluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import Styled from './CodeEditor.styles';
import sample from './code-sample';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

function IndexPage() {
  const [value, setValue] = useState(sample);
  const transformed = transform(value, {
    presets: ['env', 'react'],
    plugins: [pluginTransformReactJsx, pluginSyntaxClassProperties],
  }).code;

  const appended = `
    ${transformed}

    window.output.Teletabis = Teletabis;
  `;

  setTimeout(() => eval(appended));

  return (
    <Styled.Wrapper>
      <div
        style={{ display: 'flex', paddingTop: '100px', position: 'relative' }}
      >
        <Editor value={value} onChange={setValue} />
        <Editor value={transformed} />
      </div>
      <Output />
    </Styled.Wrapper>
  );
}

function Editor(props) {
  return (
    <MonacoEditor
      height="300px"
      width="50%"
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

class Output extends React.PureComponent {
  state = {};

  componentDidMount() {
    window.output = new Proxy(
      {},
      {
        set: (t, k, v) => {
          this.setState({ [k]: v });

          return true;
        },
      },
    );
  }

  render() {
    const Component = this.state.Teletabis;

    return <div style={{ height: '300px' }}>{Component && <Component />}</div>;
  }
}

export default IndexPage;
