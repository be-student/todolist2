import { FC } from "react";
import Button from "../../core/components/Button";

export const EditButton: FC<Props> = ({ onClick }) => (
  <Button
    bg="white"
    padding="0.5rem 0.5rem"
    margin="0 0.5rem"
    borderRadius="5px"
    onClick={onClick}
  >
    Edit
  </Button>
);
