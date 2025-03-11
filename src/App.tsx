import styled from "styled-components";
import { GlobalStyle } from "./styles";

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
        <h1>Hello, Styled Components!</h1>
      </Container>
    </>
  );
}

export default App;
