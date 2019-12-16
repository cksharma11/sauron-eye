import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FailedTests from "../FailedTests";

configure({ adapter: new Adapter() });

describe("FailedTests", () => {
  it("should render properly", () => {
    const wrapper = shallow(
      <FailedTests failedSuites={["Failed 1", "Failed 2"]} />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
