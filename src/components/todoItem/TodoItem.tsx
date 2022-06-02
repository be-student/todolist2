import { FC } from "react";
import { useTheme } from "styled-components";
import { checkTask, tags, tasks } from "../../todolist/TodoSetting";
import { DeleteButton, EditButton } from "../core/Comp";
import Box, { BigBox, Input } from "../core/StyledComp";

interface Props {
  filteredTasks: Array<tasks>;
  tasks: Array<tasks>;
  setTasks: any;
  tags: tags;
  setEdit: any;
  setModal: any;
}

const TodoItem: FC<Props> = ({
  filteredTasks,
  tasks,
  setTasks,
  tags,
  setEdit,
  setModal,
}) => {
  const theme = useTheme();
  return (
    <BigBox
      flex="0 0 100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      {filteredTasks &&
        filteredTasks.map((task) => {
          return (
            <Box
              width="80%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="5px"
              margin="0.5rem 0"
              padding="0.5rem 1rem"
              key={task.id}
              backgroundColor={theme.backgroundColors.primary}
            >
              <Input
                type="checkbox"
                checked={task.complete}
                onChange={() => {
                  checkTask(tasks, setTasks, task.id);
                }}
              ></Input>
              {task.title} {task.description}
              <Box>
                <EditButton />
                <DeleteButton />
              </Box>
            </Box>
          );
        })}
    </BigBox>
  );
};
export default TodoItem;
