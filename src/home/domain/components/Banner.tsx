import React from 'react';
import Box from '../../../shared/components/Box';

const Banner: React.FC = () => {
  return (
    <article className="banner">
      <Box
        childComponent={
          <div className="flex justify-center items-center">
            <h1>I AM A BANNER</h1>
          </div>
        }
      ></Box>
    </article>
  );
};

export default Banner;
