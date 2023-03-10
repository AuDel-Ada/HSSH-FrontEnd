export interface IArtist {
  name: string;
  email: string;
  password: string;
  pronouns?: string;
  bio?: string;
  country?: string;
  smartContractNumber: `0x${string}`[];
  _id: string;
}

export interface IArtistResponse {
  artist: IArtist;
}

export interface IArtistComponents {
  artist: IArtist;
}

export interface IArtistForm {
  name: string;
  email: string;
  pronouns?: string;
  bio?: string;
  country?: string;
}

export interface IArtistsResponse {
  artists: IArtist[];
}

export interface IAddNftForm {
  smartContractNumber?: `0x${string}`;
}
