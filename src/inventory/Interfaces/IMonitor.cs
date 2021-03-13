using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using inventory.Models;

namespace inventory.Interfaces
{
     public interface IMonitor
    {
        IEnumerable<MonitorModel> GetData();
    }
}
