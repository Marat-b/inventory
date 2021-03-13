using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using inventory.Models;

namespace inventory.Interfaces
{
    public interface IComputer
    {
        IEnumerable<ComputerModel> GetShortData();
        IEnumerable<ComputerModel> GetFullData(int id);
        IEnumerable<PrinterModel> GetPrinter(int computerId);
        IEnumerable<ProductModel> GetProduct(int computerId);
        IEnumerable<ServiceModel> GetService(int computerId);
        
    }
}
