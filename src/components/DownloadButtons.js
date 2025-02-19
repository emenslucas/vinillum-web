import React from 'react';

const DownloadButtons = () => {
  return (
    <div id="download-container">
      <a target="_blank" href="https://expo.dev/accounts/vinillum/projects/vinillum">
      <img src="./assets/googleplay.svg" alt="Google Play" />
      </a>
      <a target="_blank" href="https://expo.dev/accounts/vinillum/projects/vinillum">
      <img src="./assets/appstore.svg" alt="App Store" />
      </a>
    </div>
  );
};

export default DownloadButtons;