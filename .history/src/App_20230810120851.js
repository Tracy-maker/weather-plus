import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container h-screen w-full flex items-stretch justify-center bg-cover bg-no-repeat bg-center font-custom" style={{ backgroundImage: `url(${p1})` }}>
      <div className=" mx-auto w-9/12 bg-white  shadow-lg overflow-hidden ">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  );
}

export default App;
