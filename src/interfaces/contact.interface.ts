import { AddressInterface, AuditInterface, SourceList } from "./index";
import { AgentInterface } from "./agent.interface";

 

export interface ContactInterface  extends AuditInterface  {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    mobileNumber?: string;
    email: string;
    source?: SourceList;
    address: AddressInterface; 
    canSeeContactAgentIds?: string[] 
    canSeeContactAgents?: AgentInterface[];
    belongsToAgentId?: string 
    belongsToAgent?: AgentInterface;
    image: string;
    subscribed: string[]
    status: "Active" | "Archived";
}