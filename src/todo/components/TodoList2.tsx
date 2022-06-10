import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import {
  Task,
  Tags,
  Tasks,
  AllTagsObject,
  AllTasksObject,
} from "../../../@types/todoList";
import Box from "../components/core/Box";
import { Check } from "../constants/Check";
import { Line, Tag } from "../../common/components/DeleteButton";
import { PageBackground, PageLayout } from "../../common/components/PageComponent";
import Footer from "../../common/components/Footer";
import Modal from "./Modal";
import Navigation from "../../common/components/Navigation";
import Title from "../../common/components/Title";
import TodoItem from "../../../legacy/TodoItem";
import { initialTags, initialTasks } from "../logic/TodoSetting";

interface Props {
  sortFunction?: undefined | ((a: Task, b: Task) => number);
  isTag?: boolean;
  filterTag: string;
  setFilterTag: any;
}
const TodoList: FC<Props> = ({
  sortFunction,
  isTag,
  filterTag,
  setFilterTag,
}) => {
  const theme = useTheme();
  const [tasks, setTasks] = useState<Tasks>(initialTasks);
  const checking = useMemo(() => [1, 1, 1], []);

  const [allTags, setAllTags] = useState<Tags>(initialTags);

  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<number>(0);
  const [filter, setFilter] = useState<Check>(Check.ALL);

  const allTasksObject: AllTasksObject = { tasks, setTasks };
  const allTagsObject: AllTagsObject = { allTags, setAllTags };
  const sortedTasks = useMemo(() => {
    return tasks.sort(sortFunction);
  }, [tasks, sortFunction]);

  const checkTasks = useMemo(() => {
    if (filter === Check.ALL) {
      return sortedTasks;
    }
    if (filter === Check.COMPLETED) {
      return sortedTasks.filter((task) => task.complete === true);
    }
    return sortedTasks.filter((task) => task.complete === false);
  }, [sortedTasks, filter]);

  const filteredTasks = useMemo(() => {
    if (filterTag === "") {
      return checkTasks;
    }
    return checkTasks.filter((task) => task.tags.includes(filterTag));
  }, [checkTasks, filterTag]);

  const [selectedFilter, setSelectedFilter] = useState<number>(Check.ALL);
  const [selectedTag, setSelectedTag] = useState('');
  const filteredTasks = useMemo(() => tasks.filter((todo) => {
    switch(selectedFilter) {
      case Check.ALL:
        return true;
      case Check.COMPLETED:
        return todo.complete;
      case Check.NOTCOMPLETED:
        return !todo.complete;
    }
  }).filter(todo => !selectedTag || todo.tags.includes(selectedTag)), [selectedFilter, tasks, selectedTag]);
  const openDeleteModal = useCallback(() => {

  }, []);
  return (
    <PageBackground backgroundColor={theme.backgroundColors.primary}>
      <PageLayout backgroundColor={theme.backgroundColors.white}>
        <TodoFilter value={selectedFilter} onChange={setSelctedFilter} />
        <TagFilter />
        {filteredTasks.map((todo) => <TodoItme todo={todo} onEdit={} onDelete={openDeleteModal} onSelectTag={setSelectedTag} onCheck={} />)}
      </PageLayout>
    </PageBackground>
  );
};
export default TodoList;
