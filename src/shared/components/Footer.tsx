import React from 'react';
import Box from './Box';

const Footer: React.FC = () => {
  return (
    <footer className="w-screen">
      <Box
        childComponent={
          <div className="flex justify-evenly items-center font-bold">
            <div className="text-xl">ABOUT</div>
            <div className="text-xl">CAREER</div>
            <div className="text-xl">HELP CENTER</div>
            <div className="text-xl">CONTACTS</div>
          </div>
        }
      ></Box>
    </footer>
  );
};

export default Footer;
