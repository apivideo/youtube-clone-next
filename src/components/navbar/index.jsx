import React, { useState } from "react";
import {
  NavbarWrapper,
  LogoWrapper,
  Logo,
  SearchInput,
  SearchButton,
  Col1,
  Col2,
  Col3,
  IconClose,
} from "./styles";
import { Search, Menu, Bell, X } from "react-feather";
import { Avatar, Initials } from "../homePage/videos/styles";
import { useRouter } from "next/router";

function Navbar({ query, handleQuery, getVideos, removeQuery }) {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <Col1>
        <Logo onClick={() => router.push("/")} />
      </Col1>
      <Col2>
        <SearchInput
          placeholder="Search by title"
          value={query}
          onChange={handleQuery}
        />

        <SearchButton onClick={getVideos}>
          <Search size={20} color={"#030303"} />
          <IconClose
            onClick={(event) => removeQuery(event)}
            disabled={query?.length === 0}
          >
            <X />
          </IconClose>
        </SearchButton>
      </Col2>
      <Col3>
        <Avatar>
          <Initials>API</Initials>
        </Avatar>
      </Col3>
    </NavbarWrapper>
  );
}

export default Navbar;
