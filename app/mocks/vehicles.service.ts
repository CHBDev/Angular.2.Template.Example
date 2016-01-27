import {VEHICLES} from '../mocks/vehicles.data';
import {Injectable, Inject} from 'angular2/core';
import {DataService} from '../mocks/data.service';

@Injectable() //do you need to inject if the class extends an injected class?
export class VehiclesService extends DataService {
  
  constructor() {
    super();
    this._data = VEHICLES;
  }
}