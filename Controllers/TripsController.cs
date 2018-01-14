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
            trip.Cost = 437.78;
            return Json(trip);
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
            var result = trip.Students.OrderBy(s => s.TotalSpent);
            trip.Cost = (double)trip.Students.Sum(s => s.TotalSpent);
            var debts = new List<Debt>();
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
            public double Cost { get; set; }
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
