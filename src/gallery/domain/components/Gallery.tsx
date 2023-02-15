import React from 'react';
import Box from '../../../shared/components/Box';
import PieceOfArt from './PieceOfArt';

// TODO replace this code with a .map over get all nfts
const NUMBER_OF_PIECES = 20;
const arrayOfPieces: JSX.Element[] = [];

const populateArrayOfPieces = () => {
  let i = 0;
  while (i < NUMBER_OF_PIECES) {
    arrayOfPieces.push(<PieceOfArt id={i} key={i} />);
    i++;
  }
};

populateArrayOfPieces();
//
const Gallery: React.FC = () => {
  return (
    <article className="w-screen">
      <Box
        childComponent={
          <>
            <div className="justify-center items-center">
              <h1 className="text-2xl font-extrabold m-4">HSSH GALLERY</h1>
              <div className="grid grid-cols-4 gap-4">{arrayOfPieces}</div>
            </div>
          </>
        }
      ></Box>
    </article>
  );
};

export default Gallery;
