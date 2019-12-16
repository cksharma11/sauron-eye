import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Reports from "../Reports";

configure({ adapter: new Adapter() });

describe("Reports", () => {
  it("should render properly", () => {
    const details = [
      {
        name: "test1",
        sha: "sha123",
        failedSuites: []
      },
      {
        name: "test1",
        sha: "sha123",
        failedSuites: []
      }
    ];
    const username = "test";
    const wrapper = shallow(<Reports details={details} username={username} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
