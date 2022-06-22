import { AuditInterface, Cordinat, CountryInterface, MetaDataFileInterface, StateInterface, SuburbInterface } from ".";
import { TenantInterface } from "./tenant.interface";

export type ProjectStatus =
  | "DRAFT"
  | "AVAILABLE"
  | "DELETED"
  | "LEASED"
  | "BOOKED"
  | "SOLD";
export type ProjectType =
  | "Apartment"
  | "House & Land"
  | "Land"
  | "Office"
  | "Semi/Duplex"
  | "Block Of Units"
  | "Townhouse"
  | "Unit"
  | "Villa"
  | "Warehouse"
  | "Hotel/Leisure"
  | "Other"
  | "Motel"
  | "Resort"
  | "Retreat"
  | "Rural";
export type CurrencyId = "AUD" | "USD" | "IDR" | "THB";

export interface ProjectInterface extends AuditInterface {
  developerId: string;
  developer: TenantInterface;
  status: ProjectStatus;
  featured: boolean;
  type: ProjectType;
  address: string;
 
  suburb: SuburbInterface;
  state: StateInterface; 
  country: CountryInterface;

  suburbName: string;
  stateName: string; 
  countryName: string;
  
  suburbId: string;
  stateId: string; 
  countryId: string;

  postcode: string;

  headLine: string;
  shortDescription: string;
  content: string;
  addressCordinat: Cordinat;
  autdoorFeature: string[];
  indoorFeatures: string[];
  images: string[];
  interior: string[];
  exterior: string[];
  floorPlans: string[] | MetaDataFileInterface[];
  videoUrl: string[] ;
  onlineTourUrl: string[];
  brochure: string[] | MetaDataFileInterface[];
  collateral: string[] | MetaDataFileInterface[];
  specifications: string[] | MetaDataFileInterface[];
  currency: CurrencyId;
  preSaleType: "Percentage" | "Fix Price";
  preSalePercentage?: number;
  preSalePrice?: number;
  url: string;
  landingUrl: string;
  percentageDeposit: number;
  aboutProject: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  blogIds: string[];
  areaGuide: string;
  presentation: string;
  news: string[];
  keyword?: string
}

export interface ProjectLotInterface {
  _id?: string;
  status: ProjectStatus;
  projectId: string
  project:   ProjectInterface;
  featured: boolean;
  type: string;
  scheme: string;
  aspect: string;
  guarantee: string;
  // address: string
  headLine: string;
  shortDescription: string;
  content: string;
  autdoorFeature: string[];
  indoorFeatures: string[];
  images: string[];
  interior: string[];
  exterior: string[];
  floorPlans: string[]| MetaDataFileInterface[];
  videoUrl: string[];
  onlineTourUrl: string[];
  brochure: string[]| MetaDataFileInterface[];
  collateral: string[]| MetaDataFileInterface[];
  specifications: string[]| MetaDataFileInterface[];
  level?: string;
  lot?: string;
  bed?: number;
  bath?: number;
  garage: number;
  internal: number;
  external: number;
  total: number;
  price: number;
  threesixty: string;
  city: string;
  suburb: string;
  estate: string;
  living: number;
  developer: string;
  landPrice: number;
  housePrice: number;
  salesPackNumber: string;
}

export interface ProjectRequestInterface extends AuditInterface {
  projectId: string
  project?: ProjectInterface
  agencyId: string
  agency?: TenantInterface  
  developerId: string
  developer?: TenantInterface
}