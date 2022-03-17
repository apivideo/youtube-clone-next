import React from "react";
import Video from "./videos";
import { GridBroadcast } from "./styles";

function GridVideos({ videos, activeTag }) {
  const filterElement = (videos) => {
    if (activeTag === "All") {
      return videos;
    } else {
      return videos.filter((video) =>
        video?.tags.map((el) => el.toLowerCase()).includes(activeTag)
      );
    }
  };

  return (
    <>
      <GridBroadcast>
        {filterElement(videos).map((video) => {
          const { videoId } = video;
          return <Video video={video} key={videoId} />;
        })}
      </GridBroadcast>
    </>
  );
}

export default GridVideos;
