using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using trips.Models;

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
            this.DetermineDebts(trip);
            return Json(trip);
        }

        private decimal DetermineCostPerStudent (Trip trip) {
            trip.Students.ForEach(s => s.TotalSpent = s.Data.Expenses.Sum());
            trip.Cost = trip.Students.Sum(s => s.TotalSpent);
            decimal costPerStudent = trip.Cost / 3;
            return costPerStudent;
        }

        private Trip DetermineDebts (Trip trip) {
            decimal costPerStudent = DetermineCostPerStudent(trip);
            var students = trip.Students.OrderByDescending(s => s.TotalSpent).ToList();
            trip.Debts = new List<Debt>();
            for (int i = 1; i <= students.Count - 1; i++)
            {
                if (students[i].TotalSpent < costPerStudent) {
                    var debt = new Debt() {
                        Owner = students[i],
                        Collector = students[0],
                        Amount = decimal.Round(costPerStudent - students[i].TotalSpent, 2, MidpointRounding.AwayFromZero)
                    };
                    trip.Debts.Add(debt);
                }
            }
            return trip;
        }
    }
}
