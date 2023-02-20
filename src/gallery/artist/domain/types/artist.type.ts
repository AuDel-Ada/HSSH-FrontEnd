export interface IArtist {
  name: string;
  email: string;
  password: string;
  gender?: string;
  bio?: string;
  nationality?: string;
  smartContractNumber?: string[];
}

export interface IArtistResponse {
  artist: IArtist;
}
