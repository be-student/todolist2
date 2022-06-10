import { FC, useEffect, useState } from "react";
import { editTag, onSubmit } from "../logic/TodoSetting";

import DatePicker from "react-datepicker";
import useInput from "../../hooks/core/useInput";
import Box from "../../components/core/Box";
import Input from "../../components/core/Input";
import { useTheme } from "styled-components";
import { Tag } from "../../common/components/DeleteButton";

import styled from "styled-components";
import Button from "../../components/core/Button";
import {
  Task,
  Tags,
  Tasks,
  TaskObject,
  AllTasksObject,
  AllTagsObject,
} from "../../../@types/todoList";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 50%;
  padding: 1.5rem 0;
  box-sizing: border-box;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: scroll;
  z-index: 3;
  scrollbar-width: none;
  --ms-overflow-style: none;
`;
const ModalItem = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 1rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

interface Props {
  allTasksObject: AllTasksObject;
  edit: number;
  setModal: any;
  allTagsObject: AllTagsObject;
}
const Modal: FC<Props> = ({
  allTasksObject,
  edit,
  setModal,
  allTagsObject,
}) => {
  const theme = useTheme();
  const [goal, setGoal] = useState<Date>(new Date());
  const [complete, setComplete] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#000000");
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const title = useInput("");
  const description = useInput("");
  const tag = useInput("");
  const [tags, setTags] = useState<Array<string>>([]);

  const taskObject: TaskObject = {
    goal,
    setGoal,
    complete,
    setComplete,
    color,
    setColor,
    bgColor,
    setBgColor,
    title,
    description,
    tag,
    tags,
    setTags,
  };
  useEffect(() => {
    if (edit === 0) {
      //새로운 태스크
      taskObject.title.setValue("");
      taskObject.description.setValue("");
      taskObject.setColor("#000000");
      taskObject.setBgColor("#FFFFFF");
      taskObject.setGoal(new Date());
      taskObject.tag.setValue("");
      taskObject.setComplete(false);
      taskObject.setTags([]);
    } else {
      const editedTask = allTasksObject.tasks.find(
        (task) => task.id === edit
      ) as Task;
      taskObject.title.setValue(editedTask.title);
      taskObject.description.setValue(editedTask.description);
      taskObject.setColor("#000000");
      taskObject.setBgColor("#FFFFFF");
      taskObject.setGoal(new Date(editedTask.goalAt));
      taskObject.tag.setValue("");
      taskObject.setComplete(editedTask.complete);
      taskObject.setTags([...editedTask.tags]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);
  return (
    <ModalWrapper>
      <ModalItem>
        <Box>Task</Box>
        <Box display="flex" justifyContent="space-between">
          Title
          <Input
            type="text"
            value={taskObject.title.value}
            onChange={taskObject.title.onChange}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          Description
          <Input
            type="text"
            value={taskObject.description.value}
            onChange={taskObject.description.onChange}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          Goal
          <Box>
            <DatePicker
              selected={taskObject.goal}
              onChange={(date: Date) => taskObject.setGoal(date)}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          Complete
          <Input
            type="checkbox"
            checked={taskObject.complete}
            onChange={() => taskObject.setComplete((prev) => !prev)}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          Tags
          <Input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <Input
            type="color"
            value={taskObject.bgColor}
            onChange={(e) => taskObject.setBgColor(e.target.value)}
          />
          <Input
            width="20%"
            placeholder="tag"
            type="text"
            value={taskObject.tag.value}
            onChange={taskObject.tag.onChange}
          />
          <Button
            bg={theme.backgroundColors.primary}
            onClick={() => {
              const newTag = {
                title: taskObject.tag.value,
                color: color,
                backgroundColor: taskObject.bgColor,
              };
              editTag(allTagsObject, newTag, taskObject);
            }}
          >
            submit
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>Example</Box>
          <Tag color={color} backgroundColor={bgColor}>
            {tag.value}
          </Tag>
        </Box>
        <Box display="flex">
          {tags.map((tag) => (
            <Tag
              key={tag}
              color={
                allTagsObject.allTags[tag] && allTagsObject.allTags[tag].color
              }
              backgroundColor={
                allTagsObject.allTags[tag] &&
                allTagsObject.allTags[tag].backgroundColor
              }
            >
              {tag}
            </Tag>
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box
            p="1rem 1rem"
            onClick={() => {
              onSubmit(taskObject, allTasksObject, edit, setModal);
            }}
          >
            Submit
          </Box>

          <Box
            p="1rem 1rem"
            onClick={() => {
              setModal(false);
            }}
          >
            Cancel
          </Box>
        </Box>
      </ModalItem>
    </ModalWrapper>
  );
};
export default Modal;
