import Current from "./app/Current/Current";
import Search from "./app/Search/Search";
import p2 from "./assets/background2.jpg";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div
      className="columns-7xl h-screen w-full flex flex-col items-stretch bg-cover bg-no-repeat bg-center  font-custom"
      style={{ backgroundImage: `url(${p2})` }}
    >
      <div className="container mx-auto w-9/12 pb-9 pt-5 ">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className=" mx-auto w-8/12 bg-white rounded-md shadow-lg overflow-hidden container py-16 px-20 bg-center bg-no-repeat bg-cover text-white"
      style={{ backgroundImage: `url(${p1})` }>
       <Current/>
      </div>
    </div>
  );
}

export default App;
