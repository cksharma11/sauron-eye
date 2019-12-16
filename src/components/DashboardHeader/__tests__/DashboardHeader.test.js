import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DashboardHeader from "../DashboardHeader";

configure({ adapter: new Adapter() });

describe("DashboardHeader", () => {
  it("should render properly", () => {
    const wrapper = shallow(<DashboardHeader headings={["A", "B", "C"]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
