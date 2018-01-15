import * as React from 'react';
import { Form, Text, NestedForm} from 'react-form';

const StudentForm = ({i} : { i: any}) => (
    <NestedForm field={['students', i]} key={`student-${i}`}>
      <Form>
        { formApi => (
          <div className="col-lg-3">
            <h3>Student {i}</h3>
            <label htmlFor={`name-${i}`}>Name </label>
            <Text field="name" id={`name-${i}`} />
            <ExpenseForm i={0} />
            <ExpenseForm i={1} />
            <ExpenseForm i={2} />
          </div>
        )}
      </Form>
    </NestedForm>
  );
  
  const ExpenseForm = ({i} : { i: any}) => (
    <NestedForm field={['expenses', i]} key={'nested-expense-${i}'}>
    <Form>
      { formApi => (
        <div>
          <label htmlFor={`nested-expense-${i}`}>Expense {i+1}: $</label>
          <Text field="value" id={`nested-expense-${i}`} min="0" value="0" step=".01"/>
        </div>
      )}
    </Form> 
    </NestedForm>
  );

export {
    ExpenseForm,
    StudentForm
}