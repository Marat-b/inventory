using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using inventory.Classes;
using inventory.Db;
using inventory.Interfaces;
using inventory.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace inventory.Controllers
{
    [Route("api/[controller]")]
    public class MonitorController : Controller
    {

        private readonly IMonitor _monitor;

        public MonitorController(IMonitor monitor)
        {
            _monitor=monitor;
        }
        
        [HttpGet]
        public IEnumerable<MonitorModel> Get()
        {
                        
                      return _monitor.GetData().AsQueryable();

            /*
            var items= _db.Monitor.Select(s => new MonitorModel()
            {
                ComputerName = s.ComputerName,
                MonitorId = s.MonitorId,
                Model = s.Model,
                SerialNumber = s.SerialNumber,
                LastUpdate = s.LastUpdate //!=null ? s.LastUpdate.ToString() : ""

            }).Take(10); 
#if DEBUG
            foreach (var item in items)
            {
                Debug.WriteLine(item.Model);
            }
#endif
            return items;*/
        }

        /*
        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        */

    }
}
