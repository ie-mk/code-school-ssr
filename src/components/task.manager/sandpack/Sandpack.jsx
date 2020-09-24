import React, { useState } from 'react';
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

const getSandpackContent = (step, forceRerender) => () => {
  return (
    <>
      <Split className="sandpack-content" sizes={[50, 50]} gutterSize={5}>
        <div className="sandpack-content-left">
          <Styled.Wrapper>
            <FlexContainer backgroundColor="#211D31" position="relative">
              <FileExplorer className="file-explorer" id="file-explorer" />
              <AddNewFile step={step} forceRerender={forceRerender} />
            </FlexContainer>
            <CodeMirror className="code-mirror" />
          </Styled.Wrapper>
        </div>
        <div className="sandpack-content-right">
          <BrowserPreview className="browser-preview" />
        </div>
      </Split>
      <Styled.SolutionContainer>AAAAAAA</Styled.SolutionContainer>
    </>
  );
};

export function Sandpack(props) {
  const { step, onFileChange } = props;
  const { files, dependencies } = step;

  const [renderTime, forceRerender] = useState(new Date().getTime());

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
        {getSandpackContent(step, forceRerender)}
      </SandpackConsumer>
    </SandpackProvider>
  );
}
