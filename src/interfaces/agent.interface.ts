import { AddressInterface, AuditInterface, EmployeeType, ImageInterface, TenantType } from "../interfaces";
import { OfficesInterface } from "./office.interface";
import { TenantInterface } from "./tenant.interface";

// type OrederBy = "firstName" | "lastName" | "firstCreated" | "lastModified";


export interface AgentInterface extends AuditInterface {
  uid?: string, 
  fullName: string
  firstName: string;
  lastName?: string; 
  mobile?: string;
  phone?: string; 
  image: string;
  email: string;
  dateOfBirth?: string;
  licenceNumber?: string;
  licenceExpiryDate?: string;
  address?: AddressInterface; 
  OfficeId?: string;
  office?: OfficesInterface;  
  jobTitle?: string; 
  specialistAreas?: string[]; 
  awards?: string[];  
  employeeType?: EmployeeType; 
  tenantType?: TenantType
  tenantId?: string
  tenant?: TenantInterface
  profile?: string;
  profileVideo?: string; 
  startDate?: string; 
  contractValedDate?: string; 
  showOnWeb: boolean; 
  status: "Active" | "Archived";
  customToken?: string

  facebookUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
  twitterUrl?: string

  keyword?: string
}

