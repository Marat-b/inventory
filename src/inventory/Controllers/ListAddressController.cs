using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using inventory.Classes;
using inventory.Db;
using inventory.Interfaces;
using inventory.Models;
using Microsoft.AspNetCore.Mvc;

namespace inventory.Controllers
{
    [Route("api/[controller]")]
    public class ListAddressController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        // GET
        public ListAddressController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("list/{id:int}")]
        [ProducesResponseType(200, Type = typeof(List<ListIpAddressModel>))]
        public async Task<IActionResult> GetList(int id)
        {
            var rangeAddress = _unitOfWork.RangeIpAddresses.GetAll().Where(w => w.RangeId == id).FirstOrDefault();
            if (rangeAddress == null)
            {
#if DEBUG
                Debug.WriteLine("GetList BadRequest");
#endif
                return BadRequest();
            }
            //if (rangeAddress.)
            IPHelper ipHelper=new IPHelper();
            var lookingForAddress = ipHelper.IPAddressesRange(rangeAddress.StartAddress, rangeAddress.EndAddress);
            IEnumerable<TListIpAddress> listAllAddress=null;
#if DEBUG
            Debug.WriteLine("lookingForAddress.Count="+lookingForAddress.Count.ToString());
#endif
            if (lookingForAddress.Count() > 0)
            {
                listAllAddress = _unitOfWork.ListIpAddresses.GetAll()
                    .Where(w => lookingForAddress.Any(a => w.IpAddress.Contains(a)));
            }

            if (listAllAddress == null)
            {
#if DEBUG
                Debug.WriteLine("listAllAddress is null!");
#endif
                return Ok(new List<ListIpAddressModel>().AsEnumerable());
            }
            else
            {
#if DEBUG
                Debug.WriteLine("listAllAddress is NOT null!");
#endif
                return Ok(Mapper.Map<IEnumerable<TListIpAddress>, IEnumerable<ListIpAddressModel>>(listAllAddress));    
            }
                //listAllAddress=new List<TListIpAddress>().AsEnumerable();

            
        }
    }
}