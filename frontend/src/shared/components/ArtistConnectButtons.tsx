import React from 'react';
import { NavLink } from 'react-router-dom';
import HsshButton from './HsshButton';

const ArtistConnectButtons: React.FC = () => {
  const isArtistLoggedIn = false;

  if (!isArtistLoggedIn) {
    return (
      <div className="flex">
        <div className="mr-4">
          <NavLink to={'../join/sign-in'}>
            <HsshButton text={'SIGN IN'}></HsshButton>
          </NavLink>
        </div>
        <div>
          <NavLink to={'../join/login'}>
            <HsshButton text={'LOGIN'}></HsshButton>
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <i className="fa-solid fa-user"></i>
      </div>
    );
  }
};

export default ArtistConnectButtons;
