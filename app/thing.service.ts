import {THINGS} from './mock-things';
import {Injectable, Inject} from 'angular2/core';
import {Thing} from './thing';

@Injectable()
export class ThingService {
  constructor() {
  }
  getThings() {
    return Promise.resolve(THINGS);
  }
  getThingsDelayed() {
    return new Promise<Thing[]>(res => setTimeout(() => res(THINGS), 2000));
  }
}


//thing.service.ts
// @Injectable()
// export class ThingService {
//   public myString: string = "base";
//   constructor(str: string) {
//     this.myString = str;
//   }
// }

// @Injectable()
// export class Thing2Service extends ThingService {
//   constructor(){
//     super('I AM CHILD');
//   }
// }

// //app.component.ts
// public thingService: ThingService = new ThingService("I AM PARENT");
// public thing2Service: Thing2Service = new Thing2Service();

// ThingService.myString === "I AM PARENT"; //true
// Thing2Service.myString === "I AM CHILD"; //true
