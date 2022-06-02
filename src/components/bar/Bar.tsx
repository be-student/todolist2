import Link from "next/link";
import { FC } from "react";
import Box, { BigBox } from "../core/StyledComp";

type Props = {
  Components: React.ReactNode[];
};
const Bar: FC<Props> = ({ Components }) => {
  return (
    <BigBox display="flex" justifyContent="space-around" margin="1rem 0">
      {Components && Components.map((header: any) => header)}
    </BigBox>
  );
};
export default Bar;
