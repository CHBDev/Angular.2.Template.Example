declare module 'wave1-blackbox-client' {
  export function getPolicies() : any;
  export function getClaim(claimId: string) : any;
  export function getIncidents(claimId: string): any;
  export function getVehicles(policyId: string, claimId: string): Promise<any>;
  export function verifyVIN(vin: string) : Promise<boolean>;
  export function getOperablesTypelist() : any[];
  export function addIncident(incident: any) : any;
  export function updateIncident(incident: any) : any;
  export function deleteIncident(incidentId: string) : any;
  export function createVehicle(claimId: string, type: string) : any;
  export function addVehicle(vehicle : any) : any;
  export function updateVehicle(vehicle: any) : any;
}