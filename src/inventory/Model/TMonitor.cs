using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace inventory.Model
{
    [Table("t_Monitor")]
    public partial class TMonitor
    {
        [Key]
        [Column("MonitorID")]
        public int MonitorId { get; set; }
        [StringLength(50)]
        public string SerialNumber { get; set; }
        [StringLength(50)]
        public string Model { get; set; }
        [StringLength(50)]
        public string ComputerName { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime? LastUpdate { get; set; }
    }
}
