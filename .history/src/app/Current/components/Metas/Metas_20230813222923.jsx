import { styled } from "styled-components";
import Meta from "./components/Meta/Meta";

const Container = styled.div`
  display: flex;
  justify-content:center;
  margin-top:24px;
  text-align:center;
`;

const Divider = styled.div`
  margin: 0 32px;
  border-left: 1px solid white;
  opacity: 0.6;
`;
const Metas = () => {
  return (
    <Container>
      <Meta title="HUMIDITY">85%</Meta>
      <Divider />
      <Meta title="WIND">1.34 K/M</Meta>
    </Container>
  );
};
export default Metas;
