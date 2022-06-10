interface TagProps {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
  onClick?: any;
}
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
