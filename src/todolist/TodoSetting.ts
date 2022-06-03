import _ from "lodash";

export interface tasks {
  id: number;
  title: string;
  description: string;
  tags: Array<string>;
  complete: boolean;
  editedAt: number;
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
    editedAt: new Date().valueOf(),
    goalAt: new Date().valueOf() + 1000 * 60 * 60 * 24 * 4,
  },
  {
    id: 2,
    title: "second Task",
    description: "task description",
    tags: ["tag1", "tag2"],
    complete: false,
    createdAt: new Date().valueOf(),
    editedAt: new Date().valueOf(),
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
  newTaskArray[index].editedAt = new Date().valueOf();
  for (const p in newTask) {
    newTaskArray[index][p] = newTask[p];
  }
  setTasks(newTaskArray);
};
export const editTag = (
  allTags: tags,
  setAllTags: any,
  editTag: any,
  setTags: any,
  tags: Array<string>
) => {
  console.log(allTags);
  const tag: tag = {
    color: editTag.color,
    backgroundColor: editTag.backgroundColor,
  };
  const newAllTags = _.cloneDeep(allTags);
  newAllTags[editTag.title] = tag;
  setAllTags(newAllTags);
  if (tags.find((tag) => tag === editTag.title)) {
    return;
  }
  setTags([editTag.title, ...tags]);
};
export const onSubmit = (
  edit: number,
  title: string,
  description: string,
  goalAt: Date,
  tagArray: Array<string>,
  tasks: Array<tasks>,
  setTasks: any,
  complete: boolean,
  setModal: any
) => {
  if (title === "") {
    alert("please enter title");
    return;
  }
  if (description === "") {
    alert("please enter description");
    return;
  }
  if (edit === 0) {
    //ADD
    const lastTask: tasks = tasks[tasks.length - 1];
    const newTask: tasks = {
      id: lastTask.id + 1,
      description,
      title,
      goalAt: goalAt.valueOf(),
      createdAt: new Date().valueOf(),
      editedAt: new Date().valueOf(),
      tags: tagArray,
      complete: complete,
    };
    const newTaskArray = [...tasks, newTask];
    setTasks(newTaskArray);
    setModal(false);
    return;
  }
  const editIndex: number = tasks.findIndex((task) => task.id === edit);
  const newTaskArray = [...tasks];
  newTaskArray[editIndex].complete = complete;
  newTaskArray[editIndex].description = description;
  newTaskArray[editIndex].editedAt = new Date().valueOf();
  newTaskArray[editIndex].goalAt = goalAt.valueOf();
  newTaskArray[editIndex].tags = tagArray;
  newTaskArray[editIndex].title = title;
  setTasks(newTaskArray);
  setModal(false);
  return;
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
