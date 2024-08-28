/* eslint-disable @next/next/no-img-element */

import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer_section">
      <div className="footer">
        <Wrapper>
          made by
          <span>
            <Link target={"_blank"} href={"https://vjy.me?stippling"}>
              <img src="realvjy.svg" className="img-r" />
            </Link>
          </span>
          at
          <span>
            <Link target={"_blank"} href={"https://overlayz.studio?stippling"}>
              @overlayz
            </Link>
          </span>
          <span className={"img"}>
            <Link target="" href={"https://x.com/realvjy"}>
              <img src={"twitter.svg"} />
            </Link>
          </span>
        </Wrapper>
      </div>
    </section>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 40px 0;
  font-size: 16px;
  letter-spacing: -0.2px;
  font-weight: 500;
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
  gap: 4px;
  align-items: center;
  span {
    padding-inline: 5px;
    font-weight: 500;
    .img-r {
      transform: scale(1.2);
    }
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
    &.img {
      padding: 0;
    }
  }
`;
