import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Report from "../Report";

configure({ adapter: new Adapter() });

describe("Report", () => {
  it("should render properly", () => {
    const detail = {
      sha: "sha123",
      time: new Date(),
      failedSuites: []
    };
    const username = "test";
    const wrapper = shallow(<Report detail={detail} username={username} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
