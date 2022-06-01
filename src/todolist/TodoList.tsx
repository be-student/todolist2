import { useState } from "react";
import { PageLayout } from "../components/pagelayout/Component";
import {
  deleteTask,
  initialTags,
  initialTasks,
  tags,
  tasks,
} from "./TodoSetting";

const TodoList = () => {
  const [tasks, setTasks] = useState<Array<tasks>>(initialTasks);
  const [tags, setTags] = useState<tags>(initialTags);
  return <PageLayout></PageLayout>;
};
export default TodoList;
