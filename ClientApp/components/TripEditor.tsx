import * as React from 'react';
import { Form, Text, NestedForm} from 'react-form';
import { ExpenseForm, StudentForm } from './Forms';
import { Trip, Debt } from './interfaces'

const URL = 'api/trips/calculate'

export default class TripEditor extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {}
  }

  private handleSubmit() {
    if (this.state.submittedValues) {
      let body = {
        method: 'POST',
        body: JSON.stringify(this.state.submittedValues), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
      fetch(URL, body).then(res => res.json())
        .catch(error => {console.log('Error:', error); this.setState({result: error.message});})
        .then(response => this.handleResponse(response))
    }
  }

  private handleResponse (response: Trip) {
    let result = 'Total trip cost: $' + response.cost + '\n'
    response.debts.forEach((debt: Debt) => 
      result += debt.owner.name + ' owes ' + debt.collector.name + ' $' + debt.amount + ';\n'
    )
    this.setState({result: result})
  }

  render() {
    return (
      <div className="row">
        <Form
          onSubmit={submittedValues => {this.setState( { submittedValues } ); this.handleSubmit()}}>
          { formApi => (
            <div>
              <form onSubmit={formApi.submitForm} id="tripform">
              <label htmlFor={'trip'}>Trip name </label>
              <Text field="name" id={`name`} required />
                <StudentForm i={0} />
                <StudentForm i={1} />
                <StudentForm i={2} />
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