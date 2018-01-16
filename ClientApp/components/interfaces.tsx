interface Trip {
    debts: Array<Debt>    
    students: Array<Student>
    cost: number
}
  
interface Student {
    name: string
    totalSpent: number
    data: Array<number>
}
  
interface Debt {
    owner: Student
    collector: Student
    amount: number
}

export {
    Trip, 
    Student,
    Debt
}
  