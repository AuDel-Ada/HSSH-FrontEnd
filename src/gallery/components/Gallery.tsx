import React from 'react';
import Box from '../../shared/components/Box';
import PieceOfArt from './PieceOfArt';
import useFetchAllNftsInfos from '../artist/domain/hooks/fetchAllArtistsInfos.hook';

const Gallery: React.FC = () => {
  const { pieces } = useFetchAllNftsInfos();

  return (
    <article className="w-screen">
      <Box
        childComponent={
          <>
            <div className="justify-center items-center">
              <h1 className="text-2xl font-extrabold m-4">HSSH GALLERY</h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {pieces.map((piece) => (
                  <PieceOfArt key={piece.address} nft={piece} />
                ))}
              </div>
            </div>
          </>
        }
      ></Box>
    </article>
  );
};
export default Gallery;
