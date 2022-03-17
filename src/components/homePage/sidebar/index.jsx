import React from "react";
import {
  Wrapper,
  Container,
  Text,
  HrElement,
  Footer,
  LinkFooter,
} from "./styles";
import {
  Home,
  Compass,
  Activity,
  Video,
  Youtube,
  Archive,
  Clock,
  ThumbsUp,
} from "react-feather";

const Sidebar = () => {
  const firstMenu = [
    { icon: "Home", value: "Home" },
    { icon: "Compass", value: "Explore" },
    { icon: "Activity", value: "Shorts" },
    { icon: "Video", value: "Memberships" },
  ];
  const firstsecondMenuMenu = [
    { icon: "Youtube", value: "Library" },
    { icon: "Archive", value: "Historic" },
    { icon: "Clock", value: "Watch later" },
    { icon: "ThumbsUp", value: "Likes" },
  ];
  return (
    <Wrapper>
      <Container style={{ backgroundColor: "#cecece" }}>
        <Home />
        <Text>Home</Text>
      </Container>
      <Container>
        <Compass />
        <Text>Explore</Text>
      </Container>
      <Container>
        <Activity />
        <Text>Shorts</Text>
      </Container>
      <Container>
        <Video />
        <Text>Memberships</Text>
      </Container>

      <HrElement />

      <Container style={{ marginTop: "1rem" }}>
        <Youtube />
        <Text>Library</Text>
      </Container>
      <Container>
        <Archive />
        <Text>Historic</Text>
      </Container>
      <Container>
        <Clock />
        <Text>Watch later</Text>
      </Container>
      <Container>
        <ThumbsUp />
        <Text>Likes</Text>
      </Container>
      <Footer>
        Made with 🧡 &nbsp;by
        <LinkFooter href="https://api.video" target="_blank" rel="noreferrer">
          &nbsp;api.video
        </LinkFooter>
      </Footer>
    </Wrapper>
  );
};

export default Sidebar;
