import React from "react";
import { shallow } from "enzyme";
import CourseCard from "./index";

const mockData = [
  {
    name: "Full Stack Course",
    price: 9500,
    image: "http://google.com",
    key: 2,
  },
];
describe("CourseCard", () => {
  it("render props ", () => {
    const wrapper = shallow(<CourseCard products={mockData} />);
    expect(wrapper.exists()).toBe(true);
  });
});
