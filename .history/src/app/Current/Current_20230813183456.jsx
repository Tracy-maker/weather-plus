import p2 from "../../assets/756630.jpg";

const Current = () => {
  return (
    <div
      className="container py-16 px-20 bg-center bg-no-repeat bg-cover text-white"
      style={{ backgroundImage: `url(${p2})` }}
    >
      <div className=" bg-white w-1/3 rounded-3xl shadow-xl">
      Current
      </div>
    </div>
  );
};
export default Current;
