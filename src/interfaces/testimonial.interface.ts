import { AuditInterface, StatusType } from "."  
import { UserInterface } from "./user.interface"

export interface TestimonialInterface  extends AuditInterface {
    imageUrl: string
    headline: string,
    description: string
    user: UserInterface 
    
}