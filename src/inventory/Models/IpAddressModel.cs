using System;
using System.Globalization;

namespace inventory.Models
{
    public class RangeIpAddressModel
    {
        public int RangeId { get; set; }
        public string StartAddress { get; set; }
        public string EndAddress { get; set; }
    }
    
    public class ListIpAddressModel
    {
        public int ListId { get; set; }
        public string IpAddress { get; set; }
        public string MacAddress { get; set; }
        public string DeviceName { get; set; }
        public DateTime? LastUpdate { get; set; }
    }
}