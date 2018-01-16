import * as React from 'react';
import TripEditor from '../components/TripEditor';
import {ExpenseForm} from '../components/Forms'
import { shallow, mount, render } from 'enzyme';

describe('Expense operations test suite', () => {

    it('should render 3 student forms initially', () => {
        const wrapper = mount(<TripEditor/>)
        expect(wrapper.find(ExpenseForm).length).toEqual(3)
      })
    
    it('should render the Add expense button', () => {
        const wrapper = mount(<TripEditor />)
        wrapper.find('.btn-success').forEach((b) => {
            expect(b.text() === 'Add Expense').toEqual(true)
        })
    })

    it('should add a new expense field when Add Expense button is clicked', () => {
        const wrapper = mount(<TripEditor/>)
        wrapper.find('.btn.btn-success').first().simulate('click')
        expect(wrapper.find('input #expense-0').length).toEqual(1);
    })

    it('should produce a delete field button for a newly added expense', () => {
        const wrapper = mount(<TripEditor/>)
        wrapper.find('.btn.btn-success').first().simulate('click')
        expect(wrapper.find('input #expense-0').length).toEqual(1);        
        wrapper.find('.btn.btn-danger').exists()
    })

    it('should delete an added expense field when the delete X button is clicked', () => {
        const wrapper = mount(<TripEditor/>)
        wrapper.find('.btn.btn-success').first().simulate('click')
        expect(wrapper.find('input #expense-0').length).toEqual(1);        
        wrapper.find('.btn.btn-danger').first().simulate('click')
        expect(wrapper.find('input #expense-0').length).toEqual(0);
    })

})