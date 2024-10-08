import { APP_PERMISSIONS } from "@/constants/permissions";
import { TaskStatusType } from "@/constants/statuses";

export interface AppUser {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  email: string;
  createdAt: string;
}

export interface Column {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  isDeleted: boolean;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  projectId: string | null;
  createdBy: string;
  assignees: string[];
  columnId: string | null;
  storyPoint: number;
  dueDate: string;
  status: TaskStatusType;
  order: number;
  createdAt: string;
  isDeleted: boolean;
}

type RoleName = string;

export type ProjectRoles = Record<RoleName, APP_PERMISSIONS[]>;

type MemberId = string;

export type ProjectMembers = Record<MemberId, RoleName>;

export interface Project {
  id: string;
  name: string;
  description: string;
  columns: string[];
  startDate: string;
  endDate: string;
  currentPoints: number;
  totalPoints: number;
  memberIds: string[];
  members: ProjectMembers;
  roles: ProjectRoles;
  createdBy: string;
  createdAt: string;
  isDeleted: boolean;
}
