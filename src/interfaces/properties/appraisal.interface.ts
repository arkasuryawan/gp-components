import { AgentInterface } from "../../interfaces/agent.interface";
import { AddressInterface, AuditInterface, ImageInterface, MetaDataFileInterface,   SourceList } from "../../interfaces";
import { ProspectInterface } from "./prospect";

 

export interface AppraisalInterface extends ProspectInterface {

    displayName: string
    displayName_lower: string

    description?: string
    description_lower?: string

    agentIds?: string[]
    agents?: AgentInterface[]


    bedrooms?: number
    bathrooms?: number // for commercial and residential
    ensuites?: number
    toilets?: number  // for commercial and residential

    //for land
    frontage?: number
    rearDepth?: number
    landSize?: number

    livingAreas?: number
    buildingSize?: number

    garageSpaces?: number
    carportSpaces?: number
    openCarSpaces?: number

    outDoorFeatures?: string[]
    inDoorFeatures?: string[]

    //for rent
    allowances?: string[]




    expectedPrice?: number

    //For rent 
    rentalEstimate?: number

    //for sale
    minPrice: number,
    maxPrice: number

    note: string
    note_lower: string
    // PropertyDetail

    // for commercial 
    occupancyTitle: "Whole Building" | "Parcial Building"

    prospectId?: string
    prospect?: ProspectInterface

    appraisalDate?: string

    appraisalDocuments?: string[]
    appraisalDocumentsWithMetaData?: MetaDataFileInterface[]

    videoUrls?: string[]
    onlineTourUrl?: string

    documents?: string[]
    documentsWithMetaData?: MetaDataFileInterface[]

    images?: string[]
    thumbnails?: {
        small: string,
        medium: string
        large: string
    }[]
    imagesMetaDataFile?: MetaDataFileInterface[]    

    floorPlans?: string[]
    floorPlansMetaDataFile?: MetaDataFileInterface[]
}