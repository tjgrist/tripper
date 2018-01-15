import * as React from 'react';
import { Form, Text, NestedForm} from 'react-form';

const StudentForm = ({i} : { i: any}) => (
    <NestedForm field={['students', i]} key={`student-${i}`}>
      <Form>
        { formApi => (
          <div className="col-lg-3">
            <h3>Student {i+1}</h3>
            <label htmlFor={`name-${i}`}>Name </label>
            <Text field="name" id={`name-${i}`} />
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
              <label htmlFor={`expense-${i}`}>Expense #{i+1}:</label>
              <Text field={['expenses', i]} id={`expense-${i}`} required type="number" min="0" defaultValue="0" step=".01"/>
              <button
                onClick={() => formApi.removeValue('expenses', i)}
                type="button"
                className="mb-4 btn btn-danger">X</button>
            </div>
          ))}
          <button
          onClick={() => formApi.addValue('expenses', '')}
          type="button"
          className="mb-4 mr-4 btn btn-success">Add Expense</button>
        </div>
      )}
    </Form> 
    </NestedForm>
  );

export {
    ExpenseForm,
    StudentForm
}