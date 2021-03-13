using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace inventory.Db
{
    [Table("t_ListIpAddress")]
    public partial class TListIpAddress
    {
        [Key]
        public int ListId { get; set; }
        public string IpAddress { get; set; }
        public string MacAddress { get; set; }
        public string DeviceName { get; set; }
        public DateTime? LastUpdate { get; set; }
    }
}