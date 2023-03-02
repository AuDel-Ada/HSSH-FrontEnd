import React from 'react';

import type { IArtistComponents } from '../types/artist.type';
import Box from '../../../../shared/components/Box';
import useGetNfsDatas from '../hooks/getNftsDatas';

const ArtistInfoRight: React.FC<IArtistComponents> = (
  props: IArtistComponents
) => {
  const { isNameLoading, firstNftName, imageUrl } = useGetNfsDatas(
    props.artist
  );

  return (
    <>
      <Box
        childComponent={
          <>
            <div>
              <legend className="mb-4">
                <h2 className="text-2xl font-bold">
                  {isNameLoading ? 'LOADING' : (firstNftName as string)}
                </h2>
              </legend>
              <img
                src={imageUrl}
                alt="nft artwork"
                className="aspect-square"
              ></img>
            </div>
            {/* TO DO import NftsFromArtist.tsx */}
          </>
        }
      />
    </>
  );
};

export default ArtistInfoRight;
