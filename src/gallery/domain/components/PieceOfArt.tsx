import React from 'react';
import Box from '../../../shared/components/Box';
import HsshButton from '../../../shared/components/HsshButton';

const PieceOfArt = ({ id }: { id: number }): JSX.Element => {
  return (
    <article className="banner">
      <Box
        childComponent={
          <div
            className="justify-center m-auto items-center"
            onClick={() => console.log('nft details')}
          >
            <legend className="mb-6">
              <h2 className="text-xl font-bold">TITLE</h2>
              <h3 className="text-md">ARTISTE</h3>
              <h4 className="text-sm">PRICE</h4>
            </legend>
            <img
              src="https://maddyness.twic.pics/2022/08/Pawel-Czerwinski-art-nft.jpg?twic=v1/cover=2190x1102"
              alt="nft artwork"
              className="aspect-square hover:scale-150"
            ></img>
            <HsshButton text={'VISIT'} />
          </div>
        }
      ></Box>
    </article>
  );
};

export default PieceOfArt;
