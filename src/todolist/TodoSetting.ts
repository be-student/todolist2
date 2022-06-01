export interface tasks {
  id: number;
  title: string;
  description: string;
  tag: Array<string>;
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
    tag: ["tag2", "tag3"],
    complete: true,
    createdAt: new Date().valueOf(),
    goalAt: new Date().valueOf() + 1000 * 60 * 60 * 24 * 4,
  },
  {
    id: 2,
    title: "second Task",
    description: "task description",
    tag: ["tag1", "tag2"],
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
  setTasks(
    (prev: Array<tasks>) => (prev[index].complete = !prev[index].complete)
  );
};
export const editTask = (
  Tasks: Array<tasks>,
  setTasks: Function,
  newTask: Partial<tasks>
) => {
  const index = Tasks.findIndex((task) => task.id === newTask.id);
  for (const p in newTask) {
  }
};
//   editTask: (state: { tasks: any[] }, action: { payload: any }) => {
//     const index = state.tasks.findIndex(
//       (element: { id: any }) => element.id === action.payload.id
//     );
//     for (const p in action.payload) {
//       state.tasks[index][p] = action.payload[p];
//     }
//   },
//   editTag: (
//     state: { tags: { [x: string]: { color: any; backgroundColor: any } } },
//     action: any
//   ) => {
//     state.tags[action.payload.title] = {
//       color: action.payload.color,
//       backgroundColor: action.payload.backgroundColor,
//     };
//   },
//   deleteTag: (
//     state: {
//       tasks: { [x: string]: { tag: any[] } };
//       tags: { [x: string]: any };
//     },
//     action: any
//   ) => {
//     for (const key in state.tasks) {
//       state.tasks[key].tag = state.tasks[key].tag.filter(
//         (tag: any) => tag !== action.payload
//       );
//     }

//     delete state.tags[action.payload];
//   },
// },
