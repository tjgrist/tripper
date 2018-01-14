import * as React from 'react';
import { Form, Text, NestedForm} from 'react-form';


const Student = ({i} : { i: any}) => (
  <NestedForm field={['students', i]} key={`student-${i}`}>
    <Form>
      { formApi => (
        <div className="col-lg-3">
          <h3>Student {i}</h3>
          <label htmlFor={`name-${i}`}>Name </label>
          <Text field="name" id={`name-${i}`} />
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
        <Text field="value" id={`nested-expense-${i}`} min="0" value="0" step=".01"/>
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
    console.log(this.state.submittedValues);
    if (this.state.submittedValues) {
      let url = '/api/trips/calculate'
      
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state.submittedValues), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response)
        this.setState({ result: response.cost})
        console.log(this.state.result)
      });
    }
  }

  render() {
    return (
      <div className="row">
        <Form
          onSubmit={submittedValues => {this.setState( { submittedValues } ); this.handleSubmit()}}>
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