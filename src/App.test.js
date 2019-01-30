import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//import 'jsdom-global/register'
import {mount} from 'enzyme'

describe('App', () => {

  it('stores data in local state', (done) => {
    const wrapper = mount(<App />);

    expect(wrapper.state().users).toEqual([]);

    promise.then(() => {
      wrapper.update();

      expect(wrapper.state().users.toHaveLength).toEqual(10);

      done();
    });
  });

});

describe('App', () => {

  it('renders data when fetched', (done) => {
    const wrapper = mount(<App />);

    expect(wrapper.find('able-header').text()).toEqual('User Table');

    promise.then(() => {
      wrapper.update();

      expect(wrapper.find('li')).toHaveLength(2);

      done();
    });
  });
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
