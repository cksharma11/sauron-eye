import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pushers from "../Pushers";

configure({ adapter: new Adapter() });

describe("Pushers", () => {
  it("should render properly", () => {
    const dashboard = [
      {
        name: "somename",
        passed: 10,
        failed: 5
      },
      {
        name: "somename",
        passed: 10,
        failed: 5
      }
    ];
    const wrapper = shallow(<Pushers dashboard={dashboard} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
