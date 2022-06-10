import Link from "next/link";
import Box from "../../components/core/Box";

const Navigation = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-around"
      margin="1rem 0"
    >
      <Box flex="1" textAlign="center">
        <Link href="/todolist">할 일</Link>
      </Box>

      <Box flex="1" textAlign="center">
        <Link href="/todolist/created">생성 순</Link>
      </Box>

      <Box flex="1" textAlign="center">
        <Link href="/todolist/goal">마감 순</Link>
      </Box>
      <Box flex="1" textAlign="center">
        <Link href="/todolist/tags">태그</Link>
      </Box>
    </Box>
  );
};

export default Navigation;
