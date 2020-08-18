import React from 'react';
import styled from 'styled-components';
import getMedia from '../../utils/media';
import media from '../foundation/media';

const ImageContainer = styled.div`
  width: ${({ width }) => width || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  height: ${({ height }) => height || ''};
  padding: ${({ padding }) => padding || ''};
  margin: ${({ margin }) => margin || ''};
  border-radius: ${({ borderRadius }) => borderRadius || ''};
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: ${({ backgroundSize }) => backgroundSize || 'cover'};
  background-position: ${({ backGroundPosition }) =>
    backGroundPosition || 'center'};
  flex: ${({ flex }) => flex || ''};
  cursor: ${({ cursor }) => cursor || ''};
  position: ${({ position }) => position || ''};
  z-index: ${({ zIndex }) => zIndex || ''};
  min-width: 0;

  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')}
`;

const ResponsiveImage = props => {
  return <ImageContainer {...props} />;
};

export default ResponsiveImage;
