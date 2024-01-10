export interface IRickMortiApi {
  info: IInfo;
  results: IResult[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface IResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  img?:string;
  episode: string[];
  url: string;
  created: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}
