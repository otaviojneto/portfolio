import styled from "styled-components";
import { GlobalStyle } from "./styles";
import Home from "./Page/Home";

const Container = styled.div`
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
