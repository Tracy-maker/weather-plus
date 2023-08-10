import Search from "./components/Search/Search";

function App() {

  const handleOnSearchChange=(searchData)=>{
console.log(searchData);
  }

  return (
    <div className="container max-w-7xl my-5 mx-auto font-custom">
      <div>hello world</div>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
