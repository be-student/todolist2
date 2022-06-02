import { FC, useState } from "react";
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
  const tags = useInput("");
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
          <Input type="text" value={tags.value} onChange={tags.onChange} />
        </BigBox>
        <BigBox display="flex" justifyContent="space-between">
          <Box>Example</Box>
          <Tag color={color} backgroundColor={bgColor}>
            {title.value}
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
                [],
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
