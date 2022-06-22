import { AgentInterface } from "./agent.interface";
import { BlogInterface } from "./blog.interface";
import { ContactInterface } from "./contact.interface";
import { PipelineParams, PipelineFlowParams, LeadsParams, PipelineInterface, PipelineFlowInterface, LeadsInterface } from "./leads.interface";
import { OfficesInterface } from "./office.interface";
import { ProjectStatus, ProjectType, CurrencyId, ProjectInterface, ProjectLotInterface, ProjectRequestInterface } from "./project.interface";
import { TenantInterface } from "./tenant.interface";
import { TestimonialInterface } from "./testimonial.interface";
import { TokenData } from "./TokenData.interface";
import { UserInterface } from "./user.interface";

export type PermissionTypeEnum = "EVERYONE" | "SELECT" | "EXCLUSIVE";
export type SourceList = "Website" | "Facebook" | "Instagram" | "Phone-in" | "Newspaper" | "Wolk-in" | "Door Knoking" | "Other" 
export type EmployeeType = "Administrator" | "Director" | "Personal Sisten" | "Office Admin" | "Agent Repesentative" | "Property Management" | "Sales Repesentative" | "Inactive"
export const EmployeeTypeData = [
  "Administrator",
  "Director",
  "Personal Sisten",
  "Office Admin",
  "Agent Repesentative",
  "Property Management",
  "Sales Repesentative"
]
export type TenantType = "Developer" | "Agency" | "Geonet"

export type BlogDisplay = "APPS" | "WEBSITE" | "BOTH";
export type StatusType = "Active" | "Archived";
export type EditorState = "ADD" | "DELETE" | "UPDATE" | "VIEW";

export interface Cordinat {
  lat: number;
  lng: number;
}

export interface CategoryInterface extends AuditInterface {
  name?: string;
  shortDescription?: string;
  description?: string;

   
  slug?: string;
   
  parentCategoryId?: string;
  parentCategory?: CategoryInterface;

  bannerURL?: string;
  thumbnailURL?: string;
  status?: StatusType;
}


export const PipeLineFlowData = [
  "New Leads",
  "Agent Contact",
  "In Progress", 
  "Done", 
]

export const SourceListData = [
  "Website" , "Facebook" , "Instagram" , "Phone-in" , "Newspaper" , "Wolk-in" , "Door Knoking" , "Other"]


export interface GroupRole {
  code: EmployeeType
  role: string,
  allow: boolean

}

export const PropertyTypeData =[ "Residential" , "Rural" , "Commercial" , "Holiday" , "Business"]


export const ProductCategoryData = [
  "Apartment",
 "Development",
 "Factory",
 "House",
 "Land",
 "Office",
 "Semi/Duplex",
 "Retail",
 "Studio",
 "Block Of Units",
 "Terrace",
 "Townhouse",
 "Unit",
 "Villa",
 "Warehouse",
 "Showroom",
 "Cropping",
 "Dairy",
 "Farmlet",
 "Horticulture",
 "Lifestyle",
 "Livestock",
 "Viticulture",
 "Mixed Farming",
 "Acreage",
 "Hotel/Leisure",
 "Medical/Consulting", 
 "BackpackerHostel",
 "BedAndBreakfast",
 "Campground",
 "CaravanHolidayPark",
 "ExecutiveRental",
 "FarmStay",
 "Flat",
 "HouseBoat",
 "Lodge",
 "Motel",
 "Resort",
 "Retreat",
 "SelfContainedCottage",
 "ServicedApartment",
 "Car Space",
 "Accommodation/Tourism",
 "Automotive",
 "Beauty/Health",
 "Food/Hospitality",
 "Import/Export/Whole",
 "Services",
 "Education/Training",
 "Franchise",
 "Home/Garden",
 "Industrial/Manufacturing",
 "Leisure/Entertainment",
 "Professional",
 "Rural",
 "Transport/Distribution",
 "Other",
]
export const SubscribedOptions = ['Marketing/Newsletter Emails',
  'Matching Property Alert Emails',
  'SMS Messages',
  'Marketing Letters']

  export interface MetaDataFileInterface {
    name: string,
    url: string,
    fileType: string
  }
  
  
export interface AuditInterface {
  _id?: string
  createdAt: string
  createdBy: string
  updateddAt?: string
  updatedBy?: string
  ArchivedAt?: string
  ArchivedBy?: string
}



export interface SearchParamInterface<DATA> {
  id?: string;
  page: number;
  limit: number;
  orderBy?: string;
  include?: string; //mainImage permissions userAccess
  order?: "ASC" | "DESC";
  filter?: DATA;
  select?: string;
  total?: number
}


export interface singgleResponse<DATA> {
  data?: DATA;
  haveError: boolean;
  errorCode?: string;
  errorMessage?: string;
}

export interface ListResponse<DATA> {
  total: number;
  page: number;
  limit: number;
  data: DATA[];
  haveError: boolean;
}


export interface SearchParamInterface<DATA> {
  id?: string;
  page: number;
  limit: number;
  orderBy?: string;
  include?: string; //mainImage permissions userAccess
  order?: "ASC" | "DESC";
  filter?: DATA;
  select?: string;
}

export interface AddressInterface {
  _id?: string
  streetAddress: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  location: locationType;
}

export interface locationType {
  _id?: string
  lat: number;
  long: number;
}

export interface ImageThumbnail {
  height: number;
  size: string;
  url: string;
  width: number;
}
export interface ImageInterface {
  id: number;
  lastModified: string;
  order: number;
  thumbnails: ImageThumbnail[];
  title: string;
  url: string;
}



export interface AddressDetail extends AuditInterface {
  name: string,
  bannerURL?: string;
  thumbnailURL?: string;
  slug?: string;
  shortDescription?: string;
  description?: string;

}

export interface CountryInterface extends AddressDetail {
  
}

export interface StateInterface extends CountryInterface {
  countryId: string
  country: CountryInterface

}

export interface SuburbInterface extends StateInterface {
  
  stateId: string
  state: StateInterface

}


export {
  AgentInterface, BlogInterface, 
  ContactInterface, PipelineParams,
  PipelineFlowParams, LeadsParams, PipelineInterface, PipelineFlowInterface,
  LeadsInterface,
  OfficesInterface,
  ProjectStatus,
  ProjectType,
  CurrencyId, 
  ProjectInterface,
  ProjectLotInterface,
  ProjectRequestInterface,
  TenantInterface,
  TestimonialInterface,
  TokenData,
  UserInterface
 }