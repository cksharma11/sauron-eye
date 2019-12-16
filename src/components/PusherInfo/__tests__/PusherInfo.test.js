import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PusherInfo from "../PusherInfo";

configure({ adapter: new Adapter() });

describe("PusherInfo", () => {
  it("should render properly", () => {
    const pusher = {
      name: "somename",
      sha: "123sha",
      passed: 10,
      total: 15,
      project: "test"
    };
    const wrapper = shallow(<PusherInfo pusher={pusher} number={1} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
