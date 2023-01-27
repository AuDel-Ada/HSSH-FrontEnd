import React from 'react';
import { Link } from 'react-router-dom';
import ArtistConnectButtons from './ArtistConnectButtons';
import Box from './Box';
import MetamaskConnectionButton from './MetamaskConnectionButton';

const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Box
        childComponent={
          <div className="flex items-center justify-between">
            <ArtistConnectButtons />
            <Link to={'../home'}>HOUSE/SHOW</Link>
            <MetamaskConnectionButton />
          </div>
        }
      ></Box>
    </header>
  );
};

export default Header;
