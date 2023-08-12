import p1 from "../../assets/background1.jpg";

const Current = () => {
  return (
    <div
      className="container mx-auto py-16 px-20 bg-center bg-no-repeat bg-cover text-white"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <div>Current</div>
      
    </div>
  );
};
export default Current;
