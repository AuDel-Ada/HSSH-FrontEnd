import React from 'react';
import Box from '../../../shared/components/Box';

const Banner: React.FC = () => {
  return (
    <article className="banner">
      <Box
        childComponent={
          <div className="flex justify-center items-center">
            <div className="bg-slate-50 text-black font-bold text-2xl tracking-superwide w-full text-center p-2">
              DIGITAL GALLERY FOR ARTISTS FROM THE FUTUR
            </div>
          </div>
        }
      ></Box>
    </article>
  );
};

export default Banner;
