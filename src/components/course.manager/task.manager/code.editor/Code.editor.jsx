import React, { memo, useState } from 'react';
import { MonacoEditor } from './monaco.editor';
import { FileExplorer } from './file.explorer';
import { Wrapper } from './Code.editor.styles';

function CodeEditor(props) {
  const { source } = props;
  const { files } = source;
  const [file, setFile] = useState(files[0]);
  const { seed } = file;

  return (
    <Wrapper>
      <FileExplorer tree={files} onSelect={setFile} />
      <MonacoEditor value={seed} />
    </Wrapper>
  );
}

CodeEditor = memo(CodeEditor);

export { CodeEditor };
