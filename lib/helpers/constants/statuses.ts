export const enum TASK_STATUS {
  BACKLOG = "BackLog", //0
  ONGOING = "Ongoing", //40
  REVIEW = "Review", //75
  DONE = "Done", //100
}

export type TaskStatusType = TASK_STATUS | string;

export const enum FETCH_STATUS {
  PENDING = "pending",
  RESOLVED = "resolved",
  IDLE = "idle",
  REJECTED = "rejected",
}
