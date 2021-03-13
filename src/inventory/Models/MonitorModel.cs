using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventory.Models
{
    public class MonitorModel
    {
        private string _lastUpdate;
         
        public int MonitorId { get; set; }
        public string SerialNumber { get; set; }
        public string Model { get; set; }
        public string ComputerName { get; set; }

        public DateTime? LastUpdate { get; set; }
        /*{
            get //(DateTime? value)
            { return _lastUpdate; }
            set
            {
                if (value != null)
                {
                    _lastUpdate = value.ToString();
                }
                else
                {
                    _lastUpdate = "";
                }
                
            }
        } */

    }
}
