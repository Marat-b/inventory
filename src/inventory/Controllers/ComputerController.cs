using System;
using System.Collections.Generic;
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
    public class ComputerController : Controller
    {

        //private readonly inventoryContext _db;
        private readonly IComputer _computer;

        public ComputerController(IComputer computer)
        {
            //_db = db;
            _computer = computer; //  new CComputer(_db);
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ComputerModel> Get()
        {
            
            return _computer.GetShortData();
        }

        [HttpGet("{id}")]
        public IEnumerable<ComputerModel> Get(int id)
        {
            
            return _computer.GetFullData(id);
        }

        


    }
}
