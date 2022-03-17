import styled from "styled-components";

export const ContentVideo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  overflow: auto;
  background-color: #f9f9f9;
`;

export const Col1 = styled.div`
  width: calc(100% - 300px);
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;
export const Col2 = styled.div`
  width: 300px;
  height: 100%;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
