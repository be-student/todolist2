import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const PageBackground = styled.div<Props>`
  display: flex;
  box-sizing: border-box;
  padding: 2rem 1rem;
  justify-content: center;
  background-color: ${(props: any) => props.backgroundColor};
`;
export const PageLayout = styled.div<Props>`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  max-width: 540px;
  box-sizing: border-box;
  background-color: ${(props: any) => props.backgroundColor};
`;
