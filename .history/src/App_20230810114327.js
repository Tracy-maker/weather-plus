import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container max-w-7xl my-5 mx-auto font-custom">
      <div className="box-content h-32 w-32 p-4 border-4 flex flex-col justify-center items-center ">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  );
}

export default App;
