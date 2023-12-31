import { styled } from "styled-components";
import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

const Container = styled.div`
  text-align: center;
  & ~ & {
    margin-left: 60px;
  }
`;

const DayOfWeek = styled.div`
  margin-bottom: 10px;
`;

const DayTemperature = styled.div`
  margin-top: 10px;
`;

const Day = ({ dayOfWeek, weather, temperature }) => (
  <Container>
    <DayOfWeek>{dayOfWeek}</DayOfWeek>
    <WeatherImage width="70px" weather={weather} />
    <DayTemperature>
      <Temperature>{temperature}</Temperature>
    </DayTemperature>
  </Container>
);
export default Day;
