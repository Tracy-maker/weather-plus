import p2 from "../../assets/background2.jpg";

const Current = () => {
  return (
    <div
      className="container py-16 px-20 bg-center bg-no-repeat bg-cover text-white"
      style={{ backgroundImage: `url(${p2})` }}
    >
      <div className="text-7xl"> Current</div>
    </div>
  );
};
export default Current;
