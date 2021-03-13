using inventory.Db;
using inventory.Interfaces;

namespace inventory.Classes
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly inventoryContext _context;

        private IRangeIpAddress _rangeIpAddresses;
        private IListIpAddress _listIpAddresses;
        
        public UnitOfWork(inventoryContext context)
        {
            _context = context;
        }

        public IRangeIpAddress RangeIpAddresses
        {
            get
            {
                if (_rangeIpAddresses == null)
                    _rangeIpAddresses=new RangeAddressRepository(_context);
                return _rangeIpAddresses;
                
            }
        }
        
        
        public IListIpAddress ListIpAddresses
        {
            get
            {
                if (_listIpAddresses == null)
                    _listIpAddresses=new ListAddressRepository(_context);
                return _listIpAddresses;
                
            }
        }
        
        public int SaveChanges()
        {
            return _context.SaveChanges();
        }


    }
}