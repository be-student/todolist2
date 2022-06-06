export interface BasicTask {
  title: string;
  description: string;
  tags: Array<string>;
  complete: boolean;
  goalAt: number;
}

export interface EditTask extends BasicTask {
  id: number;
}

export interface Task extends BasicTask {
  id: number;
  editedAt: number;
  createdAt: number;
}

export interface Tag {
  backgroundColor: string;
  color: string;
}

export interface Tags {
  [index: string]: Tag;
}

export interface Tasks extends Array<Task> {}

export interface TaskObject {
  goal: Date;
  setGoal: any;
  complete: boolean;
  setComplete: any;
  color: string;
  setColor: any;
  bgColor: string;
  setBgColor: any;
  title: { value: string; onChange: any; setValue: any };
  description: any;
  tag: { value: string; onChange: any; setValue: any };
  tags: Array<string>;
  setTags: any;
}
export interface AllTagsObject {
  allTags: Tags;
  setAllTags: any;
}
export interface AllTasksObject {
  tasks: Tasks;
  setTasks: any;
}
