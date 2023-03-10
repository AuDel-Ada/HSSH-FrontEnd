import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../../shared/components/Box';
import HsshButton from '../../shared/components/HsshButton';
import { INft } from '../types/nft';
import { useContractRead } from 'wagmi';
import { abi } from '../../../contractConfig.json';

const PieceOfArt = ({ nft }: { nft: INft }): JSX.Element => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string>();

  const { isLoading: isNameLoading, data: name } = useContractRead({
    address: nft.address,
    abi: abi,
    functionName: 'name',
  });

  const { data: tokenURI } = useContractRead({
    address: nft.address,
    abi: abi,
    functionName: 'tokenURI',
    args: [0],
  });

  // TODO refacto using react query and hooks

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
    <article className="w-full">
      <Box
        childComponent={
          <div className="justify-center m-auto items-center w-full">
            <legend className="mb-6">
              <h2 className="text-2xl font-bold mb-2 truncate w-full">
                <>{isNameLoading ? 'LOADING' : name}</>
              </h2>
              <h3 className="text-md italic font-semibold truncate w-full">
                by {nft.artist.name}
              </h3>
            </legend>
            <img
              src={imageUrl}
              alt="nft artwork"
              width="500"
              height="500"
              className="aspect-square hover:scale-150 w-full"
            ></img>
            <HsshButton
              text={'VISIT'}
              onClick={() => navigate(`../artist/${nft.artist._id}/visit`)}
            />
          </div>
        }
      ></Box>
    </article>
  );
};

export default PieceOfArt;
