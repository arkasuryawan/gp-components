import { PermissionTypeEnum } from "../interfaces";

export interface UserInterface {
    
    avatarUrl: string
    // When the user was created
    createdAt: string
    // The default permission type for addresses
    defaultAddressesPermission: PermissionTypeEnum
    // The default permission type for appraisals
    defaultAppraisalsPermission: PermissionTypeEnum
    // The default permission type for campaigns
    defaultCampaignPermission: PermissionTypeEnum
    // The default permission type for contacts
    defaultContactsPermission: PermissionTypeEnum
    // The default permission type for emails
    defaultEmailsPermission: PermissionTypeEnum
    // The default permission type for enquiries
    defaultEnquiriesPermission: PermissionTypeEnum
    // The default permission type for events
    defaultEventsPermission: PermissionTypeEnum
    // The default permission type for inspections
    defaultInspectionPermission: PermissionTypeEnum
    // The default permission type for notes
    defaultNotesPermission: PermissionTypeEnum
    // The default permission type for offers
    defaultOfferPermission: PermissionTypeEnum
    // The default permission type for projects
    defaultProjectsPermission: PermissionTypeEnum
    // The default permission type for SMSs
    defaultSmsPermission: PermissionTypeEnum
    // The default permission type for tasks
    defaultTasksPermission: PermissionTypeEnum
    // Email address of the user, this is used for signing in
    email: string
    // First name of the user
    firstName: string
    // ID of the contact
    id: string
    // User is root user or not
    isRoot: Boolean
    // Last name of the user
    lastName: string
    // Locality of the user
    // locality: LocalityEnum
    // The office which the user belongs to
    // office: Office
    // Permissions of the user
    permissions: string[]
    // Timezone of the user
    timezone: string
    // When the user was last updated
    updatedAt: string
}