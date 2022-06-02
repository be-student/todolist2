export interface tasks {
  id: number;
  title: string;
  description: string;
  tags: Array<string>;
  complete: boolean;
  createdAt: number;
  goalAt: number;
}
export interface tag {
  backgroundColor: string;
  color: string;
}

export interface tags {
  [index: string]: tag;
}
export const initialTasks: Array<tasks> = [
  {
    id: 1,
    title: "first Task",
    description: "task2 description",
    tags: ["tag2", "tag3"],
    complete: true,
    createdAt: new Date().valueOf(),
    goalAt: new Date().valueOf() + 1000 * 60 * 60 * 24 * 4,
  },
  {
    id: 2,
    title: "second Task",
    description: "task description",
    tags: ["tag1", "tag2"],
    complete: false,
    createdAt: new Date().valueOf(),
    goalAt: new Date().valueOf() + 1000 * 60 * 60 * 24 * 2,
  },
];
export const initialTags: tags = {
  tag1: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  tag2: {
    backgroundColor: "#FFFFFF",
    color: "#0000FF",
  },
  tag3: {
    backgroundColor: "#FFFFFF",
    color: "#FF0000",
  },
};
export const initialId: number = 2;
export const addTask = (
  Tasks: Array<tasks>,
  setTasks: any,
  newTask: Partial<tasks>
) => {
  newTask.createdAt = new Date().valueOf();
  if (Tasks.length === 0) {
    newTask.id = 1;
    setTasks([newTask] as unknown as tasks);
    return;
  }
  newTask.id = Tasks[Tasks.length - 1].id;
  setTasks([...Tasks, newTask]);
};
export const deleteTask = (
  Tasks: Array<tasks>,
  setTasks: Function,
  removeId: number
) => {
  setTasks(Tasks.filter((task) => task.id !== removeId));
};
export const deleteCompletedTask = (
  Tasks: Array<tasks>,
  setTasks: Function
) => {
  setTasks(Tasks.filter((task) => task.complete === false));
};
export const checkTask = (
  Tasks: Array<tasks>,
  setTasks: Function,
  checkId: number
) => {
  const index = Tasks.findIndex((task) => task.id === checkId);
  const newTask = [...Tasks];
  newTask[index].complete = !newTask[index].complete;
  setTasks(newTask);
};
export const editTask = (
  Tasks: Array<tasks>,
  setTasks: Function,
  newTask: any
) => {
  const index = Tasks.findIndex((task) => task.id === newTask.id);
  const newTaskArray: any = [...Tasks];
  for (const p in newTask) {
    newTaskArray[index][p] = newTask[p];
  }
  setTasks(newTaskArray);
};
export const editTag = (tags: tags, setTags: any, editTag: any) => {
  const tag: tag = {
    color: editTag.color,
    backgroundColor: editTag.backgroundColor,
  };
  setTags((tags[editTag.title] = tag));
};
export const deleteTag = (
  tags: tags,
  setTags: any,
  tasks: Array<tasks>,
  setTasks: any,
  deleteTitle: any
) => {
  setTasks(tasks.map((task) => task.tags.filter((tag) => tag != deleteTitle)));
  const newTags = delete tags[deleteTitle];
  setTags(newTags);
};
