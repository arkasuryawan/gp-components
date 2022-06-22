import { ContactInterface } from "../contact.interface";
import { AuditInterface } from "../index";

export type OwnershipType = "Owner" | "Owner Occupier" | "Absentee Owner"

export interface PropertyOwnerInterface extends AuditInterface {
    contact: string | ContactInterface
    ownershipType: OwnershipType
}