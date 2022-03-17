import React from "react";
import {
  ListWrapper,
  PreviewImage,
  Thumbnail,
  Title,
  NameOwner,
  CardDetails,
} from "./styles";
import { useRouter } from "next/router";

function ListVideos({ videos }) {
  const router = useRouter();

  return (
    <ListWrapper>
      {videos.map((video) => {
        const { videoId } = video;
        return (
          <PreviewImage
            key={videoId}
            onClick={() =>
              router.push({
                pathname: `/${videoId}`,
                query: videoId,
              })
            }
          >
            <Thumbnail src={video?.assets?.thumbnail} alt={"thumbnail"} />
            <CardDetails>
              <Title>{video.title}</Title>
              <NameOwner>API Video</NameOwner>
            </CardDetails>
          </PreviewImage>
        );
      })}
    </ListWrapper>
  );
}

export default ListVideos;
