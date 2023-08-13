import { styled } from "styled-components";
import Current from "./app/Current/Current";
// import Search from "./app/Search/Search";
import p1 from "./assets/background1.jpg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:url(${p1})
`;

function App() {
  // const handleOnSearchChange = (searchData) => {
  //   console.log(searchData);
  // };

  return (
    
      <Container>
        <Current />
      </Container>
  );
}

export default App;
