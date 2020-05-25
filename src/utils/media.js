import { css } from 'styled-components';
import media from '../components/foundation/media';

const getMediaCSS = mediaSection => {
  return css`
    ${Object.keys(mediaSection).map(cssRule => {
      const value = mediaSection[cssRule];
      return css`
        ${cssRule}: ${value};
      `;
    })}
  `;
};

// const mediaConfigExample = {
//   aboveDesktop: {
//     padding: '20px',
//     margin: '40px',
//   },
// };

const getMedia = mediaConfig => {
  return css`
    ${Object.keys(mediaConfig).map(key => {
      const mediaSection = mediaConfig[key];
      return css`
        ${media[key]`
          ${getMediaCSS(mediaSection)}
        `}
      `;
    })}
  `;
};

export default getMedia;
