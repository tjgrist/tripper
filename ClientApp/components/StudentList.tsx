import * as React from 'react'
import { StudentForm } from './Forms'

export default class StudentList extends React.Component<any, any> {

  constructor() {
    super()
    this.state = {
      studentForms: [
        <StudentForm i={0}/>,
        <StudentForm i={1}/>
      ]
    }
  }
  
  addStudent () {
    let length = this.state.studentForms.length
    this.setState({
      studentForms: this.state.studentForms.concat([<StudentForm i={length}/>])
    })
  }

  removeStudent () {
    let copy = this.state.studentForms.slice()
    copy.splice(copy.length - 1, 1)
    this.setState({
      studentForms: copy
    })
    this.props.reset()
  }

  render () {
    return (
      <div>
        <button type='button' className={'btn btn-default'} onClick={this.addStudent.bind(this)}>
          Add Student
        </button>
        {
          this.state.studentForms.length > 2 ? 
            <button type='button' className={'btn btn-default'} onClick={this.removeStudent.bind(this)}>
              Remove Student
            </button> : '' 
          }
        <div className='row'>
        {
          this.state.studentForms.map((form: Object) => (form))
        }
        </div>
      </div>
    )
  }
}