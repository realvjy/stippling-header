import Image from "next/image";

import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { Container } from "./ReusableStyles";
import Footer from "./footer";

export default function Landing() {
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const intensity = 4;
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const getImageStyle = (multiplier) => ({
    transform: `translate(${position.x * multiplier * intensity}px, ${
      position.y * multiplier * intensity
    }px)`,
    transition: isLoaded ? "transform 0.1s ease-out" : "none",
    opacity: isLoaded ? 1 : 0,
  });

  const mainImageStyle = getImageStyle(15);
  const shadowImageStyle = getImageStyle(25);
  const dotsImageStyle = getImageStyle(5);
  return (
    <HeadSection>
      <Container>
        <HeadWrapper>
          <Logo ref={containerRef}>
            <img
              alt="Main"
              className="absolute figma"
              style={mainImageStyle}
              src="figma.svg"
            />
            <img
              alt="Main"
              className="absolute figma-shadow"
              style={shadowImageStyle}
              src="figma-dark.svg"
            />
            <img
              alt="Main"
              className="absolute main"
              style={mainImageStyle}
              src="stippling.svg"
            />
            <img
              alt="Shadow"
              className="absolute shadow"
              style={shadowImageStyle}
              src="stippling-dark.svg"
            />
            <img
              style={dotsImageStyle}
              className="absolute dots"
              src="dots.svg"
            />
          </Logo>
          <Content>
            <DotButton href="https://s.vjy.me/stippling">
              <img src="figma_icon.svg" />
              Install Now
            </DotButton>
          </Content>
          <Footer />
        </HeadWrapper>
      </Container>
    </HeadSection>
  );
}

const HeadSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 600px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media screen and (max-width: 600px) {
    height: 150px;
  }
  img {
    @media screen and (max-width: 600px) {
      /* margin: 20px; */
    }
    &.main {
      z-index: 2;
      width: 1000px;
      @media screen and (max-width: 600px) {
        width: 90%;
      }
    }
    &.shadow {
      z-index: 1;
      width: 1000px;
      @media screen and (max-width: 600px) {
        width: 90%;
      }
    }
    &.dots {
      z-index: 0;
      width: 1200px;
      left: -120px;
      top: -80px;
      mix-blend-mode: overlay;
      @media screen and (max-width: 600px) {
        width: 110%;
        left: -20px;
        top: -40px;
      }
    }
    &.figma {
      width: 350px;
      z-index: 4;
      bottom: 70px;
      left: calc(50% - 110px);
      @media screen and (max-width: 600px) {
        width: 35%;
        bottom: 20px;
        left: calc(50% - 50px);
      }
    }
    &.figma-shadow {
      width: 350px;
      z-index: 3;
      bottom: 70px;
      left: calc(50% - 120px);
      @media screen and (max-width: 600px) {
        width: 35%;
        bottom: 20px;
        left: calc(50% - 50px);
      }
    }
  }
`;

const Content = styled.div`
  color: var(--primary-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  h1 {
    text-align: center;
    font-weight: 300;
    max-width: 500px;
    font-size: 30px;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
`;

const DotButton = styled.a`
  padding: 20px 62px;
  /* background-image: url("button-dots.svg"),
    linear-gradient(180deg, #fffb00 0%, #ff2f93 100%); */
  background-color: #000;
  color: #fff;
  font-weight: 500;
  background-position: 0px -2px;
  background-repeat: no-repeat;
  overflow: hidden;
  font-size: 22px;
  line-height: 32px;
  border-radius: 42px;
  letter-spacing: -0.5px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  gap: 8px;
  img {
    height: 32px;
  }
  text-shadow: rgba(0, 0, 0, 1) 2px 2px 0px, rgba(0, 0, 0, 1) -2px -2px 0px;
  box-shadow: inset rgba(224, 2, 190, 0.1) 0px 0px 2px 1px;
  transition: all ease 300ms;
  &:hover {
    box-shadow: inset rgba(224, 2, 190, 0.5) 0px 0px 12px 2px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
    border-radius: 42px;
  }
`;
