import React from 'react';
import { Link } from 'react-router-dom';
import ArtistAuthForm from './ArtistAuthForm';
import Box from './Box';

const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Box
        childComponent={
          <div className="flex items-center justify-between">
            <ArtistAuthForm></ArtistAuthForm>
            <Link to={'../home'}>HOUSE/SHOW</Link>
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
