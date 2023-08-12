import p1 from "../../assets/background1.jpg";

const Current = () => {
  return (
    <div
      className="container mx-auto py-16 px-20 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${p1})` }}
    >
      Current
    </div>
  );
};
export default Current;
