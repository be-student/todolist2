import { PageBackground, PageLayout } from "./Component";
import { deleteCompletedTask, tags, tasks } from "../../todolist/TodoSetting";
import { FC, useState } from "react";
import { useTheme } from "styled-components";
import Box, { BigBox, BlueBox, Line } from "../core/StyledComp";
import Title from "../title/Title";
import Bar from "../bar/Bar";
import Link from "next/link";
import TodoItem from "../todoItem/TodoItem";
import Modal from "../modal/Modal";

interface Props {
  tasks: Array<tasks>;
  filteredTasks: Array<tasks>;
  setTasks: (tasks: Array<tasks>) => void;
  tags: tags;
  setTags: (tags: tags) => void;
  filter: number;
  setFilter: any;
  edit: number;
  setEdit: any;
  filterTag: string;
  setFilterTag: any;
}

const Page: FC<Props> = ({
  tasks,
  setTasks,
  tags,
  setTags,
  edit,
  setEdit,
  filter,
  filteredTasks,
  setFilter,
  filterTag,
  setFilterTag,
}) => {
  const theme = useTheme();
  const [modal, setModal] = useState<boolean>(true);
  const Header = [
    <Box key="1" flex="1" textAlign="center">
      <Link href="/">할 일</Link>
    </Box>,
    <Box key="2" flex="1" textAlign="center">
      <Link href="/created">생성 순</Link>
    </Box>,
    <Box key="3" flex="1" textAlign="center">
      <Link href="/goal">마감 순</Link>
    </Box>,
    <BlueBox key="4" flex="1">
      <Link href="/tags">태그</Link>
    </BlueBox>,
  ];
  const Footer = [
    <Box
      key="1"
      flex="1"
      textAlign="center"
      fontWeight={filter === 2 ? "700" : "400"}
      onClick={() => setFilter((prev: number) => (prev === 2 ? 0 : 2))}
    >
      미완료 보기
    </Box>,
    <Box
      key="2"
      flex="1"
      textAlign="center"
      fontWeight={filter === 1 ? "700" : "400"}
      onClick={() =>
        setFilter((prev: number) => {
          return prev === 1 ? 0 : 1;
        })
      }
    >
      완료 보기
    </Box>,
    <BlueBox
      key="3"
      flex="1"
      onClick={() => {
        deleteCompletedTask(tasks, setTasks);
      }}
    >
      완료 제거
    </BlueBox>,
  ];

  return (
    <PageBackground backgroundColor={theme.backgroundColors.primary}>
      <PageLayout backgroundColor={theme.backgroundColors.white}>
        <BigBox display="flex" flexDirection="column" alignItems="center">
          <Title setModal={setModal} setEdit={setEdit}></Title>
          <Bar Components={Header}></Bar>
          <Line />
        </BigBox>
        <BigBox display="flex" flexDirection="column" alignItems="center">
          <TodoItem
            tasks={tasks}
            setTasks={setTasks}
            filteredTasks={filteredTasks}
            tags={tags}
            setEdit={setEdit}
            setModal={setModal}
          />
        </BigBox>
        <BigBox display="flex" flexDirection="column" alignItems="center">
          <Line />
          <Bar Components={Footer}></Bar>
        </BigBox>
      </PageLayout>
      {modal && <Modal />}
    </PageBackground>
  );
};
export default Page;
