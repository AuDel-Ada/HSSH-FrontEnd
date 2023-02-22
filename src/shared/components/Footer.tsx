import React from 'react';
import Box from './Box';

const Footer: React.FC = () => {
  return (
    <footer className="w-screen">
      <Box
        childComponent={
          <div className="flex justify-center items-center">
            <h1 className="text-xl">FOOTER</h1>
          </div>
        }
      ></Box>
    </footer>
  );
};

export default Footer;
