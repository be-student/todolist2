import { FC } from "react";
import TodoList from "../../todo/components/TodoList";

interface Props {
  filterTag: string;
  setFilterTag: any;
}
const TagPage: FC<Props> = ({ filterTag, setFilterTag }) => {
  return <TodoList filterTag={filterTag} setFilterTag={setFilterTag} isTag />;
};
export default TagPage;
