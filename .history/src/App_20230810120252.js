import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container flex flex-col max-w-7xl my-5 mx-auto font-custom">
      <div className="flex flex-col justify-center items-center ">
        <Search className="w-96" onSearchChange={handleOnSearchChange} />
      </div>
      
    </div>
  );
}

export default App;
