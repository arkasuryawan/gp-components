import { AuditInterface } from "../interfaces";
import { ContactInterface } from "./contact.interface";
import { AgentInterface } from "./agent.interface"
import { ProspectInterface } from "./properties/prospect";
import { ListingInterface } from "./properties/listing.interface";
import { AppraisalInterface } from "./properties/appraisal.interface";
import { OfficesInterface } from "./office.interface";


export interface PipelineParams {

    id?: string
    page: number;
    limit: number;
    orderBy?: string;
    include?: string; //mainImage permissions userAccess
    order?: "ASC" | "DESC";
    filter: PipelineInterface;
    select?: string
}


export interface PipelineFlowParams {

    id?: string
    page: number;
    limit: number;
    orderBy?: string;
    include?: string; //mainImage permissions userAccess
    order?: "ASC" | "DESC";
    filter: PipelineFlowInterface;
    select?: string
}

export interface LeadsParams {

    id?: string
    page: number;
    limit: number;
    orderBy?: string;
    include?: string; //mainImage permissions userAccess
    order?: "ASC" | "DESC";
    filter: LeadsInterface;
    select?: string
}

export interface PipelineInterface extends AuditInterface {
    _id?: string
    name: string
    note?: string
    name_lower?: string,
    note_lower?: string,
    status?: "Active" | "Archived";
    pipelineFlowIds?: string[]
    pipelineFlows?: PipelineFlowInterface[]
    officeId?: string
    office?: OfficesInterface
}

export interface PipelineFlowInterface extends AuditInterface {
    _id?: string
    pipeLineId: string
    pipeline?: PipelineInterface
    name: string
    name_lower?: string,
    status?: "Active" | "Archived";
    leadsIds?: string[]
    leads?: LeadsInterface[]
    order?: number
}

export interface LeadsInterface extends AuditInterface {
    _id?: string
    contactId?: string
    contact?: ContactInterface
    pipelineFlowId?: string
    pipelineFlow?: PipelineFlowInterface
    agentIds?: string[]
    agents?: AgentInterface[]
    note?: string
    note_lower?: string
    prospectIds?: string[]
    prospects?: ProspectInterface[]
    listingsIds?: string[]
    listings?: ListingInterface[]
    appraisalIds?: string[]
    appraisals?: AppraisalInterface[]
    status?: "Active" | "Archived";
}
