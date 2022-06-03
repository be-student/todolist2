import { FC } from "react";
import TodoList from "../todolist/TodoList";

interface Props {
  filterTag: string;
  setFilterTag: any;
}
const TagPage: FC<Props> = ({ filterTag, setFilterTag }) => {
  return (
    <TodoList
      filterTag={filterTag}
      setFilterTag={setFilterTag}
      isTag
    ></TodoList>
  );
};
export default TagPage;
