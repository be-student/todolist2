import { FC, useEffect, useMemo, useRef, useState } from "react";
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
import { Line, Tag } from "../../common/components/Component";
import { PageBackground, PageLayout } from "../../common/components/PageComponent";
import Footer from "../../common/components/Footer";
import Modal from "./Modal";
import Navigation from "../../common/components/Navigation";
import Title from "../../common/components/Title";
import TodoItem from "./TodoItem";
import { initialTags, initialTasks } from "./TodoSetting";

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
  // const asdf = useRef();
  // const b = useRef();
  // useEffect(() => {
  //   const temp = localStorage.getItem("Tasks");
  //   if (!temp) {
  //     console.log("initialize");
  //     localStorage.setItem("Tasks", JSON.stringify(initialTasks));
  //     checking[0] = 0;
  //   } else {
  //     console.log("loading");
  //     const parsed = JSON.parse(temp);
  //     asdf.current = parsed;
  //     setTasks(parsed);
  //     checking[0] = 0;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   console.log("set");
  //   if (checking[0] === 0) {
  //     localStorage.setItem("Tasks", JSON.stringify(asdf.current));
  //     checking[0] = -1;
  //   } else if (checking[0] === -1) {
  //     localStorage.setItem("Tasks", JSON.stringify(tasks));
  //   }
  // }, [tasks, checking]);

  const [allTags, setAllTags] = useState<Tags>(initialTags);
  // useEffect(() => {
  //   const temp = localStorage.getItem("Tags");
  //   if (!temp) {
  //     localStorage.setItem("Tags", JSON.stringify(initialTags));
  //     checking[1] = 0;
  //   } else {
  //     const parsed = JSON.parse(temp);
  //     b.current = parsed;
  //     setAllTags(parsed);
  //     checking[1] = 0;
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   if (checking[1] === 0) {
  //     localStorage.setItem("Tags", JSON.stringify(b.current));
  //     checking[1] = -1;
  //   } else if (checking[1] === -1) {
  //     localStorage.setItem("Tasks", JSON.stringify(allTags));
  //   }
  // }, [allTags, checking]);
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
  return (
    <PageBackground backgroundColor={theme.backgroundColors.primary}>
      <PageLayout backgroundColor={theme.backgroundColors.white}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Title setModal={setModal} setEdit={setEdit}></Title>
          <Navigation />
          <Line />
          {filterTag !== "" && (
            <Tag
              textAlign="center"
              color={allTags[filterTag].color}
              backgroundColor={allTags[filterTag].backgroundColor}
              onClick={() => setFilterTag("")}
            >
              &#34;{filterTag}&#34; 만 보기 제거
            </Tag>
          )}
        </Box>
        {!isTag && (
          <TodoItem
            allTasksObject={allTasksObject}
            filteredTasks={filteredTasks}
            allTagsObject={allTagsObject}
            setEdit={setEdit}
            setModal={setModal}
          />
        )}
        {isTag && (
          <Box display="flex" flexDirection="column" alignItems="center">
            {Object.entries(allTags).map((tag) => {
              return (
                <Tag
                  key={tag[0]} //title
                  color={tag[1].color}
                  backgroundColor={tag[1].backgroundColor}
                  onClick={() => {
                    setFilterTag(tag[0]);
                  }}
                >
                  {tag[0]}
                </Tag>
              );
            })}
          </Box>
        )}
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Line />
          <Footer
            allTasksObject={allTasksObject}
            filter={filter}
            setFilter={setFilter}
          />
        </Box>
      </PageLayout>
      {modal && (
        <Modal
          allTasksObject={allTasksObject}
          edit={edit}
          setModal={setModal}
          allTagsObject={allTagsObject}
        />
      )}
    </PageBackground>
  );
};
export default TodoList;
