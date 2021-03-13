using inventory.Db;
using inventory.Interfaces;
using inventory.Models;
using Microsoft.EntityFrameworkCore;

namespace inventory.Classes
{
    public class RangeAddressRepository : Repository<TRangeIpAddress>, IRangeIpAddress
    {
        public RangeAddressRepository(DbContext context) : base(context)
        {
        }

        private inventoryContext _appContext => (inventoryContext) _context;
    }
}