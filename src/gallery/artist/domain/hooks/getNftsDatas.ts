import { IArtist } from './../types/artist.type';
import { useState } from 'react';
import { useContractRead } from 'wagmi';
import { abi } from '../../../../../contractConfig.json';

const useGetNfsDatas = (artist: IArtist) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const { isLoading: isNameLoading, data: firstNftName } = useContractRead({
    address: artist.smartContractNumber[0],
    abi: abi,
    functionName: 'name',
  });

  const { data: tokenURI } = useContractRead({
    address: artist.smartContractNumber[0],
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

  return {
    isNameLoading,
    firstNftName,
    imageUrl,
  };
};

export default useGetNfsDatas;
