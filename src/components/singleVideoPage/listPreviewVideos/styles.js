import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  width: 300px;

  @media (max-width: 800px) {
    width: 100%;
    padding-top: 2rem;
    padding-left: 0rem;
  }
`;

export const PreviewImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Thumbnail = styled.img`
  aspect-ratio: 16 / 9;
  width: 200px;
  object-fit: cover;
  cursor: pointer;
  display: block;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: hidden;
`;

export const Title = styled.p`
  color: #030303;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 4px;
  text-overflow: ellipsis;
`;

export const NameOwner = styled.p`
  color: #606060;
  font-size: 1.2rem;
`;
