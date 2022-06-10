import { useTheme } from "styled-components";
import Box from "../../core/components/Box";

export const Line = () => {
  const theme = useTheme();
  return (
    <Box
      width="80%"
      borderBottom={`3px solid ${theme.backgroundColors.primary}`}
    ></Box>
  );
};
