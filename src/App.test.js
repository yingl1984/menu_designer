import React from "react";
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { shallow } from "enzyme";
import DishDetails from "../src/components/DishDetails";
import Welcome from "../src/pages/Welcome";
import MenuList from "../src/pages/MenuList";
import AddDish from "../src/pages/AddDish";

//App
it("renders APP component without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

//Components
it("renders Footer component without crashing", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
it("renders Header component without crashing", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it("renders DishDetails component without crashing", () => {
  const wrapper = shallow(<DishDetails />);
  expect(wrapper).toMatchSnapshot();
});

//Pages
it("renders Welcome component without crashing", () => {
  const wrapper = shallow(<Welcome />);
  expect(wrapper).toMatchSnapshot();
});
it("renders AddDish component without crashing", () => {
  const wrapper = shallow(<AddDish />);
  expect(wrapper).toMatchSnapshot();
});
it("renders MenuList component without crashing", () => {
  const wrapper = shallow(<MenuList />);
  expect(wrapper).toMatchSnapshot();
});