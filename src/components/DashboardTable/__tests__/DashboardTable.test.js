import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DashboardTable from "../DashboardTable";

configure({ adapter: new Adapter() });

describe("DashboardTable", () => {
  it("should render properly", () => {
    const wrapper = shallow(<DashboardTable dashboard={[{}, {}]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
