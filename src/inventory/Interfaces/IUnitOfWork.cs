namespace inventory.Interfaces
{
    public interface IUnitOfWork
    {
        IRangeIpAddress RangeIpAddresses { get; }
        
        IListIpAddress ListIpAddresses { get; }
        
        int SaveChanges();
    }
}