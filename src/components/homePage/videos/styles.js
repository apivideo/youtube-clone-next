import styled from "styled-components";
import { Minus } from "react-feather";

export const GridBroadcastWrapper = styled.div`
  padding: 10px;
`;

export const GridBroadcast = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
  width: 100%;
  height: calc(100% - 56px);
  padding: 4rem 4rem 4rem 2rem;
  @media (max-width: 520px) {
    padding: 4rem 2rem;
  }
  background-color: #f9f9f9;
  overflow: auto;
`;

export const CustomVideos = styled.video`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 600px;
  display: none;
`;

export const Thumbnail = styled.img`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  position: relative;
  cursor: pointer;
  display: block;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:hover ${Thumbnail} {
    display: none;
  }

  &:hover ${CustomVideos} {
    display: block;
    background-color: black;
  }
`;

export const SubInformationsWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  width: 100%;
`;

export const Avatar = styled.div`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e53102;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Initials = styled.p`
  color: #fff;
  font-size: 1.4rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 1.2rem;
  width: calc(100%-52px);
`;

export const Title = styled.p`
  font-weight: 500;
  color: #030303;
  font-size: 1.4rem;
  line-height: 2rem;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal;
  margin-bottom: 0.8rem;
`;

export const SubTitle = styled.p`
  color: #606060;
  font-size: 1.2rem;
`;

export const IconSeparator = styled(Minus)`
  padding-top: 2px;
  padding-right: 5px;
`;
