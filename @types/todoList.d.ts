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

//object에는 타입을 넣을 때 적어도 set부분은 넣지 말아라
export interface TaskGetter {
  goal: Date;
  complete: boolean;
  color: string;
  bgColor: string;
  title: string;
  // title: { value: string; onChange: any; setValue: any };
  description: any;
  tag: string;
  // tag: { value: string; onChange: any; setValue: any };
  tags: Array<string>;
}
export interface TaskSetter {
  setGoal: any;
  setComplete: any;
  setColor: any;
  setBgColor: any;
  setTags: any;
  setTitle: any;
  setTag: any;
}
export interface AllTagsObject {
  allTags: Tags;
  setAllTags: any;
}
export interface AllTasksObject {
  tasks: Tasks;
  setTasks: any;
}
