import { OfficesInterface } from "../../interfaces/office.interface";
import { ContactInterface } from "../../interfaces/contact.interface";
import { AgentInterface } from "../agent.interface";
import { AuditInterface, AddressInterface,  } from "../index";
import { AppraisalInterface } from "./appraisal.interface";
import { ListingInterface, ListingType, PropertyCategory, PropertyType } from "./listing.interface";


export interface PropectSearchParams  { 
  
  id?: string
  page: number;
  limit: number;
  orderBy?: string;
  include?: string; //mainImage permissions userAccess
  order?: "ASC" | "DESC";
  filter: ProspectInterface;
  select?: string
}

export interface ProspectInterface extends AuditInterface, AddressInterface { 
    propertyType: PropertyType
    propertyCategory: PropertyCategory
    listingType: ListingType
    interestLevel:  "HOT" | "WARM" | "COLD"; 
    status: "Active" | "Archived"; 
     
    canSeeContactAgentIds?: string[] 
    canSeeContactAgents?: AgentInterface[];
    belongsToAgentId?: string 
    belongsToAgent?: AgentInterface;

    officeId?: string 
    office?: OfficesInterface;


    ownerIds?: string[]
    owners?: ContactInterface[]
    tenantIds?: string[]
    tenants?: ContactInterface[]

    listingId?: string
    listing?: ListingInterface

    appraisalId?: string
    appraisal?: AppraisalInterface
    
}
