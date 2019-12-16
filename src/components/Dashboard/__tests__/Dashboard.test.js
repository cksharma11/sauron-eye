import React from "react";
import { shallow, configure } from "enzyme";
import mockPushers from "../../../data/mock.json";
import Adapter from "enzyme-adapter-react-16";
import Dashboard from "../Dashboard";

configure({ adapter: new Adapter() });

describe("Dashboard", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Dashboard pushers={mockPushers} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
