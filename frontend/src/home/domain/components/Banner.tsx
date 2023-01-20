import React from 'react';
import Box from '../../../shared/components/Box';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <article className="banner">
      <Box
        childComponent={
          <div className="flex justify-center items-center">
            <Link to={'../gallery'}>VISIT GALLERY</Link>
          </div>
        }
      ></Box>
    </article>
  );
};

export default Banner;
