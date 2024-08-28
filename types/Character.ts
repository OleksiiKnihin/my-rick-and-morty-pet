export interface Details {
  name: string,
  url: string,
}

export interface Person {
id: number,
name: string,
status: string,
species: string,
type: string,
gender: string,
origin: Details,
location: Details,
image: string,
episode: string[],
url: string,
created: string,
}
