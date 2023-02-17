import { useQuery } from 'react-query';
import { useState } from 'react';
import { Nft } from '../../../types/nft';
import { fetchAllArtistsInfos } from '../services/Artist.services';

const useFetchAllNftsInfos = () => {
  const [pieces, setPieces] = useState<Nft[] | any[]>([]);

  const { data: artists } = useQuery(
    'artists',
    async () => {
      const response = await fetchAllArtistsInfos();
      if (!response) {
        throw new Error('Error while fetching all artists infos');
      }
      return response.artists;
    },
    {
      staleTime: Infinity,
    }
  );

  if (artists?.length && !pieces.length) {
    const nfts = artists.map((artist) => {
      return artist.smartContractNumber?.map((smartContractNumber) => {
        return {
          address: smartContractNumber,
          artist,
        };
      });
    });
    if (nfts?.length) {
      setPieces(nfts.flat());
    }
  }

  return {
    pieces,
  };
};

export default useFetchAllNftsInfos;
