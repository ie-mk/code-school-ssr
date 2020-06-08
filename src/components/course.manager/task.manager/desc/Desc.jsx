import React, { memo } from 'react';
import { Wrapper } from './Desc.styles';

function Desc(props) {
  return <Wrapper>{props.desc}</Wrapper>;
}

Desc = memo(Desc);

export { Desc };
