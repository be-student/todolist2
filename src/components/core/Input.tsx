import styled from "styled-components";
import {
  border,
  backgroundColor,
  color,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";

const Input = styled("input")(
  typography,
  layout,
  color,
  backgroundColor,
  space,
  flexbox,
  border
);

export default Input;
