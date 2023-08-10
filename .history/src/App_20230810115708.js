import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container max-w-7xl my-5 mx-auto font-custom">
      <div className="flex flex-col justify-center items-center ">
        <Search className="min-w-full" onSearchChange={handleOnSearchChange} />
      </div>
      
    </div>
  );
}

export default App;
