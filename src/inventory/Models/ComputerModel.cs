using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventory.Models
{
    public class ComputerModel
    {
        public int ComputerId { get; set; }
        public string Bios { get; set; }
        public DateTime? BootupTime { get; set; }
        public string CdromDrive { get; set; }
        public string ComputerName { get; set; }
        public string DiskDrive { get; set; }
        public string IpAddress { get; set; }
        public string Keyboard { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string LogicalDisk { get; set; }
        public string MacAddress { get; set; }
        public string Model { get; set; }
        public string NetworkAdapter { get; set; }
        public string OperatingSystem { get; set; }
        public string ParallelPort { get; set; }
        public string PhysicalMemory { get; set; }
        public string PointingDevice { get; set; }
        public string Printer { get; set; }
        public string Processor { get; set; }
        public string SerialNumber { get; set; }
        public string SerialPort { get; set; }
        public string Share { get; set; }
        public string SoundDevice { get; set; }
        public string UserAccount { get; set; }
        public string UserName { get; set; }
        public string VideoController { get; set; }
        
    }
}
