import Current from "./app/Current/Current";
import Forecast from "./app/Forecast/Forecast";
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
      <div className="mx-auto bg-white overflow-hidden w-2/3 rounded-xl shadow-md  text-white">
        <Current />
        <div className="flex px-5 py-10 text-black text-xl">

            <Forecast />
  
        </div>
      </div>
    </div>
  );
}

export default App;
