import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Thumbnail,
  SubInformationsWrapper,
  Avatar,
  Initials,
  TitleWrapper,
  Title,
  SubTitle,
  IconSeparator,
  CustomVideos,
} from "./styles";
import { useRouter } from "next/router";

function Video({ video }) {
  const { assets, videoId, title, createdAt } = video;
  const [view, setView] = useState("");
  const router = useRouter();

  useEffect(() => {
    setView(Math.floor(Math.random() * 1000));
  }, []);

  let newDate = new Date(createdAt);

  return (
    <>
      <Wrapper>
        <Thumbnail src={assets?.thumbnail} alt={"thumbnail"}></Thumbnail>

        <CustomVideos
          autoPlay
          muted
          loop
          preload="auto"
          onClick={() =>
            router.push({
              pathname: `/${videoId}`,
              query: videoId,
            })
          }
        >
          <source src={assets?.mp4} type="video/mp4" />
        </CustomVideos>
        <SubInformationsWrapper>
          <Avatar>
            <Initials>API</Initials>
          </Avatar>
          <TitleWrapper>
            <Title>{title}</Title>
            <SubTitle>
              <p>API Video</p>
              <p>
                {view} <IconSeparator size={11} />
                <span>{newDate.toLocaleDateString()}</span>
              </p>
            </SubTitle>
          </TitleWrapper>
        </SubInformationsWrapper>
      </Wrapper>
    </>
  );
}

export default Video;
