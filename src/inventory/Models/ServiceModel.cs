using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventory.Models
{
    public class ServiceModel
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string StartMode { get; set; }
        public string State { get; set; }
    }
}
