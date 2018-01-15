interface Trip {
    debts: Array<Debt>    
    students: Array<Student>
    cost: number
}
  
interface Student {
    name: string
    expenses: Array<Expense>
}

interface Expense {
    value: number
}
  
interface Debt {
    owner: Student
    collector: Student
    amount: number
  
}

export {
    Trip, 
    Student,
    Expense,
    Debt
}
  