import React, { memo } from 'react';
import { Wrapper } from './Desc.styles';

function Desc(props) {
  return <Wrapper>{props.desc.title}</Wrapper>;
}

Desc = memo(Desc);

export { Desc };
