using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace inventory.Db
{
    [Table("t_RangeIpAddress")]
    public partial class TRangeIpAddress
    {
        [Key]
        public  int RangeId { get; set; }
        public string StartAddress { get; set; }
        public string EndAddress { get; set; }
    }
}