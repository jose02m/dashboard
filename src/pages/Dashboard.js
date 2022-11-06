import React from "react";
import Wrapper, {
  WrapperMain,
  WrapperRight,
} from "../components/Wrapper/Wrapper";

import { data } from "../constants";

import Box from "../components/Box/Box";

function Dashboard() {
  return (
    <Wrapper>
      <WrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {
                data.summary.map((item, index) => (
                  <div key={`sumary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                    <Box/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </WrapperMain>
      <WrapperRight>Right</WrapperRight>
    </Wrapper>
  );
}

export default Dashboard;
