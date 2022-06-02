import { FC } from "react";
import { useTheme } from "styled-components";
import { checkTask, deleteTask, tags, tasks } from "../../todolist/TodoSetting";
import { DeleteButton, EditButton } from "../core/Comp";
import Box, { BigBox, Input, Tag } from "../core/StyledComp";

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
    <BigBox>
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
                borderRadius="5px"
                margin="0.5rem 0"
                padding="0.5rem 1rem"
                key={task.id}
                backgroundColor={theme.backgroundColors.primary}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
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
                    <EditButton
                      onClick={() => {
                        setEdit(task.id);
                        setModal(true);
                      }}
                    />
                    <DeleteButton
                      onClick={() => {
                        deleteTask(tasks, setTasks, task.id);
                      }}
                    />
                  </Box>
                </Box>
                <BigBox display="flex">
                  {task.tags.map((tag) => (
                    <Tag
                      color={tags[tag].color}
                      backgroundColor={tags[tag].backgroundColor}
                      key={tag}
                    >
                      {tag}
                    </Tag>
                  ))}
                </BigBox>
              </Box>
            );
          })}
      </BigBox>
    </BigBox>
  );
};
export default TodoItem;
