import React from 'react';
import Split from 'react-split';
import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider,
  SandpackConsumer,
} from 'react-smooshpack';
import 'react-smooshpack/dist/styles.css';
import './Sandpack.scss';
import FlexContainer from '../../foundation/FlexContainer';
import AddNewFile from './AddNewFile';

export function Sandpack(props) {
  const { step, onFileChange, canEditTask } = props;
  const { files, dependencies } = step;

  return (
    <SandpackProvider
      files={files}
      dependencies={dependencies}
      showOpenInCodeSandbox={false}
      onFileChange={onFileChange}
      entry="/index.js"
    >
      <SandpackConsumer>{SandpackContent}</SandpackConsumer>
    </SandpackProvider>
  );
}

function SandpackContent() {
  return (
    <Split className="sandpack-content" sizes={[50, 50]} gutterSize={5}>
      <div className="sandpack-content-left">
        <FlexContainer backgroundColor="#211D31" position="relative">
          <FileExplorer className="file-explorer" id="file-explorer" />
          {<AddNewFile />}
        </FlexContainer>
        <CodeMirror className="code-mirror" />
      </div>
      <div className="sandpack-content-right">
        <BrowserPreview className="browser-preview" />
      </div>
    </Split>
  );
}
