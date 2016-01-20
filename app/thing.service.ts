import {THINGS} from './mock-things';
import {Injectable} from 'angular2/core';
import {Thing} from './thing'

@Injectable()
export class ThingService{
  getThings(){
    return Promise.resolve(THINGS);
  }
  getThingsDelayed(){
    return new Promise<Thing[]>(res => setTimeout( () => res(THINGS), 2000));
  }
}