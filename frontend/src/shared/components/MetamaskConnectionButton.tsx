import React from 'react';
import { ConnectKitButton } from 'connectkit';

const MetamaskConnectionButton: React.FC = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ show }) => {
          return (
            <button onClick={show}>
              <i className="fa-solid fa-wallet text-lg"></i>
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default MetamaskConnectionButton;