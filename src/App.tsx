import styled from "styled-components";
import { GlobalStyle } from "./styles";
import Home from "./Page/Home";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
