// import {ADDRESSES} from '../mocks/address.data';
import {Injectable, Inject} from 'angular2/core';
import {DataService} from '../mocks/data.service';

@Injectable() //do you need to inject if the class extends an injected class?
export class AddressService extends DataService {
  constructor() {
    super();
    // this._data = ADDRESSES;
  }
  
  getData():Promise<any> {
    return this._server.getAddresses();
    //return Promise.resolve("addresses");
  }
  
}