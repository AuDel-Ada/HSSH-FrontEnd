export interface IArtist {
  name: string;
  email: string;
  password: string;
  pronouns?: string;
  bio?: string;
  country?: string;
  smartContractNumber?: string[];
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
  password: string;
  pronouns?: string;
  bio?: string;
  country?: string;
}
