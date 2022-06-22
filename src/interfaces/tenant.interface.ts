import { AddressInterface, AuditInterface, TenantType } from "../interfaces";

export interface TenantInterface extends AuditInterface {
  legalName?: string;
  name?: string;
  status?: "Active" | "Archived";
  tenantType?: TenantType;
  bannerURL?: string;
  thumbnailURL?: string;
  externalId?: string;
  slug?: string;
  shortDescription?: string;
  description?: string;
  address?: AddressInterface[];
  website?: string;
  email?: string;
  phone?: string;
  phone2?: string;
  legalName_lower?: string;
  name_lower?: string;
  website_lower?: string;
  email_lower?: string;
}
