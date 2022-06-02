import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 50%;
  padding: 1.5rem 0;
  box-sizing: border-box;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: scroll;
  z-index: 3;
  scrollbar-width: none;
  --ms-overflow-style: none;
`;
export const ModalItem = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 1rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
