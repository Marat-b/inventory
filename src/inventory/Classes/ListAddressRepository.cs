using inventory.Db;
using inventory.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace inventory.Classes
{
    public class ListAddressRepository : Repository<TListIpAddress>, IListIpAddress
    {
        public ListAddressRepository(DbContext context) : base(context)
        {
        }

        private inventoryContext _appContext => (inventoryContext) _context;
    }
}