import {Injectable} from 'angular2/core';
import * as Blackbox from 'wave1-blackbox-client';
import {ADDRESSES} from './address.data';
import {VEHICLES} from './vehicles.data';

@Injectable()
export class Server{
  _remote: {};
  _addresses: {};
  _vehicles: {};
  constructor(){
    //this._remote = Blackbox;
    this._addresses = ADDRESSES;
    this._vehicles = VEHICLES;
  }
  
  getAddresses(): Promise<any>{
    return Promise.resolve(this._addresses);
  }
  
  getVehicles(): Promise<any> {
    return Promise.resolve(this._vehicles);
  }
}


  // export function getPolicies() : any;
  // export function getClaim(claimId: string) : any;
  // export function getIncidents(claimId: string): any;
  // export function getVehicles(policyId: string, claimId: string): Promise<any>;
  // export function verifyVIN(vin: string) : Promise<boolean>;
  // export function getOperablesTypelist() : any[];
  // export function addIncident(incident: any) : any;
  // export function updateIncident(incident: any) : any;
  // export function deleteIncident(incidentId: string) : any;
  // export function createVehicle(claimId: string, type: string) : any;
  // export function addVehicle(vehicle : any) : any;
  // export function updateVehicle(vehicle: any) : any;