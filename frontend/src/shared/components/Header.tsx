import React from 'react';
import ArtistAuthForm from './ArtistAuthForm';
import Box from './Box';

const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Box
        childComponent={
          <div className="flex items-center justify-between">
            <ArtistAuthForm></ArtistAuthForm>
            <h1 className="text-xl">HOUSE/SHOW</h1>
            <button>
              <i className="fa-solid fa-wallet text-lg"></i>
            </button>
          </div>
        }
      ></Box>
    </header>
  );
};

export default Header;
