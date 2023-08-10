import Search from "./components/Search/Search";

function App() {

  const handleOnSearchChange=(searchData)=>{
console.log(searchData);
  }

  return (
    <div className="container max-w-2xl my-5 mx-auto font-custom">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
