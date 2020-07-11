import React, { memo, useState } from 'react';
import { codeOutputService } from '../code.output';
import { getFileExtension, useDebounce } from '../utils';
import { MonacoEditor } from './monaco.editor';
import { FileExplorer } from './file.explorer';
import { Wrapper } from './Code.editor.styles';

function CodeEditor(props) {
  const [files, setFiles] = useState(props.source.files);
  const [selectedFileName, setSelectedFileName] = useState('index.js');
  const selectedFile = files[selectedFileName];
  const fileExtension = getFileExtension(selectedFile);

  function onChange(code) {
    setFiles({
      ...files,
      [selectedFileName]: {
        ...files[selectedFileName],
        content: code,
      },
    });
  }

  function onFileSelect(file) {
    setSelectedFileName(file.name);
  }

  function renderOutput() {
    codeOutputService.renderOutput(files);
  }

  useDebounce(500, renderOutput, [files]);

  return (
    <Wrapper>
      <FileExplorer tree={files} onSelect={onFileSelect} />
      <MonacoEditor
        value={selectedFile.content}
        onChange={onChange}
        fileExtension={fileExtension}
      />
    </Wrapper>
  );
}

CodeEditor = memo(CodeEditor);

export { CodeEditor };
