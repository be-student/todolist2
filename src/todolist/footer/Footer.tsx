import Link from "next/link";
import { FC } from "react";
import { AllTasksObject, Task, Tasks } from "../../../@types/todoList";
import Box from "../../components/core/Box";
import { deleteCompletedTask } from "../TodoSetting";

interface Props {
  allTasksObject: AllTasksObject;
  filter: number;
  setFilter: any;
}
const Navigation: FC<Props> = ({ filter, setFilter }) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-around"
      margin="1rem 0"
    >
      <Box
        key="1"
        flex="1"
        textAlign="center"
        fontWeight={filter === 2 ? "700" : "400"}
        onClick={() => setFilter((prev: number) => (prev === 2 ? 0 : 2))}
      >
        미완료 보기
      </Box>

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
      </Box>

      <Box
        key="3"
        flex="1"
        textAlign="center"
        onClick={() => {
          deleteCompletedTask(allTasksObject);
        }}
      >
        완료 제거
      </Box>
    </Box>
  );
};

export default Navigation;
