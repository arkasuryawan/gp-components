import { AddressInterface, AuditInterface, locationType  } from "../interfaces";
 
export interface OfficesInterface extends AuditInterface { 
  legalName?: string;
  name?: string;
  status?: "Active" | "Archived";
  externalId?: string; 
  address?: AddressInterface[]; 
  website?: string;
  email?: string;
  phone?: string; 
  phone2?: string; 
}
 