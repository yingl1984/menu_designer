import React from 'react';
import App from './App';
import Footer from './components/Footer'
import Header from './components/Header'
import { shallow } from 'enzyme'
import NoteView from '../src/components/NoteView'

it('renders Footer component without crashing', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper).toMatchSnapshot()
})
it('renders Header component without crashing', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
});
it('renders APP component without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
});
it('renders NoteView component without crashing', () => {
  const wrapper = shallow(<NoteView />)
  expect(wrapper).toMatchSnapshot()
})