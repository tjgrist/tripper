import * as React from 'react';
import { Form, Text, NestedForm} from 'react-form';
import { ExpenseForm, StudentForm } from './Forms';

const URL = 'api/trips/calculate'

// const StudentForm = ({i} : { i: any}) => (
//   <NestedForm field={['students', i]} key={`student-${i}`}>
//     <Form>
//       { formApi => (
//         <div className="col-lg-3">
//           <h3>Student {i}</h3>
//           <label htmlFor={`name-${i}`}>Name </label>
//           <Text field="name" id={`name-${i}`} />
//           <ExpenseForm i={0} />
//           <ExpenseForm i={1} />
//           <ExpenseForm i={2} />
//         </div>
//       )}
//     </Form>
//   </NestedForm>
// );

// const ExpenseForm = ({i} : { i: any}) => (
//   <NestedForm field={['expenses', i]} key={'nested-expense-${i}'}>
//   <Form>
//     { formApi => (
//       <div>
//         <label htmlFor={`nested-expense-${i}`}>Expense {i+1}: $</label>
//         <Text field="value" id={`nested-expense-${i}`} min="0" value="0" step=".01"/>
//       </div>
//     )}
//   </Form> 
//   </NestedForm>
// );


interface Trip {
  debts: Array<debt>
  students: Array<Student>
}

interface Student {
  expenses: Array<Expense>
}

interface Expense {

}

interface debt {

}
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
        .catch(error => console.error('Error:', error))
        .then(response => this.handleResponse(response))
    }
  }

  private handleResponse (response: Trip) {
    let result = ''
    response.debts.forEach((debt: any) => 
      result += debt.owner.name + ' owes ' + debt.collector.name + ' ' + debt.amount + ';\n'
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
              <label htmlFor={'trip'}>trip name </label>
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