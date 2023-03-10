import React from 'react';
import { Link } from 'react-router-dom';
import ArtistConnectButtons from './ArtistConnectButtons';
import Box from './Box';
import MetamaskConnectionButton from './MetamaskConnectionButton';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Link to={'../home'}>
        <div title="HouseShow logo">
          <Logo className="w-96 pl-4 h-28" data-testid="logo"></Logo>
        </div>
      </Link>
      <Box
        childComponent={
          <div className="flex items-center justify-between">
            <ArtistConnectButtons />
            <MetamaskConnectionButton />
          </div>
        }
      ></Box>
    </header>
  );
};

export default Header;
