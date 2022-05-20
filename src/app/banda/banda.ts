export class Banda {

  id:number;
  name: string;
  country: number;
  description: string;
  image:String

  public constructor(id:number,name: string, country: number, description: string,image:string) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.description = description;
    this.image = image;
  }
}
