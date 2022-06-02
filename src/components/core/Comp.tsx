import { FC } from "react";
import { WhiteButton } from "./StyledComp";

interface Props {
  onClick: any;
}
export const EditButton = () => <WhiteButton>Edit</WhiteButton>;
export const DeleteButton: FC<Props> = ({ onClick }) => (
  <WhiteButton onClick={onClick}>Delete</WhiteButton>
);
