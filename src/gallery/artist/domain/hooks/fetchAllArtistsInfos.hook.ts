import { useQuery } from 'react-query';
import { useState } from 'react';
import { INft } from '../../../types/nft';
import { fetchAllArtistsInfos } from '../services/Artist.services';

const useFetchAllArtistsInfos = () => {
  const [pieces, setPieces] = useState<INft[]>([]);
  const queryKeyArtists = 'artists';
  const { data: artists } = useQuery(queryKeyArtists, async () => {
    const response = await fetchAllArtistsInfos();
    if (!response) {
      throw new Error('Error while fetching all artists infos');
    }
    return response.artists;
  });

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
    queryKeyArtists,
  };
};

export default useFetchAllArtistsInfos;
