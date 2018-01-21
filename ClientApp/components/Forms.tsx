import * as React from 'react';
import { Form, Text, NestedForm} from 'react-form';

const StudentForm = ({i} : { i: any}) => (
    <NestedForm field={['students', i]} key={`student-${i}`}>
      <Form>
        { formApi => (
          <div className="col-lg-3">
            <h4>Student {i+1}</h4>
            <label className={`student-${i}`} htmlFor={`name-${i}`}>Name </label>
            <Text field="name" id={`name-${i}`} required />
            <ExpenseForm />
          </div>
        )}
      </Form>
    </NestedForm>
  );

const ExpenseForm = () => (
  <NestedForm field={'data'} >
  <Form>
    { formApi => (
      <div>
        { formApi.values.expenses && formApi.values.expenses.map( ( expense: number, i: number ) => (
          <div key={`expense${i}`}>
            <label htmlFor={`expense-${i}`}>expense: $</label>
            <Text field={['expenses', i]} id={`expense-${i}`} required type="number" min="0" value="0" step=".01"/>
            <button
              onClick={() => formApi.removeValue('expenses', i)}
              type="button" className="btn btn-danger" id={`delete-${i}`}>X</button>
          </div>
        ))}
        <button
        onClick={() => formApi.addValue('expenses', '')}
        type="button" className="btn btn-success">Add Expense</button>
      </div>
    )}
  </Form> 
  </NestedForm>
);

export {
    ExpenseForm,
    StudentForm
}