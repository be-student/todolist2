import styled from "styled-components";
import {
  typography,
  layout,
  color,
  space,
  flexbox,
  border,
  backgroundColor,
  TypographyProps,
  LayoutProps,
} from "styled-system";

type TBoxProps = TypographyProps & LayoutProps;//+input 이나 onclick을 막는다
const Box = styled.div<TBoxProps>`
  ${typography}
  ${layout}
  ${color}
  ${space}
  ${flexbox}
  ${border}
`;

export default Box;
