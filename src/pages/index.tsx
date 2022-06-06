import { FC } from "react";
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
      sortFunction={undefined}
    />
  );
};
export default Index;
