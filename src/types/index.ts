import { VehicleStatus, VehicleTypes } from "@/enums";

export interface Vehicle {
  id: string;
  plate: string;
  fleet: string;
  type: VehicleTypes;
  model: string;
  status: VehicleStatus;
  lat: number;
  lng: number;
}

export interface VehicleLocations {
  id: string;
  fleet: string;
  equipmentId: string;
  name: string;
  plate: string;
  ignition: string;
  lat: number;
  lng: number;
}

export interface ResponseData {
  statusCode: string;
  message: string;
  content: {
    vehicles: Vehicle[];
    locationVehicles: VehicleLocations[];
  };
  totalPages: number | string;
  page: number | string;
  perPage: number | string;
}
