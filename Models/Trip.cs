using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace trips.Models {

        public class Trip
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public List<Student> Students { get; set; }
            public decimal Cost { get; set; }
            public List<Debt> Debts { get; set; }
            
        }
}