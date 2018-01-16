import * as React from 'react';
import TripEditor from '../components/TripEditor';
import {StudentForm} from '../components/Forms'
import { shallow, mount, render } from 'enzyme';

describe('Student component test suite', () => {

    it('should render 3 student forms initially', () => {
        const wrapper = mount(<TripEditor/>)
        expect(wrapper.find(StudentForm).length).toEqual(3)
      })

    it('should render the student label', () => {
        const wrapper = mount(<TripEditor/>)
        expect(wrapper.find('.student-0').text()).toContain('Name')
    })

    it('should render the each student input field', () => {
        const wrapper = mount(<TripEditor/>).find('input')
        expect(wrapper.find('input #name-0').exists()).toBe(true)
        expect(wrapper.find('input #name-1').exists()).toBe(true)
        expect(wrapper.find('input #name-2').exists()).toBe(true)
    })

})