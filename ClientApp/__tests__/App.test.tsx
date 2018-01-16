import * as React from 'react';
import TripEditor from '../components/TripEditor';
import { shallow, mount, render } from 'enzyme';

describe('App test suite', () => {

    it('should render without throwing an error', () => {
      expect(shallow(<TripEditor />).length).toEqual(1);
    });

    it('should render the the trip name label', () => {
      const wrapper = mount(<TripEditor/>)
      expect(wrapper.find('form > label').text()).toContain('Trip name')
    })

    it('should render the trip name input element', () => {
      const wrapper = render(<TripEditor/>)
      expect(wrapper.find('#tripname').length).toEqual(1)
    })

    it('should render the submit button', () => {
      const wrapper = mount(<TripEditor/>)
      expect(wrapper.find('.btn-primary').length).toEqual(1)
    })

    it('should have 4 buttons on the page initially', () => {
      const wrapper = mount(<TripEditor />)
      expect(wrapper.find('button').length).toEqual(4);
    })

});

