import Current from "./app/Current/Current";
import Search from "./app/Search/Search";
import p1 from "./assets/background1.jpg";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div
      className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <div className="mx-auto w-9/12 pb-9 pt-5">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="bg-white overflow-hidden w-96 rounded-xl shadow-md">
        <Current />
        <div className="flex px-20 py-10">
          <div className="text-xl font-semibold">Forecast</div>
        </div>
      </div>
    </div>
  );
}

export default App;
