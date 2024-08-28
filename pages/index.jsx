import Landing from "../components/landing";
import styled from "styled-components";
const Home = () => {
  return (
    <Main className="main_wrapper">
      <Landing />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
