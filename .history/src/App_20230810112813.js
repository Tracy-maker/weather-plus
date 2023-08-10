import Search from "./components/Search/Search";

function App() {

  const handleOnSearchChange=(searchData)=>{
console.log(searchData);
  }

  return (
    <div >
      <div>hello world</div>
      <Search className="container max-w-lg my-5 mx-auto font-custom" onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
