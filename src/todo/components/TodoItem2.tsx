import { FC } from "react";
import { useTheme } from "styled-components";
import { DeleteButton, EditButton, Tag } from "../../common/components/DeleteButton";
import { AllTagsObject, AllTasksObject, Tasks } from "../../../@types/todoList";

interface Props {
  allTasksObject: AllTasksObject;
  filteredTasks: Tasks;
  allTagsObject: AllTagsObject;
  setEdit: any;
  setModal: any;
}

const TodoItem: FC<Props> = ({
  todo,
  onCheck,
  onDelete,
  onEdit,
  onSelectTag,
}) => {
  const theme = useTheme();
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Checkbox value={todo.isCompleted} onChange={onCheck} />
        <Title>{todo.title}</Title>
        <EditButton onEdit={() => onEdit(todo)} />
        <DeleteButton onDelete={() => onDelete(todo.id)} />
      </Box>
      <Box>
        <TagList tags={todo.tags} onSelect={onSelectTag} />
      </Box>
    </Box>
  );
};
export default TodoItem;
