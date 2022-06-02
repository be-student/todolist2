import { FC } from "react";
import { addTask, tasks } from "../../todolist/TodoSetting";
import { ModalItem, ModalWrapper } from "./ModalComp";

interface Props {
  tasks: Array<tasks>;
  setTasks: any;
  edit: number;
}
const Modal: FC<Props> = ({ tasks, setTasks, edit }) => {
  return (
    <ModalWrapper>
      <ModalItem>asdf</ModalItem>
    </ModalWrapper>
  );
};
export default Modal;
