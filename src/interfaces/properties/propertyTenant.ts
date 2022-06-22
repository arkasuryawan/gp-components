import { ContactInterface } from "../contact.interface";
import { AuditInterface } from "../index";
 

export interface PropertyTenantInterface extends AuditInterface {
    contact: string | ContactInterface
    until: string
}