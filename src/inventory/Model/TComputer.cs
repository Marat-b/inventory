using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace inventory.Model
{
    [Table("t_Computer")]
    public partial class TComputer
    {
        [Key]
        [Column("ComputerID")]
        public int ComputerId { get; set; }
        [StringLength(100)]
        public string Bios { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? BootupTime { get; set; }
        [Column("CDROMDrive")]
        [StringLength(50)]
        public string Cdromdrive { get; set; }
        [StringLength(50)]
        public string ComputerName { get; set; }
        [StringLength(100)]
        public string DiskDrive { get; set; }
        [Column("IPAddress")]
        [StringLength(50)]
        public string Ipaddress { get; set; }
        [StringLength(50)]
        public string Keyboard { get; set; }
        public string LogicalDisk { get; set; }
        [Column("MACAddress")]
        [StringLength(50)]
        public string Macaddress { get; set; }
        [StringLength(100)]
        public string Model { get; set; }
        [StringLength(50)]
        public string Monitor { get; set; }
        [StringLength(100)]
        public string NetworkAdapter { get; set; }
        [StringLength(200)]
        public string OperatingSystem { get; set; }
        [StringLength(50)]
        public string ParallelPort { get; set; }
        [StringLength(100)]
        public string PhysicalMemory { get; set; }
        [StringLength(50)]
        public string PointingDevice { get; set; }
        public string Printer { get; set; }
        [StringLength(100)]
        public string Processor { get; set; }
        public string Product { get; set; }
        [Required]
        [StringLength(100)]
        public string SerialNumber { get; set; }
        [StringLength(50)]
        public string SerialPort { get; set; }
        public string Service { get; set; }
        public string Share { get; set; }
        [StringLength(100)]
        public string SoundDevice { get; set; }
        [StringLength(200)]
        public string UserAccount { get; set; }
        [StringLength(100)]
        public string UserName { get; set; }
        [Column("USBController")]
        [StringLength(200)]
        public string Usbcontroller { get; set; }
        [StringLength(100)]
        public string VideoController { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime? LastUpdate { get; set; }
    }
}
