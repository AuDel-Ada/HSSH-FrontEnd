import React from 'react';
import Box from '../../../shared/components/Box';
import PieceOfArt from './PieceOfArt';

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

const Gallery: React.FC = () => {
  return (
    <article className="w-screen">
      <Box
        childComponent={
          <>
            <div className="justify-center items-center h-96">
              <h1 className="text-xl">GALLERY</h1>
              <div className="grid grid-cols-4">{arrayOfPieces}</div>
            </div>
          </>
        }
      ></Box>
    </article>
  );
};

export default Gallery;
