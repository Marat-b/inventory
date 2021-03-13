using System.Collections.Generic;
using System.Linq;
using inventory.Db;
using inventory.Models;

namespace inventory.Interfaces
{
    public interface IRangeIpAddress: IRepository<TRangeIpAddress>
    {
        
    }
    
    public interface IListIpAddress: IRepository<TListIpAddress>
    {
        
    }
}