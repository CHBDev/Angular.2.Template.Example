// export interface Thing {
//   id: number;
//   name: string;
// }

export class Thing {
  constructor(
    public id: number,
    public name: string,
    public color: string,
    public location?: string
  ){} //note: this is a ts shortcut that defines the properties on the class by defining them in the constructor
}