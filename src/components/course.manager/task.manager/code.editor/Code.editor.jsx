import React, { memo, useState, useEffect } from 'react';
import { codeOutputService } from '../code.output';
import { getFileExtension } from '../utils';
import { MonacoEditor } from './monaco.editor';
import { FileExplorer } from './file.explorer';
import { Wrapper } from './Code.editor.styles';

function CodeEditor(props) {
  const [files, setFiles] = useState(props.source.files);
  const [selectedFileName, setSelectedFileName] = useState('index.js');
  const selectedFile = files[selectedFileName];
  const fileExtension = getFileExtension(selectedFile);

  useEffect(() => {
    codeOutputService.renderOutput(files);
  }, [files]);

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
