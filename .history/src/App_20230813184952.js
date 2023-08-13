import { styled } from "styled-components";
import Current from "./app/Current/Current";
// import Search from "./app/Search/Search";
import p1 from "./assets/background1.jpg";

const Container=styled.div`
height:100vh;
`

function App() {
  // const handleOnSearchChange = (searchData) => {
  //   console.log(searchData);
  // };

  return (
    
      {/* <div className="mx-auto w-9/12 pb-9 pt-5">
        <Search onSearchChange={handleOnSearchChange} />
      </div> */}
      <Container>
        <Current />
      </Container>
  );
}

export default App;
