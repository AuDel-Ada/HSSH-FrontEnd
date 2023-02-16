import React from 'react';
import { Link } from 'react-router-dom';
import ArtistConnectButtons from './ArtistConnectButtons';
import Box from './Box';
import MetamaskConnectionButton from './MetamaskConnectionButton';
import Logo from '../../assets/svg/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Box
        childComponent={
          <div className="flex items-center justify-between">
            <ArtistConnectButtons />
            <MetamaskConnectionButton />
          </div>
        }
      ></Box>
      <Link to={'../home'}>
        <img src={Logo} className="w-96 pl-4 h-28"></img>
      </Link>
    </header>
  );
};

export default Header;
