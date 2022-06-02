import { FC, useMemo, useState } from "react";
import Page from "../components/pagelayout/PageLayout";
import {
  deleteTask,
  initialTags,
  initialTasks,
  tags,
  tasks,
} from "./TodoSetting";

interface Props {
  sortFunction: undefined | ((a: tasks, b: tasks) => number);
}
enum Check {
  ALL,
  COMPLETED,
  NOTCOMPLETED,
}
const TodoList: FC<Props> = ({ sortFunction }) => {
  const [Tasks, SetTasks] = useState<Array<tasks>>(initialTasks);
  const [Tags, SetTags] = useState<tags>(initialTags);
  const [edit, setEdit] = useState<number>(0);
  const [filter, setFilter] = useState<Check>(0);
  const [filterTag, setFilterTag] = useState<string>("");
  const sortedTasks = useMemo(() => {
    return Tasks.sort(sortFunction);
  }, [Tasks, sortFunction]);

  const filteredTasks = useMemo(() => {
    if (filter === 0) {
      return sortedTasks;
    }
    if (filter === 1) {
      return sortedTasks.filter((task) => task.complete === true);
    }
    return sortedTasks.filter((task) => task.complete === false);
  }, [sortedTasks, filter]);

  const filterTagTasks = useMemo(() => {
    if (filterTag === "") {
      return filteredTasks;
    }
    return filteredTasks.filter((task) => task.tags.includes(filterTag));
  }, [filteredTasks, filterTag]);
  return (
    <Page
      tasks={Tasks}
      filteredTasks={filterTagTasks}
      setTasks={SetTasks}
      tags={Tags}
      edit={edit}
      setEdit={setEdit}
      setTags={SetTags}
      filter={filter}
      setFilter={setFilter}
      filterTag={filterTag}
      setFilterTag={setFilterTag}
    />
  );
};
export default TodoList;
