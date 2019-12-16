import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../Router";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render properly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
