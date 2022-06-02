import { FC, useEffect, useState } from "react";
import { addTask, onSubmit, tasks } from "../../todolist/TodoSetting";
import Box, { BigBox, BlueBox, Input, Tag } from "../core/StyledComp";
import { ModalItem, ModalWrapper } from "./ModalComp";
import DatePicker from "react-datepicker";
import useInput from "../core/Hooks";

interface Props {
  tasks: Array<tasks>;
  setTasks: any;
  edit: number;
  setModal: any;
}
const Modal: FC<Props> = ({ tasks, setTasks, edit, setModal }) => {
  const [goal, setGoal] = useState<Date>(new Date());
  const [complete, setComplete] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#000000");
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const title = useInput("");
  const description = useInput("");
  const tag = useInput("");
  const [tags, setTags] = useState<Array<string>>([]);
  useEffect(() => {
    if (edit === 0) {
      //새로운 태스크
      title.setValue("");
      description.setValue("");
      setColor("#000000");
      setBgColor("#FFFFFF");
      setGoal(new Date());
      tag.setValue("");
      setComplete(false);
      setTags([]);
    } else {
      const editedTask = tasks.find((task) => task.id === edit) as tasks;
      title.setValue(editedTask.title);
      description.setValue(editedTask.description);
      setColor("#000000");
      setBgColor("#FFFFFF");
      setGoal(new Date(editedTask.goalAt));
      tag.setValue("");
      setComplete(editedTask.complete);
      setTags([...editedTask.tags]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);
  return (
    <ModalWrapper>
      <ModalItem>
        <Box>Task</Box>
        <BigBox display="flex" justifyContent="space-between">
          Title
          <Input
            type="text"
            value={title.value}
            onChange={title.onChange}
          ></Input>
        </BigBox>
        <BigBox display="flex" justifyContent="space-between">
          Description
          <Input
            type="text"
            value={description.value}
            onChange={description.onChange}
          ></Input>
        </BigBox>
        <BigBox display="flex" justifyContent="space-between">
          Goal
          <Box>
            <DatePicker
              selected={goal}
              onChange={(date: Date) => setGoal(date)}
            ></DatePicker>
          </Box>
        </BigBox>
        <BigBox display="flex" justifyContent="space-between">
          Complete
          <Input
            type="checkbox"
            checked={complete}
            onChange={() => setComplete((prev) => !prev)}
          ></Input>
        </BigBox>
        <BigBox display="flex" justifyContent="space-between">
          Tags
          <Input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></Input>
          <Input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          ></Input>
          <Input type="text" value={tag.value} onChange={tag.onChange} />
        </BigBox>
        <BigBox display="flex" justifyContent="space-between">
          <Box>Example</Box>
          <Tag color={color} backgroundColor={bgColor}>
            {tag.value}
          </Tag>
        </BigBox>
        <BigBox display="flex" justifyContent="space-between">
          <BlueBox
            padding="1rem 1rem"
            onClick={() => {
              onSubmit(
                edit,
                title.value,
                description.value,
                goal,
                tags,
                tasks,
                setTasks,
                complete,
                setModal
              );
            }}
          >
            Submit
          </BlueBox>
          <BlueBox
            padding="1rem 1rem"
            onClick={() => {
              setModal(false);
            }}
          >
            Cancel
          </BlueBox>
        </BigBox>
      </ModalItem>
    </ModalWrapper>
  );
};
export default Modal;
