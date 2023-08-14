import Day from "./components/Day/Day";


const Forecast = () => {
  return (
    <div className="container text-black text-xl">
      <h2 className="m-0.5 tracking-wide font-light">Forecast</h2>
      <div className="mt-5 flex">
        <Day dayOfWeek="MON" temperature="9" weather="rain"></Day>
        <Day dayOfWeek="TUE" temperature="19" weather="rain"></Day>
        <Day dayOfWeek="WED" temperature="29" weather="rain"></Day>
        <Day dayOfWeek="THU" temperature="31" weather="rain"></Day>
        <Day dayOfWeek="FRI" temperature="19" weather="rain"></Day>
        <Day dayOfWeek="SAT" temperature="9" weather="rain"></Day>
        <Day dayOfWeek="SUN" temperature="19" weather="rain"></Day>
      </div>
    </div>
  );
};

export default Forecast;
