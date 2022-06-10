import styled from "styled-components";
import {
  backgroundColor,
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";

const Button = styled("button")(
  {
    border: "none",
  },
  typography,
  layout,
  color,
  backgroundColor,
  space,
  flexbox,
  border
);

export default Button;
