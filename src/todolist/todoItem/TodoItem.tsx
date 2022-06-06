import { FC } from "react";
import { useTheme } from "styled-components";
import { checkTask, deleteTask } from "../TodoSetting";
import { DeleteButton, EditButton, Tag } from "../common/Component";
import Box from "../../components/core/Box";
import Input from "../../components/core/Input";
import { AllTagsObject, AllTasksObject, Tasks } from "../../../@types/todoList";

interface Props {
  allTasksObject: AllTasksObject;
  filteredTasks: Tasks;
  allTagsObject: AllTagsObject;
  setEdit: any;
  setModal: any;
}

const TodoItem: FC<Props> = ({
  allTasksObject,
  filteredTasks,
  allTagsObject,
  setEdit,
  setModal,
}) => {
  const theme = useTheme();
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
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
                padding="0.5rem"
                borderBottom="3px solid white"
              >
                <Input
                  type="checkbox"
                  checked={task.complete}
                  onChange={() => {
                    checkTask(
                      allTasksObject.tasks,
                      allTasksObject.setTasks,
                      task.id
                    );
                  }}
                />
                {task.title}
                <Box>
                  <EditButton
                    onClick={() => {
                      setEdit(task.id);
                      setModal(true);
                    }}
                  />
                  <DeleteButton
                    onClick={() => {
                      deleteTask(allTasksObject, task.id);
                    }}
                  />
                </Box>
              </Box>
              <Box display="flex">
                {task.tags.map((tag) => (
                  <Tag
                    color={allTagsObject.allTags[tag].color}
                    backgroundColor={allTagsObject.allTags[tag].backgroundColor}
                    key={tag}
                  >
                    {tag}
                  </Tag>
                ))}
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};
export default TodoItem;
