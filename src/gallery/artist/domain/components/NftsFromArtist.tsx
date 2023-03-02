import React from 'react';
import { Link } from 'react-router-dom';

import { IArtistComponents } from '../types/artist.type';

const NftsFromArtist: React.FC<IArtistComponents> = (
  props: IArtistComponents
) => {
  return (
    <>
      {/* TODO show all creations but need to refacto nfts infos before  */}

      <div className="mb-4 text-xl font-extrabold">CREATIONS</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {props.artist.smartContractNumber?.map((contract) => {
          return (
            <div key={contract}>
              <Link to={'#'}>
                <div>
                  <legend className="mb-4">
                    <h2 className="text-l font-bold">TITLE</h2>
                    <h4 className="text-xs">PRICE</h4>
                    <div className="text-ellipsis text-xs overflow-hidden w-3/4">
                      Contract n° : {contract}
                    </div>
                  </legend>
                  <img
                    src="https://maddyness.twic.pics/2022/08/Pawel-Czerwinski-art-nft.jpg?twic=v1/cover=2190x1102"
                    alt="nft artwork"
                    className="aspect-square"
                  ></img>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NftsFromArtist;
