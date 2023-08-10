import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container max-w-7xl my-5 mx-auto font-custom">
      <div className="flex basis-1 flex-col justify-center items-center max-w-2xl">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  );
}

export default App;
