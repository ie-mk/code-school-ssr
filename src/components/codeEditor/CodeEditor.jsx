import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { transform } from '@babel/standalone';
import pluginTransformReactJsxCompat from '@babel/plugin-transform-react-jsx-compat';
import pluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import pluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import Styled from './CodeEditor.styles';
import sample from './code-sample';
import Button from '../foundation/button/Button';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

function IndexPage() {
  const [value, setValue] = useState(sample);
  const [runValue, setRunValue] = useState(sample);

  let transformed;
  let appended;

  try {
    transformed = transform(runValue, {
      presets: ['env', 'react'],
      plugins: [pluginTransformReactJsx, pluginSyntaxClassProperties],
    }).code;

    appended = `
      ${transformed}

      window.output.Teletabis = Teletabis;
    `;
  } catch (e) {
    console.error(e);

    appended = `
        const Teletabis = () => {
          return 'Error';
        };

        window.output.Teletabis = Teletabis;
      `;
  }

  setTimeout(() => {
    try {
      eval(appended);
    } catch (e) {
      debugger;
    }
  });

  return (
    <Styled.Wrapper>
      <div
        style={{
          display: 'flex',
          paddingTop: '100px',
          position: 'relative',
        }}
      >
        <Editor value={value} onChange={setValue} />
        <Output />
      </div>
      <Button
        type="secondary"
        marginLeft="100px"
        onClick={() => setRunValue(value)}
      >
        Run
      </Button>
    </Styled.Wrapper>
  );
}

function Editor(props) {
  return (
    <MonacoEditor
      height="400px"
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
