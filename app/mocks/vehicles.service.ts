
import {Injectable, Inject} from 'angular2/core';
import {DataService} from '../mocks/data.service';

@Injectable() //do you need to inject if the class extends an injected class?
export class VehiclesService extends DataService {
  
  constructor() {
    super();
  }
  
    getData():Promise<any> {
    return this._server.getVehicles();
    //return new Promise(res => setTimeout(() => res(this._data), 330));
  }
}