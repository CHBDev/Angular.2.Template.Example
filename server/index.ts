import {Injectable} from 'angular2/core';
import * as server from 'wave1-blackbox-client';
import {ADDRESSES} from '../app/mocks/address.data';
import {VEHICLES} from '../app/mocks/vehicles.data';

@Injectable()
export class Server {
  constructor(){
  }
  
  public verifyVIN(vin: string) : Promise<boolean> {
    return server.verifyVIN(vin);
  }
  
  getPolicies() : any {
    return server.getPolicies();
  }

  getClaim(claimId : string) : any {
    return server.getClaim(claimId);
  }

  getIncidents(claimId: string): any {
    return server.getIncidents(claimId);
  }

  // getVehicles(policyId: string, claimId: string): Promise<any> {
  //   return server.getVehicles(policyId, claimId);
  // }

  getVehicles(): Promise<any> {
    return Promise.resolve(VEHICLES);
  }
  
  getOperablesTypelist() : any[] {
    return server.getOperablesTypelist();
  }

  addIncident(incident: any) : any {
    return server.addIncident(incident);
  }

  updateIncident(incident: any) : any {
    return server.updateIncident(incident);
  }

  deleteIncident(incidentId: string) : any {
    return server.deleteIncident(incidentId);
  }

  createVehicle(claimId: string, type: string) : any {
    return server.createVehicle(claimId, type);
  }

  addVehicle(vehicle : any) : any {
    return server.addVehicle(vehicle);
  }

  updateVehicle(vehicle: any) : any {
    return server.updateVehicle(vehicle);
  }
  
  getAddresses(): Promise<any>{
    return Promise.resolve(ADDRESSES);
  }

}