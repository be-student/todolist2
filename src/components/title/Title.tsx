import { useTheme } from "styled-components";
import Box, { BigBox } from "../core/StyledComp";

const Title = () => {
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
      >
        + New Task
      </Box>
    </BigBox>
  );
};
export default Title;
