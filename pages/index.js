import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Sidebar from "../src/components/homePage/sidebar/index";
import GridVideos from "../src/components/homePage/videos/gridVideos";
import Tags from "../src/components/tags/index";
import { Wrapper, GridWrapper } from "../styles/globalStyles";
import ApikeyInput from "../src/components/homePage/apikeyInput/index";
import Navbar from "../src/components/navbar";
import { useApiKeyContext } from "../src/components/provider/ApiKeys";
import { Actions } from "../src/components/provider/ApiKeys/reducer";
import { filterTags } from "../src/utils/functions/index";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [apiKey, setApiKey] = useState("");

  const { state, dispatch } = useApiKeyContext();

  useEffect(() => {
    getVideos();
  }, [query]);

  useEffect(() => {
    apiKey && getVideosQuery();
  }, [state.apiKey]);

  const handleQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const removeQuery = async (event) => {
    event.stopPropagation();
    setQuery("");
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
    setTags(filterTags(data));
  };

  const getVideosQuery = async () => {
    try {
      const response = await fetch("api/content", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: state.apiKey, title: query }),
      });

      const { data } = await response.json();
      // Handling errors
      if (data.length === 0) {
        alert(
          "You need to upload at least a video in your sandbox api.video account in order to preview the result. Go to https://dashboard.api.video"
        );
        setApiKey("");
        return dispatch({
          type: Actions.SET_API_KEYS,
          payload: { apiKey: "" },
        });
      }
      setVideos(data);
      setTags(filterTags(data));
    } catch (error) {
      alert("Wrong API Key entered, please check your API Key");
      setApiKey("");
      dispatch({
        type: Actions.SET_API_KEYS,
        payload: { apiKey: "" },
      });
    }
  };

  const getNewVideo = () => {
    dispatch({ type: Actions.SET_API_KEYS, payload: { apiKey: apiKey } });
  };

  return (
    <div>
      <Head>
        <title>Youtube clone by Api.video</title>
        <meta name="description" content="Powered by Api.video" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        query={query}
        handleQuery={handleQuery}
        getVideos={getVideos}
        removeQuery={removeQuery}
      />

      <Wrapper>
        <Sidebar />
        <GridWrapper>
          <ApikeyInput
            apiKey={apiKey}
            handleApikey={handleApikey}
            getVideos={getNewVideo}
          />

          <Tags
            tags={tags}
            activeTag={activeTag}
            handleActiveTag={handleActiveTag}
          />
          <GridVideos videos={videos} activeTag={activeTag} />
        </GridWrapper>
      </Wrapper>
    </div>
  );
}
