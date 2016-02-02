import {Injectable} from 'angular2/core';

@Injectable()
export class Server{
  getAddresses(): Promise<any>{
    return Promise.resolve("yay");
  }
  
  getVehicles(): Promise<any> {
    return Promise.resolve("hooray");
  }
}