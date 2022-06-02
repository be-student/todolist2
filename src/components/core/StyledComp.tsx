import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flex?: string;
  flexDirection?: string;
  borderRadius?: string;
  height?: string;
  fontWeight?: string;
  textAlign?: string;
  width?: string;
}
interface Inp {
  width?: string;
}
export const WhiteButton = styled.button`
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1rem 1rem;
  background-color: white;
`;
export const GrayButton = styled(WhiteButton)`
  background-color: #f7f6f2;
`;

const Box = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.color ? props.color : "black")};
  display: ${(props) => (props.display ? props.display : "block")};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  flex: ${(props) => (props.flex ? props.flex : "0 0 auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  flex-direction: ${(props) => props.flexDirection};
  text-align: ${(props) => props.textAlign};
`;
export const BlueBox = styled(Box)`
  text-align: center;
  border-radius: 10px;
  background-color: #1877f2;
  color: white;
  padding: 0.5rem 0rem;
`;
export const BigBox = styled(Box)`
  width: 100%;
  align-items: center;
`;
export const Line = styled.div`
  border-bottom: 1px solid #f0f2f5;
  width: 90%;
`;

export const Tag = styled(Box)`
  padding: 0.5rem 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
`;
export const Input = styled.input<Inp>`
  width: ${(props) => props.width};
`;

export default Box;
