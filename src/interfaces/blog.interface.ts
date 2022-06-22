import { AuditInterface, BlogDisplay, CategoryInterface, StatusType } from "."; 

export interface BlogInterface extends AuditInterface {
  title?: string;
  slug?: string;
  shortDescription?: string;
  description?: string;
  categoryIds?: string[]
  categories?: CategoryInterface[];
 

  status?: StatusType;
  blogDisplay?: BlogDisplay;
  bannerURL?: string;
  thumbnailURL?: string;
  videoUrl?: string;
  author?: string;
   
}
