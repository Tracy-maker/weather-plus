import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container flex flex-col justify-center items-center max-w-7xl my-5 mx-auto font-custom">
      <div className=" mx-auto w-9/12 bg-white  shadow-lg overflow-hidden ">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  );
}

export default App;
