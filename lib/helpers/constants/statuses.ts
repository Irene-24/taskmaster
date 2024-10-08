export const enum TASK_STATUS {
  ONGOING = "Ongoing",
  TODO = "To Do",
  DONE = "Done",
}

export type TaskStatusType = TASK_STATUS | string;


export const enum FETCH_STATUS{ 
  PENDING = "pending",
  RESOLVED = "resolved",
  IDLE = "idle",
  REJECTED = "rejected"
}
