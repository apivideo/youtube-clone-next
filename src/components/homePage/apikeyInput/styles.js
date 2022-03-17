import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Logo = styled(Image)`
  justify-content: flex-start;
  width: 50px;
  height: 30px;
`;

export const Container = styled.div`
  background: url("/color-stroke.png"), #060c19;
  border-radius: 4px;
  padding: 0px 10%;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-position: 50%;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 250px;

  @media (max-width: 1000px) {
    padding: 0px 50px;
  }
  @media (min-width: 1200px) {
    justify-content: center;
    gap: 150px;
  }

  @media (max-width: 600px) {
    padding: 0px 20px;
  }
  @media (max-width: 400px) {
    padding: 0px 10px;
  }
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;
export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;

  /* @media (max-width: 600px) {
    width: 150px;
  } */

  @media (max-width: 500px) {
    width: 150px;
  }

  @media (max-width: 400px) {
    width: 120px;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #fff;

  @media (max-width: 800px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #d9e4ff;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #e53102;
  color: #fff;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    filter: brightness(90%);
  }
`;

export const InputApikey = styled.input`
  display: block;
  font-size: 14px;
  background: #fff;
  padding: 14px 16px;
  border-radius: 5.6px;
  appearance: none;
  border: 0;
  &::placeholder {
    color: #666c8e;
  }
  height: auto;
  width: 100%;
`;
