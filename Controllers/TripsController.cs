using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace trips.Controllers
{
    [Route("api/[controller]")]
    public class TripsController : Controller
    {

        [HttpPost("[action]")]
        public IActionResult Calculate([FromBody] Trip trip)
        {
            if (!ModelState.IsValid){
                return BadRequest();
            }
            //TODO replace with LINQ
            foreach (var stud in trip.Students) 
            {
                foreach (var exp in stud.Expenses)
                {
                    stud.TotalSpent += exp.Value;
                }
            }
            var students = trip.Students.OrderByDescending(s => s.TotalSpent).ToList();
            //trip.Students = students;
            trip.Cost = trip.Students.Sum(s => s.TotalSpent);
            decimal costPerPerson = trip.Cost / 3;
            trip.Debts = new List<Debt>();
            for (int i = 1; i <= students.Count - 1; i++)
            {
                if (students[i].TotalSpent < costPerPerson) {
                    var debt = new Debt() {
                        Owner = students[i],
                        Collector = students[0],
                        Amount = decimal.Round(costPerPerson - students[i].TotalSpent, 2, MidpointRounding.AwayFromZero)
                    };
                    trip.Debts.Add(debt);
                }
                else if (students[i].TotalSpent > costPerPerson) {

                }
            }
            return Json(trip);
        }

        [HttpGet("[action]")]
        public IActionResult work() {
            Expense exp = new Expense();
            exp.Value = 10;
            return Json(exp);
        }

        public class Trip
        {
            public int Id { get; set; }
            public List<Student> Students { get; set; }
            public decimal Cost { get; set; }
            public List<Debt> Debts { get; set; }
            
        }

        public class Student {
            public string Name { get; set; }
            public decimal TotalSpent { get; set; }
            public List<Expense> Expenses { get; set; }
            

        }

        public class Expense {
            public decimal Value { get; set; }
            
        }

        public class Debt {
            public Student Owner { get; set; }
            public Student Collector { get; set; }
            public decimal Amount { get; set; }
            
        }
    }
}
