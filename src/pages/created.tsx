import { FC } from "react";
import TodoList from "../todolist/TodoList";
import { tasks } from "../todolist/TodoSetting";

interface Props {
  filterTag: string;
  setFilterTag: any;
}
const Index: FC<Props> = ({ filterTag, setFilterTag }) => {
  return (
    <TodoList
      filterTag={filterTag}
      setFilterTag={setFilterTag}
      sortFunction={(a: tasks, b: tasks) => a.createdAt - b.createdAt}
    ></TodoList>
  );
};
export default Index;
