import { FC } from "react";
import { useTheme } from "styled-components";
import Box from "../../components/core/Box";
import Button from "../../components/core/Button";

interface Props {
  onClick: any;
}
interface TagProps {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
  onClick?: any;
}
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
export const Tag: FC<TagProps> = ({
  children,
  backgroundColor,
  color,
  onClick,
}) => {
  return (
    <Button
      p="0.5rem 0.5rem"
      m="0.3rem 0.3rem"
      borderRadius="5px"
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const Line = () => {
  const theme = useTheme();
  return (
    <Box
      width="80%"
      borderBottom={`3px solid ${theme.backgroundColors.primary}`}
    ></Box>
  );
};
