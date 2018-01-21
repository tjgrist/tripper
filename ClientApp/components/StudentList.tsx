import * as React from 'react'
import { StudentForm } from './Forms'

const StudentList = () => {
    return (
      <div>
        <StudentForm i={0}/>
        <StudentForm i={1}/>
        <StudentForm i={2}/>
      </div>
    )
}

export default StudentList;