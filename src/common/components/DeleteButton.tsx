import { FC } from "react";
import { useTheme } from "styled-components";
import Button from "../../components/core/Button";

interface Props {
  onClick: any;
}

export const DeleteButton: FC<Props> = ({ onClick }) => (
  <Button
    bg="white"
    padding="0.5rem 0.5rem"
    borderRadius="5px"
    onClick={onClick}
  >
    Delete
  </Button>
);
