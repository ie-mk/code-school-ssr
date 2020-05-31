import React, { memo } from 'react';
import { Standard } from './types';

const types = {
  standard: Standard,
};

export const Renderer = memo(function Renderer({ type, ...props }) {
  const Renderer = types[type];

  return <Renderer {...props} />;
});
