import styled from "styled-components";
import { Minus, ThumbsUp } from "react-feather";

export const DetailsVideoWrapper = styled.div`
  width: 100%;
  padding-top: 15px;
`;
export const Title = styled.p`
  word-break: break-word;
  color: #030303;
  font-size: 24px;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;

export const SubTitle = styled.p`
  color: #606060;
  font-size: 1.4rem;
`;

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconSeparator = styled(Minus)`
  padding-top: 2px;
  padding-right: 5px;
`;

export const IconLikes = styled(ThumbsUp)``;

export const Likes = styled.p`
  color: #030303;
  font-size: 1.4rem;
  padding-left: 0.8rem;
`;

export const HrElement = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 1rem;
`;

export const MembershipWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  width: 100%;
  align-items: center;
  padding-bottom: 2rem;
`;

export const NameCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 1.2rem;
  flex: 1;
`;

export const NameCreator = styled.p`
  font-weight: 500;
  color: #030303;
  font-size: 1.4rem;
  line-height: 2rem;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const NameSuscribers = styled.p`
  color: #606060;
  font-size: 1.2rem;
`;

export const ButtonSuscribe = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background: #cc0000;
  color: #fff;
  font-size: 13px;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  padding: 10px 16px;
  transition: all 0.2s ease-in-out;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DescriptionCreator = styled.p`
  color: #030303;
  font-size: 1.4rem;
  padding-left: 5rem;
  margin-top: 0.5rem;
`;
