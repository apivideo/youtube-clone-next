import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  height: 100%;
  padding-top: 1rem;
  margin-right: 0.5rem;
  position: relative;
  background-color: #fff;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Container = styled.div`
  padding: 0px 24px;
  color: #030303;
  display: flex;
  align-items: center;
  height: 40px;

  &:hover {
    background-color: #cecece;
  }
`;

export const Text = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 1.5rem;
`;

export const HrElement = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 1rem;
`;

export const Footer = styled.p`
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: #666c8e;
`;

export const LinkFooter = styled.a`
  color: #e53102;
`;
