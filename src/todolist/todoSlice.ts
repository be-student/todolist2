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

export interface CheckedState {
  isComplete: boolean;
  isNotComplete: boolean;
  id: number;
  tasks: Array<tasks>;
  tags: tags;
}

const initialState: CheckedState = {
  isComplete: false,
  isNotComplete: false,
  id: 2,
  tasks: [
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
  ],
  tags: {
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
  },
};

export const taskSlice = {
  name: "task",
  initialState,
  reducers: {
    checkComplete: (state: { isComplete: boolean; isNotComplete: boolean }) => {
      (state.isComplete = !state.isComplete), (state.isNotComplete = false);
    },
    checkNotComplete: (state: {
      isComplete: boolean;
      isNotComplete: boolean;
    }) => {
      (state.isComplete = false), (state.isNotComplete = !state.isNotComplete);
    },
    addTask: (
      state: { id: number; tasks: tasks[] },
      action: { payload: Partial<tasks> }
    ) => {
      state.id++,
        (action.payload.id = state.id),
        (action.payload.createdAt = new Date().valueOf());
      state.tasks.push(action.payload as tasks);
    },
    deleteTask: (state: { tasks: any[] }, action: { payload: number }) => {
      state.tasks = state.tasks.filter(
        (task: { id: any }) => task.id !== action.payload
      );
    },
    deleteCompletedTask: (state: { tasks: any[] }) => {
      state.tasks = state.tasks.filter(
        (task: { complete: boolean }) => task.complete === false
      );
    },
    checkTask: (state: { tasks: any[] }, action: { payload: number }) => {
      const index = state.tasks.findIndex(
        (element: { id: any }) => element.id === action.payload
      );
      state.tasks[index].complete = !state.tasks[index].complete;
    },
    editTask: (state: { tasks: any[] }, action: { payload: any }) => {
      const index = state.tasks.findIndex(
        (element: { id: any }) => element.id === action.payload.id
      );
      for (const p in action.payload) {
        state.tasks[index][p] = action.payload[p];
      }
    },
    editTag: (
      state: { tags: { [x: string]: { color: any; backgroundColor: any } } },
      action: any
    ) => {
      state.tags[action.payload.title] = {
        color: action.payload.color,
        backgroundColor: action.payload.backgroundColor,
      };
    },
    deleteTag: (
      state: {
        tasks: { [x: string]: { tag: any[] } };
        tags: { [x: string]: any };
      },
      action: any
    ) => {
      for (const key in state.tasks) {
        state.tasks[key].tag = state.tasks[key].tag.filter(
          (tag: any) => tag !== action.payload
        );
      }

      delete state.tags[action.payload];
    },
  },
};
