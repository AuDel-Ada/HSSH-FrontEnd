import { IArtist } from '../artist/domain/types/artist.type';

export interface Nft {
  address: `0x${string}`;
  pictureUrl?: string;
  artist: IArtist;
}
