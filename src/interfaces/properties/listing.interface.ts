import { AppraisalInterface } from "./appraisal.interface";

export type ListingType = "Sale" | "Lease" | "Sale & Lease"
export type ListingStatus = "Appraisal" | "Presentation" | "Pending" | "Available" | "Conditional" | "Unconditional" | "Settled" | "Leased" | "Withdrawn" | "Archived";
export type MarketingStatusType = "Not Listed" | "Available" | "Under Contract" | "Sold" | "Leased" | "Available Under Contract"

export type PropertyType = "Residential" | "Rural" | "Commercial" | "Holiday" | "Business";

export type PropertyCategory = "Apartment" | "Development" | "Factory" | "House" | "Land" | "Office" | "Semi/Duplex" | "Retail" | "Studio" | "Block Of Units" | "Terrace" | "Townhouse" | "Unit" | "Villa" | "Warehouse" | "Showroom"
  | "Cropping" | "Dairy" | "Farmlet" | "Horticulture" | "Lifestyle" | "Livestock" | "Viticulture" | "Mixed Farming" | "Acreage" | "Hotel/Leisure"
  | "Medical/Consulting" | "Other" | "BackpackerHostel" | "BedAndBreakfast" | "Campground" | "CaravanHolidayPark" | "ExecutiveRental"
  | "FarmStay" | "Flat" | "HouseBoat" | "Lodge" | "Motel" | "Resort" | "Retreat" | "SelfContainedCottage" | "ServicedApartment" | "Car Space"
  | "Accommodation/Tourism" | "Automotive" | "Beauty/Health" | "Food/Hospitality" | "Import/Export/Whole" | "Services" | "Education/Training"
  | "Franchise" | "Home/Garden" | "Industrial/Manufacturing" | "Leisure/Entertainment" | "Professional"
  | "Rural" | "Transport/Distribution"

export type OrederBy = "soldPrice" | "searchPrice" | "address" | "lastModified" | "firstCreated" | "listedDate" | "nextInspectionDate"
  | "onMarketDate" | "auctionDate" | "soldDate" | "appraisalDate" | "presentationDate" | "status"
  | "marketingStatus" | "leasedDate";

export type AuthorityType = "Exclusive" | "Multi List" | "Conjunctional" | "Open" | "Sale by Negotiation"
export interface ListingParam {
  id?: string
  page: number;
  limit: number;
  orderBy?: string;
  include?: string; //mainImage permissions userAccess
  order?: "ASC" | "DESC";
  filter?: ListingInterface;
  select?: string
}


export interface ListingInterface extends   AppraisalInterface {

  fullAddressDisplay: boolean
  addressDisplay?: string 

  marketingStatus: MarketingStatusType
  authority: AuthorityType

  listingDate?: string
  listingExpiryDate?: string

  priceDisplay?: string
  price: number


}




// export interface PropertyAddress {
//   streetAddress: string;
//   levelNum: string;
//   lotNum: string;
//   unitNum: string;
//   streetNum: number;
//   streetName: string;
//   streetType: string;
//   suburb: string;
//   state: string;
//   postcode: string;
//   country: string;
//   region: string;
//   hideAddress: false;
// }



// export interface LotVal {
//   value: number;
//   unit: string;
// }

// export interface lotName {
//   name: string;
//   value: string;
// }

// export interface LegalDetail {
//   legalDescription: string;
//   lot: string;
//   depositedPlan: string;
//   volume: string;
//   folio: string;
//   block: string;
//   section: string;
//   zoning: string;
// }


// export interface Property {
//   id: string;
//   type: PropertyType;
//   category: PropertyCategory;
//   name: string;
//   newConstruction: false;
//   address: PropertyAddress;
//   location: locationType;
//   bedrooms: number;
//   bathrooms: number;
//   loungeRooms: string;
//   toilets: string;
//   studies: string;
//   pools: string;
//   garages: number;
//   carPorts: string;
//   carSpaces: string;
//   totalParking: number;
//   landArea: LotVal;
//   landSizeText: string;
//   buildingArea: LotVal;
//   externalArea: LotVal;
//   frontage: LotVal;
//   aspect: string;
//   yearBuilt: string;
//   yearRenovated: string;
//   construction: string;
//   condition: string;
//   energyRating: string;
//   features: string[];
//   keyFeature: lotName;
//   legalDetails: LegalDetail;
// }

// export interface Members {
//   email: string;
//   externalMemberId: string;
//   firstName: string;
//   hideMobileOnWeb: boolean;
//   id: string;
//   jobTitle: string;
//   lastName: string;
//   // links: {self: 'https://multidynamicingleburn.agentboxcrm.com.au/admin/api/staff/1stf0003?version=2'}
//   mobile: string;
//   officeId: number;
//   officeName: string;
//   phone: string;
//   role: string;
//   status: string;
// }

// export interface StaftMember {
//   displayOrder: number;
//   role: string;
//   staffMember: Members;
//   webDisplay: boolean;
// }
