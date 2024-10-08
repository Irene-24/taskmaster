// Enum for All Permissions
export const enum APP_PERMISSIONS {
  // Project Permissions
  EDIT_PROJECT = "edit_project",
  DELETE_PROJECT = "delete_project",

  // Task Permissions
  CREATE_TASK = "create_task",
  EDIT_TASK = "edit_task",
  DELETE_TASK = "delete_task",
  ASSIGN_TASK = "assign_task",

  // User Management Permissions
  MANAGE_ROLES = "manage_roles",
  INVITE_MEMBERS = "invite_members",
  REMOVE_MEMBERS = "remove_members",

  // Columns Management
  MANAGE_COLUMNS = "manage_columns",
}
