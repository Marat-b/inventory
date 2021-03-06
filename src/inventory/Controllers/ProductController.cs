using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using inventory.Classes;
using inventory.Db;
using inventory.Interfaces;
using inventory.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace inventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        
        private readonly IComputer _computer;

        public ProductController(IComputer computer)
        {
            _computer = computer;
        }

        [HttpGet("{id}")]
        public IEnumerable<ProductModel> Get(int id)
        {
            return _computer.GetProduct(id);
        }
    }
}