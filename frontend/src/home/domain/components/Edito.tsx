import React from 'react';
import Box from '../../../shared/components/Box';

const Edito: React.FC = () => {
  return (
    <article className="edito w-screen">
      <Box
        childComponent={
          <div className="flex justify-center items-center h-96">
            <h1 className="text-xl">EDITO</h1>
          </div>
        }
      ></Box>
    </article>
  );
};

export default Edito;
