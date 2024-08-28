import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 900px;
  padding: 0px;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 100%;
    overflow-x: hidden;
  }
`;
