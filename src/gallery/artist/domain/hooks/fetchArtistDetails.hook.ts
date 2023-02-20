import { fetchArtistDetails } from '../services/fetchArtistDetails.services';
import { useQuery } from 'react-query';

export default function useFetchArtistDetails(id: string) {
  const {
    isLoading: isArtistLoading,
    data: artist,
    error,
  } = useQuery('artist', async () => {
    const response = await fetchArtistDetails(id);
    if (!response) {
      throw new Error('Error while fetching artist details');
    }
    return response.artist;
  });
  return {
    artist,
    isArtistLoading,
    error,
  };
}
