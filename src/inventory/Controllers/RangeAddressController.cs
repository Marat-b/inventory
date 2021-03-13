using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using inventory.Db;
using inventory.Interfaces;
using inventory.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace inventory.Controllers
{
    [Route("api/[controller]")]
    public class RangeAddressController : Controller
    {
        private IUnitOfWork _unitOfWork;
        // GET
        public RangeAddressController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        [HttpGet("ranges")]
        [ProducesResponseType(200, Type = typeof(List<RangeIpAddressModel>))]
        public async Task<IActionResult> GetRangeAddresses()
        {
            return await GetRangeAddresses(-1, -1);
        }
        

        [HttpGet("ranges/{pageNumber:int}/{pageSize:int}")]
        [ProducesResponseType(200, Type = typeof(List<RangeIpAddressModel>))]
        public async Task<IActionResult> GetRangeAddresses(int pageNumber, int pageSize)
        {
            var rangeAddresses = _unitOfWork.RangeIpAddresses.GetAll();
            if (rangeAddresses == null)
            {
                rangeAddresses=new List<TRangeIpAddress>().AsEnumerable();
            }
            #if DEBUG
            Debug.WriteLine("rangeAddresses Count = " + rangeAddresses.Count().ToString());
            Debug.WriteLine("rangeAddresses = " + rangeAddresses.ToString());
            foreach (var item in rangeAddresses)
            {
                Debug.WriteLine("rangeAddresses item startIpAddress="+item.StartAddress.ToString());
            }
            #endif
            
            /*var config=new MapperConfiguration(cfg=>cfg.CreateMap<TRangeIpAddress,RangeIpAddressModel>());
            var mapper = config.CreateMapper();
            var m = mapper.Map<IEnumerable<TRangeIpAddress>, IEnumerable<RangeIpAddressModel>>( rangeAddresses);*/
#if DEBUG
//            Debug.WriteLine("m count="+m.Count().ToString());
//            Debug.WriteLine("m ="+m.ToString());
//            
            /*foreach (var i in m)
            {
                Debug.WriteLine("RangeIpAddressModel startAddress="+i.StartAddress.ToString());
            }*/   
#endif

            return Ok(Mapper.Map<IEnumerable<TRangeIpAddress>, IEnumerable<RangeIpAddressModel>>( rangeAddresses));
        }

        [HttpGet("range/{id}")]
        public async Task<IActionResult> GetRange(int id)
        {
            if (ModelState.IsValid)
            {
                var range = _unitOfWork.RangeIpAddresses.Get(id);
                if (range == null)
                {
                    range=new TRangeIpAddress();
                }

                return Ok(Mapper.Map<RangeIpAddressModel>(range));
            }

            return BadRequest(ModelState);
        }

        [HttpPut("range/{id}")]
        public async Task<IActionResult> UpdateRange(int id, [FromBody] RangeIpAddressModel range)
        {
            if (ModelState.IsValid)
            {
                if (range == null)
                {
                    return BadRequest($"nameof(range) cannot be found");
                }

                if (id != range.RangeId)
                    return BadRequest("Conflicting range id in parameter");

                TRangeIpAddress rangeApp = _unitOfWork.RangeIpAddresses.Get(id);
                if (rangeApp == null)
                    return NotFound(id);
                
                /*var config=new MapperConfiguration(cfg=>cfg.CreateMap<RangeIpAddressModel,TRangeIpAddress>());
                var mapper = config.CreateMapper();*/
                Mapper.Map<RangeIpAddressModel, TRangeIpAddress>(range, rangeApp);

                _unitOfWork.RangeIpAddresses.Update(rangeApp);
                _unitOfWork.SaveChanges();

                return NoContent();
            }

            return BadRequest(ModelState);
        }

        [HttpPost("range")]
        public async Task<IActionResult> NewRange([FromBody] RangeIpAddressModel range)
        {
            if (ModelState.IsValid)
            {
                if (range == null)
                    return BadRequest($"nameof(range) cannot be found");
                
                
#if DEBUG
                Debug.WriteLine("range ->"+range.RangeId.ToString()+" "+range.StartAddress.ToString());
#endif
//                var config=new MapperConfiguration(cfg=>cfg.CreateMap<RangeIpAddressModel,TRangeIpAddress>());
                TRangeIpAddress rangeApp=new TRangeIpAddress(
                /*{
                    RangeId = 0
                };*/
                    );
//                var mapper = config.CreateMapper();
                Mapper.Map<RangeIpAddressModel, TRangeIpAddress>(range, rangeApp);
#if DEBUG
                Debug.WriteLine("rangeApp ->"+rangeApp.RangeId.ToString()/*+" "+rangeApp.StartAddress.ToString()*/);
#endif

                
                _unitOfWork.RangeIpAddresses.Add((rangeApp));
                _unitOfWork.SaveChanges();
                
                /*config=new MapperConfiguration(cfg=>cfg.CreateMap<TRangeIpAddress,RangeIpAddressModel>());
                mapper = config.CreateMapper();*/

                var newRange = _unitOfWork.RangeIpAddresses.GetAll().OrderByDescending(o => o.RangeId).FirstOrDefault();
                #if DEBUG
                Debug.WriteLine("newRange ->"+newRange.RangeId.ToString()+" "+newRange.StartAddress.ToString());
                #endif

                return Ok(Mapper.Map<TRangeIpAddress, RangeIpAddressModel>(newRange));
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("range/{id}")]
        public async Task<IActionResult> DeleteRange(int id)
        {
            if (id > 0)
            {
                var range = _unitOfWork.RangeIpAddresses.Get(id);
                if (range == null)
                    return NoContent();
                
                _unitOfWork.RangeIpAddresses.Remove(range);
                _unitOfWork.SaveChanges();
                return NoContent();
            }

            return BadRequest();
        }
    }
}