import * as React from 'react';
import { Form, Text, NestedForm} from 'react-form';


const Student = ({i} : { i: any}) => (
  <NestedForm field={['students', i]} key={`nested-friend-${i}`}>
    <Form>
      { formApi => (
        <div className="col-lg-3">
          <h3>Student {i}</h3>
          <label htmlFor={`nested-friend-name-${i}`}>Name </label>
          <Text field="firstName" id={`nested-friend-name-${i}`} />
          <Expense i={0} />
          <Expense i={1} />
          <Expense i={2} />
        </div>
      )}
    </Form>
  </NestedForm>
);

const Expense = ({i} : { i: any}) => (
  <NestedForm field={['expenses', i]} key={'nested-expense-${i}'}>
  <Form>
    { formApi => (
      <div>
        <label htmlFor={`nested-expense-${i}`}>Expense {i+1}: $</label>
        <Text field="expense" id={`nested-expense-${i}`} min="0" value="0" step=".01"/>
      </div>
    )}
  </Form> 
  </NestedForm>
);


export default class Trip extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {}
  }

  private handleSubmit() {
    if (this.state.submittedValues) {

    }
  }

  render() {
    return (
      <div className="row">
        <Form
          onSubmit={submittedValues => {this.setState( { submittedValues } ); console.log(this.state)}}>
          { formApi => (
            <div>
              <form onSubmit={formApi.submitForm} id="tripform">
              <label htmlFor={'trip'}>trip name </label>
              <Text field="trip" id={`trip`} required />
                <Student i={0} />
                <Student i={1} />
                <Student i={2} />
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            </div>
          )}
        </Form>
        <h5>{this.state.result ? this.state.result : ''}</h5>
      </div>
    );
  }
}