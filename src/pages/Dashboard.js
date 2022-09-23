import React from "react";
import Wrapper, {
  WrapperMain,
  WrapperRight,
} from "../components/Wrapper/Wrapper";

function Dashboard() {
  return (
    <Wrapper>
      <WrapperMain>Main</WrapperMain>
      <WrapperRight>Right</WrapperRight>
    </Wrapper>
  );
}

export default Dashboard;
