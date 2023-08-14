import p2 from "../../assets/background2.jpg";
import Temperature from "../../components/Temperature/Temperature";
import SubText from "./components/SubText/SubText";
import Metas from "./components/Metas/Metas";

const Current = () => {
  return (
    <div className="relative flex p-16 px-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${p2})` }}>
      <div className="flex flex-col justify-center items-start space-y-4">
        <div className="text-7xl">
          <Temperature>15.71</Temperature>
        </div>
        <div className="text-xl text-center">
          <SubText>Clouds</SubText>
        </div>
        <Metas />
      </div>
      <div className="flex-grow text-2xl text-right mt-4">
        Melbourne
      </div>
    </div>
  );
};

export default Current;
