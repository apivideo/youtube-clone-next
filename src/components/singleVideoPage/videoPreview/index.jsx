import React, { useState, useEffect } from "react";
import {
  Title,
  DetailsVideoWrapper,
  SubTitle,
  IconSeparator,
  SubtitleWrapper,
  LikesWrapper,
  Likes,
  IconLikes,
  HrElement,
  MembershipWrapper,
  NameCreatorWrapper,
  NameCreator,
  NameSuscribers,
  ButtonSuscribe,
  DescriptionCreator,
  VideoPreviewWrapper,
} from "./styles";
import { Avatar, Initials } from "../../../components/homePage/videos/styles";

function VideoPreview({ video }) {
  const { createdAt } = video;
  const [view, setView] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    setView(Math.floor(Math.random() * 100000));
  }, [video]);

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 1000));
  }, [video]);

  let newDate = new Date(createdAt);

  return (
    <>
      <iframe
        width="100%"
        height="600px"
        src={video?.assets?.player}
        allowFullScreen
        style={{ border: 0 }}
      ></iframe>

      <DetailsVideoWrapper>
        <Title>{video.title}</Title>
        <SubtitleWrapper>
          <SubTitle>
            <p>
              {view} views <IconSeparator size={11} />
              <span>{newDate.toLocaleDateString()}</span>
            </p>
          </SubTitle>
          <LikesWrapper>
            <IconLikes size={18} />
            <Likes>{likes}</Likes>
          </LikesWrapper>
        </SubtitleWrapper>
        <HrElement />

        <MembershipWrapper>
          <Avatar>
            <Initials>API</Initials>
          </Avatar>
          <NameCreatorWrapper>
            <NameCreator>API Video</NameCreator>
            <NameSuscribers>1.2K suscribers</NameSuscribers>
          </NameCreatorWrapper>
          <a
            href="https://www.youtube.com/channel/UCjF07X2vXQ-ATATp3uAfL1A"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonSuscribe>Suscribe</ButtonSuscribe>
          </a>
        </MembershipWrapper>
        <DescriptionCreator>
          Build engaging video experiences in minutes, not months
        </DescriptionCreator>
      </DetailsVideoWrapper>
    </>
  );
}

export default VideoPreview;
