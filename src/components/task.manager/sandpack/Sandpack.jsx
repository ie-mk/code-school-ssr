import React, { useState, useRef } from 'react';
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
import Styled from './Sandpack.styles';

const getSandpackContent = (
  step,
  forceRerender,
  updateSecondColumnSize,
  saveTask,
) => () => {
  return (
    <>
      <Split
        className="sandpack-content"
        sizes={[47.5, 47.5]}
        gutterSize={5}
        onDrag={e => {
          updateSecondColumnSize(e[0]);
        }}
      >
        <div className="sandpack-content-left">
          <FlexContainer backgroundColor="#211D31" position="relative">
            <FileExplorer className="file-explorer" id="file-explorer" />
            <AddNewFile
              step={step}
              forceRerender={forceRerender}
              saveTask={saveTask}
            />
          </FlexContainer>
          <CodeMirror className="code-mirror" />
        </div>
        <div className="sandpack-content-right">
          <BrowserPreview className="browser-preview" />
        </div>
      </Split>
    </>
  );
};

export function Sandpack(props) {
  const { step, onFileChange, updateSecondColumnSize, saveTask } = props;

  const [renderTime, forceRerender] = useState(new Date().getTime());

  const files = step && step.files;
  const dependencies = step && step.dependencies;

  if (!files) return null;

  return (
    <SandpackProvider
      key={renderTime}
      files={files}
      dependencies={dependencies}
      showOpenInCodeSandbox={false}
      onFileChange={onFileChange}
      entry="/index.js"
    >
      <SandpackConsumer>
        {getSandpackContent(
          step,
          forceRerender,
          updateSecondColumnSize,
          saveTask,
        )}
      </SandpackConsumer>
    </SandpackProvider>
  );
}
