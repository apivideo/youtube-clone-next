import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* min-height: 56px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 2rem;
`;

export const Chip = styled.div`
  height: 32px;
  width: fit-content;
  min-width: 12px;
  padding: 0 10px;
  border-radius: 16px;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => (props.isActive ? "#fff" : "#030303")};
  background-color: ${(props) => (props.isActive ? "#030303" : "#e8e8e8")};
  border: 1px solid #ccc;
`;
