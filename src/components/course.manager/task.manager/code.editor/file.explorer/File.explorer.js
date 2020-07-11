import React, { memo } from 'react';
import { Wrapper } from './File.explorer.styles';

function FileExplorer(props) {
  const { tree, onSelect } = props;

  return (
    <Wrapper>
      {Object.entries(tree).map(([name, file]) => {
        const onClick = () => onSelect(file);

        return (
          <div className="file" onClick={onClick} key={name}>
            {name}
          </div>
        );
      })}
    </Wrapper>
  );
}

FileExplorer = memo(FileExplorer);

export { FileExplorer };
