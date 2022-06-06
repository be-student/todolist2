import { FC } from "react";
import { Task } from "../../@types/todoList";
import TodoList from "../todolist/TodoList";

interface Props {
  filterTag: string;
  setFilterTag: any;
}
const Index: FC<Props> = ({ filterTag, setFilterTag }) => {
  return (
    <TodoList
      filterTag={filterTag}
      setFilterTag={setFilterTag}
      sortFunction={(a: Task, b: Task) => a.createdAt - b.createdAt}
    />
  );
};
export default Index;
