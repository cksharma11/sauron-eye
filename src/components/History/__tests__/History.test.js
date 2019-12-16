import React from "react";
import { shallow, configure } from "enzyme";
import mockPushers from "../../../data/mock.json";
import Adapter from "enzyme-adapter-react-16";
import History from "../History";

configure({ adapter: new Adapter() });

describe("History", () => {
  it("should render properly", () => {
    const pushers = {
      sha: "1234HSA",
      total: 15,
      passed: 10,
      failed: 5,
      failedSuites: [
        "1 should be equal to 1",
        "2 should be equal to 2",
        "3 should be equal to 3",
        "4 should be equal to 4",
        "5 should be equal to 5"
      ],
      time: "sometime",
      project: "head",
      name: "testName"
    };
    
    const wrapper = shallow(<History pushers={pushers} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
