import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

class AppStreamCam extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div
          style={{
            display: 'flex',
            margin: '100px',
            padding: '56.25% 0 0 0',
            position: 'relative',
          }}
        >
          {/* <iframe
          src="https://player.vimeo.com/video/444600506"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          //  style="position:absolute;top:0;left:0;width:100%;height:100%;"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
        ></iframe> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/live_stream?channel=UCGPh5la7TpsJqngHfp3vFcg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '60%',
            }}
          />
        </div>
      </ErrorBoundary>
    );
  }
}

export default AppStreamCam;
