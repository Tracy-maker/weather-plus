import { styled } from "styled-components";
import Current from "./app/Current/Current";
// import Search from "./app/Search/Search";
import p1 from "./assets/background1.jpg";

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image:url(${p1})
//   background-repeat:no-repeat;
//   background-size:cover;
// `;

function App() {
  // const handleOnSearchChange = (searchData) => {
  //   console.log(searchData);
  // };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${p1})` }}>
      <Current />
    </div>
  );
}

export default App;
