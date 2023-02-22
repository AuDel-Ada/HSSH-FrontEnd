import React from 'react';
import { NavLink } from 'react-router-dom';
import HsshButton from './HsshButton';
import ArtistAccessProfile from './ArtistAccessProfile';

const ArtistConnectButtons: React.FC = () => {
  const isArtistLoggedIn = false;

  if (!isArtistLoggedIn) {
    return (
      <div className="flex">
        <div className="mr-4">
          <NavLink to={'../join/sign-in'}>
            <HsshButton text={'SIGN UP'}></HsshButton>
          </NavLink>
        </div>
        <div>
          <NavLink to={'../join/login'}>
            <HsshButton text={'LOGIN'}></HsshButton>
          </NavLink>
        </div>
      </div>
    );
  }
  return <ArtistAccessProfile />;
};

export default ArtistConnectButtons;
