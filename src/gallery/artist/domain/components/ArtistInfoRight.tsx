import React, { useState } from 'react';
import { useContractRead } from 'wagmi';
import { abi } from '../../../../../contractConfig.json';

import type { IArtistComponents } from '../types/artist.type';
import Box from '../../../../shared/components/Box';

// TODO add metada nft's

const ArtistInfoRight: React.FC<IArtistComponents> = (
  props: IArtistComponents
) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const { isLoading: isNameLoading, data: firstNftName } = useContractRead({
    address: props.artist.smartContractNumber[0],
    abi: abi,
    functionName: 'name',
  });

  const { data: tokenURI } = useContractRead({
    address: props.artist.smartContractNumber[0],
    abi: abi,
    functionName: 'tokenURI',
    args: [0],
  });

  const getImage = async (url: string) => {
    const res = await fetch(url);
    const { image } = (await res.json()) as { image: string };
    setImageUrl(image.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/'));
  };

  if (tokenURI) {
    getImage(
      (tokenURI as string).replace(
        'ipfs://',
        'https://gateway.pinata.cloud/ipfs/'
      )
    );
  }

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

            {/* 
            TODO show all creations but need to refacto nfts infos before 

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
            </div> */}
          </>
        }
      />
    </>
  );
};

export default ArtistInfoRight;
