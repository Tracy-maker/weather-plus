import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container max-w-7xl my-5 mx-auto font-custom">
      <div className="flex  justify-center items-center max-w-xl">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      
    </div>
  );
}

export default App;
