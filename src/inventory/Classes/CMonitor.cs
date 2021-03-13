using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using inventory.Db;
using inventory.Interfaces;
using inventory.Models;

namespace inventory.Classes
{
    public class CMonitor:IMonitor
    {
        private readonly inventoryContext _db ;

        public CMonitor(inventoryContext db)
        {
            _db = db;
        }

        public IEnumerable<MonitorModel> GetData()
        {
            return _db.TMonitor.Select(s => new MonitorModel()
            {
                ComputerName = s.ComputerName,
                MonitorId = s.MonitorId,
                Model = s.Model,
                SerialNumber = s.SerialNumber,
                LastUpdate = s.LastUpdate //.ToString() ?? ""

            });

        }
    }
}
