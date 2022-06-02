import { FC } from "react";
import { useTheme } from "styled-components";
import Box, { BigBox } from "../core/StyledComp";

interface Props {
  setModal: any;
  setEdit: any;
}

const Title: FC<Props> = ({ setModal, setEdit }) => {
  const theme = useTheme();
  return (
    <BigBox display="flex" alignItems="center" padding="0 1rem">
      <Box textAlign="center" flex="1">
        Poomang
      </Box>
      <Box textAlign="center" flex="1">
        Todolist
      </Box>
      <Box
        textAlign="center"
        flex="1"
        borderRadius="10px"
        backgroundColor={theme.backgroundColors.blue}
        color="white"
        padding="1rem 1rem"
        onClick={() => {
          setModal(true);
          setEdit(0);
        }}
      >
        + New Task
      </Box>
    </BigBox>
  );
};
export default Title;
