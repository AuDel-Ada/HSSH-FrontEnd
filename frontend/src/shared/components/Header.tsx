import React from 'react';
import Box from './Box';

const Header: React.FC = () => {
  return (
    <header className="w-screen">
      <Box
        childComponent={
          <div className="flex justify-center items-center">
            <h1 className="text-xl">HOUSE/SHOW</h1>
          </div>
        }
      ></Box>
    </header>
  );
};

export default Header;
