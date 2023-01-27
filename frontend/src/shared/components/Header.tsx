import React from 'react';
import { Link } from 'react-router-dom';
import ArtistAuthForm from './ArtistAuthForm';
import Box from './Box';
import MetamaskConnectionButton from './MetamaskConnectionButton';

const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Box
        childComponent={
          <div className="flex items-center justify-between">
            <ArtistAuthForm />
            <Link to={'../home'}>HOUSE/SHOW</Link>
            <MetamaskConnectionButton />
          </div>
        }
      ></Box>
    </header>
  );
};

export default Header;
