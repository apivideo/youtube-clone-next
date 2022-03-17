import styled from "styled-components";
import Image from "next/image";
import YoutubeLogo from "../../../public/youtube-logo.png";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  gap: 20px;
`;

export const Col1 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Logo = styled(Image).attrs({
  src: YoutubeLogo,
  width: "120px",
  height: "50px",
})`
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 60px;
    height: auto;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid #ccc;
  padding: 2px 6px 2px 10px;
  height: 40px;
  width: 100%;
  min-width: 100px;
  max-width: 600px;
  justify-content: center;
  border-right: none;
  border-radius: 2px 0 0 2px;
  box-shadow: inset 0 1px 2px #eee;
  color: #111111;
`;

export const SearchButton = styled.div`
  border: 1px solid #ccc;
  justify-content: center;
  border-radius: 0 2px 2px 0;
  height: 40px;
  width: 64px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #030303;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #e9e9e9;
  }

  @media (max-width: 600px) {
    width: 40px;
  }
`;

export const Col2 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const Col3 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const IconClose = styled.div`
  position: absolute;
  left: -35px;
  opacity: ${(props) => (props.disabled ? 0 : 1)};
`;
