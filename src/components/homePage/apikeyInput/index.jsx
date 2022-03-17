import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  Wrapper,
  Button,
  InputApikey,
  Col1,
  Col2,
  Logo,
} from "./styles";
import LogoWhite from "../../../../public/logo-white.svg";

function ApikeyInput({ apiKey, handleApikey, getVideos }) {
  return (
    <Wrapper>
      <Container>
        <Col1>
          <Title>Quick integration</Title>
          <Subtitle>Enter your sandbox apikey to test</Subtitle>
          <Logo src={LogoWhite} alt="Logo" />
        </Col1>
        <Col2>
          <InputApikey
            value={apiKey}
            onChange={(event) => handleApikey(event)}
            placeholder={"Enter your sandbox apikey"}
          />
          <Button onClick={getVideos}>Submit</Button>
        </Col2>
      </Container>
    </Wrapper>
  );
}

export default ApikeyInput;
