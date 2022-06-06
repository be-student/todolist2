import _ from "lodash";
import {
  AllTasksObject,
  Tag,
  Tags,
  Task,
  TaskObject,
  Tasks,
} from "../../@types/todoList";

export const initialTasks: Tasks = [
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
export const initialTags: Tags = {
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

export const deleteTask = (
  allTasksObject: AllTasksObject,
  removeId: number
) => {
  allTasksObject.setTasks(
    allTasksObject.tasks.filter((task) => task.id !== removeId)
  );
};
export const deleteCompletedTask = (allTasksObject: AllTasksObject) => {
  allTasksObject.setTasks(
    allTasksObject.tasks.filter((task) => task.complete === false)
  );
};
export const checkTask = (
  Tasks: Tasks,
  setTasks: Function,
  checkId: number
) => {
  const index = Tasks.findIndex((task) => task.id === checkId);
  const newTask = [...Tasks];
  newTask[index].complete = !newTask[index].complete;
  setTasks(newTask);
};
export const onSubmit = (
  taskObject: TaskObject,
  allTasksObject: AllTasksObject,
  edit: number,
  setModal: any
) => {
  if (taskObject.title.value === "") {
    alert("please enter title");
    return;
  }
  if (taskObject.description.value === "") {
    alert("please enter description");
    return;
  }
  if (edit === 0) {
    //ADD
    const lastTaskId: number =
      allTasksObject.tasks.length === 0
        ? 0
        : allTasksObject.tasks[allTasksObject.tasks.length - 1].id;
    const newTask: Task = {
      id: lastTaskId + 1,
      description: taskObject.description.value,
      title: taskObject.title.value,
      goalAt: taskObject.goal.valueOf(),
      createdAt: new Date().valueOf(),
      editedAt: new Date().valueOf(),
      tags: taskObject.tags,
      complete: taskObject.complete,
    };
    const newTaskArray = [...allTasksObject.tasks, newTask];
    allTasksObject.setTasks(newTaskArray);
    setModal(false);
    return;
  }
  //EDIT
  const editIndex: number = allTasksObject.tasks.findIndex(
    (task) => task.id === edit
  );
  const newTaskArray = [...allTasksObject.tasks];
  newTaskArray[editIndex].complete = taskObject.complete;
  newTaskArray[editIndex].description = taskObject.description.value;
  newTaskArray[editIndex].editedAt = new Date().valueOf();
  newTaskArray[editIndex].goalAt = taskObject.goal.valueOf();
  newTaskArray[editIndex].tags = [...taskObject.tags];
  newTaskArray[editIndex].title = taskObject.title.value;
  allTasksObject.setTasks(newTaskArray);
  setModal(false);
  return;
};
