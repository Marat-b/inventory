using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using inventory.Db;
using inventory.Interfaces;
using inventory.Models;

namespace inventory.Classes
{
    public class CComputer:IComputer
    {
        private readonly inventoryContext _db;

        public CComputer(inventoryContext db)
        {
            _db = db;
        }

        public IEnumerable<ComputerModel> GetShortData()
        {
            return _db.TComputer.Select(s => new ComputerModel()
            {
                ComputerId = s.ComputerId,
                ComputerName = s.ComputerName,
                SerialNumber = s.SerialNumber,
                Model = s.Model,
                IpAddress = s.Ipaddress,
                UserName = s.UserName,
                LastUpdate = s.LastUpdate
            });
        }


        public IEnumerable<ComputerModel> GetFullData(int computerId)
        {
            return _db.TComputer.Select(s => new ComputerModel()
            {
                ComputerId = s.ComputerId,
                Bios = s.Bios,
                BootupTime = s.BootupTime,
                CdromDrive = s.Cdromdrive,
                ComputerName = s.ComputerName,
                DiskDrive = s.DiskDrive,
                IpAddress = s.Ipaddress,
                Keyboard = s.ComputerName,
                LogicalDisk = s.LogicalDisk,
                LastUpdate = s.LastUpdate,
                MacAddress = s.Macaddress,
                Model = s.Model,
                NetworkAdapter = s.NetworkAdapter,
                OperatingSystem = s.OperatingSystem,
                ParallelPort = s.ParallelPort,
                PhysicalMemory = s.PhysicalMemory,
                PointingDevice = s.PointingDevice,
                Printer = s.Printer,
                Processor = s.Processor,
                SerialNumber = s.SerialNumber,
                SerialPort = s.SerialPort,
                Share = s.Share,
                SoundDevice = s.SoundDevice,
                UserAccount = s.UserAccount,
                UserName = s.UserName,
                VideoController = s.VideoController

            }).Where(w=>w.ComputerId==computerId);
        }


        public IEnumerable<ServiceModel> GetService(int computerId)
        {
            List<ServiceModel> serviceModel =new List<ServiceModel>();
            string service = _db.TComputer.Where(w => w.ComputerId == computerId).Select(s => s.Service)
                .FirstOrDefault();
            if (service != null)
            {
                string[] services = service.Split(";", StringSplitOptions.RemoveEmptyEntries);
                if (services.Length > 0)
                {
                    for (int i = 0; i < services.Length; i++)
                    {
#if DEBUG
                        Debug.WriteLine(services[i]);
#endif
                        string[] itemService = services[i].Split(",", StringSplitOptions.RemoveEmptyEntries);
#if DEBUG
                        for (int j = 0; j < itemService.Length; j++)
                        {
                            Debug.WriteLine(itemService[j]);
                        }

#endif
                        if (itemService.Length >= 4)
                        {
                            serviceModel.Add(new ServiceModel()
                            {
                                Name = itemService[0].Trim(),
                                DisplayName = itemService[1].Trim(),
                                StartMode = itemService[2].Trim(),
                                State = itemService[3].Trim()
                            });
                        }

                    }
                }
            }
            return serviceModel;
        }

        public IEnumerable<ProductModel> GetProduct(int computerId)
        {
            List<ProductModel> productModel=new List<ProductModel>();
            string product = _db.TComputer.Where(w => w.ComputerId == computerId).Select(s => s.Product)
                .FirstOrDefault();
            if (product != null)
            {
                string[] products = product.Split(";", StringSplitOptions.RemoveEmptyEntries);
                if (products.Length > 0)
                {
                    for (int i = 0; i < products.Length; i++)
                    {
                        string[] itemProduct = products[i].Split(",", StringSplitOptions.RemoveEmptyEntries);
                        if (itemProduct.Length >= 3)
                        {
                            productModel.Add(new ProductModel()
                            {
                                Caption = itemProduct[0].Trim(),
                                Version = itemProduct[1].Trim(),
                                InstallDate = itemProduct[2].Trim()
                            });
                        }
                    }
                }
            }

            return productModel;
        }

        public IEnumerable<PrinterModel> GetPrinter(int computerId)
        {
            List<PrinterModel> printerModel=new List<PrinterModel>();
            string printer = _db.TComputer.Where(w => w.ComputerId == computerId).Select(s => s.Printer)
                .FirstOrDefault();
            if (printer != null)
            {
                string[] printers = printer.Split(";", StringSplitOptions.RemoveEmptyEntries);
                if (printers.Length > 0)
                {
                    for (int i = 0;  i<printers.Length;  i++)
                    {
                        string[] itemPrint = printers[i].Split(",", StringSplitOptions.RemoveEmptyEntries);
                        if (itemPrint.Length >= 4)
                        {
                            printerModel.Add(new PrinterModel()
                            {
                                Caption = itemPrint[0].Trim(),
                                DriverName = itemPrint[1].Trim(),
                                PortName = itemPrint[2].Trim(),
                                Local = itemPrint[3].Trim()

                            });
                        }
                    }
                }
            }

            return printerModel;
        }

    }

    


}
