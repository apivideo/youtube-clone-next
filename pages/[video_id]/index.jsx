import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/navbar";
import {
  ContentVideo,
  Wrapper,
  Col1,
  Col2,
} from "../../src/components/singleVideoPage/styles";
import VideoPreview from "../../src/components/singleVideoPage/videoPreview";
import ListVideos from "../../src/components/singleVideoPage/listPreviewVideos/index";
import { useApiKeyContext } from "../../src/components/provider/ApiKeys";

function VideoPage() {
  const router = useRouter();
  const videoId = router?.query?.video_id;

  const [video, setVideo] = useState("");

  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState("Tous");
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useApiKeyContext();

  const getVideoId = async () => {
    const response = await fetch("api/video", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey: state.apiKey, videoId }),
    });
    const data = await response.json();
    setVideo(data);
  };

  useEffect(() => {
    getVideoId();
  }, [videoId]);

  useEffect(() => {
    getVideos();
  }, [query]);

  const handleQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const removeQuery = async (event) => {
    event.stopPropagation();
    setQuery("");
  };

  const filterTags = (videos) => {
    const a = videos.flatMap((video) => video?.tags);
    const b = a.map((el) => el.toLowerCase()).sort();
    const result = b.reduce(
      (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
      {}
    );
    const keysSorted = Object.keys(result).sort(function (a, b) {
      return result[b] - result[a];
    });
    setTags(keysSorted.slice(0, 15));
  };

  const handleActiveTag = (tag) => {
    setActiveTag(tag);
  };

  const handleApikey = (event) => {
    const { value } = event.target;
    setApiKey(value);
  };

  const getVideos = async () => {
    const response = await fetch("api/content", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey: state.apiKey, title: query }),
    });
    const { data } = await response.json();

    setVideos(data);
    filterTags(data);
  };

  return (
    <div>
      <Navbar
        query={query}
        handleQuery={handleQuery}
        getVideos={getVideos}
        removeQuery={removeQuery}
      />
      <Wrapper>
        <ContentVideo>
          {video && (
            <>
              <Col1>
                <VideoPreview video={video} />
              </Col1>
              <Col2>
                <ListVideos videos={videos} />
              </Col2>
            </>
          )}
        </ContentVideo>
      </Wrapper>
    </div>
  );
}

export default VideoPage;
