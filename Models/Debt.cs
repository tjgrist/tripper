using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace trips.Models {
        public class Debt {
            public Student Owner { get; set; }
            public Student Collector { get; set; }
            public decimal Amount { get; set; }
            
        }
}