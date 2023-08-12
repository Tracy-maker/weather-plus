import Current from "./app/Current/Current";
import Search from "./app/Search/Search";
import p1 from "./assets/background1.jpg";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div
      className="columns-7xl h-screen w-full flex flex-col items-stretch bg-cover bg-no-repeat bg-center  font-custom"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <div className=" mx-auto w-9/12 pb-9 pt-5 ">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className=" mx-auto w-8/12 bg-white rounded-md shadow-lg overflow-hidden ">
       <Current/>
      </div>
    </div>
  );
}

export default App;
