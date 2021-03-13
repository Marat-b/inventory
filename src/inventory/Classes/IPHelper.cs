using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;

namespace inventory.Classes
{

    public class IPHelper
    {

        public List<string> IPAddressesRange(string firstIPAddress, string lastIPAddress)
        {
            
            try
            {
                var ipAddressesInTheRange = new List<string>();
                var firstIPAddressAsBytesArray = IPAddress.Parse(firstIPAddress).GetAddressBytes();

                var lastIPAddressAsBytesArray = IPAddress.Parse(lastIPAddress).GetAddressBytes();

                Array.Reverse(firstIPAddressAsBytesArray);

                Array.Reverse(lastIPAddressAsBytesArray);

                var firstIPAddressAsInt = BitConverter.ToInt32(firstIPAddressAsBytesArray, 0);

                var lastIPAddressAsInt = BitConverter.ToInt32(lastIPAddressAsBytesArray, 0);

                

                for (var i = firstIPAddressAsInt; i <= lastIPAddressAsInt; i++)
                {
                    var bytes = BitConverter.GetBytes(i);

                    var newIp = new IPAddress(new[] {bytes[3], bytes[2], bytes[1], bytes[0]});

                    ipAddressesInTheRange.Add(newIp.ToString());
                }
                return ipAddressesInTheRange;
            }
            catch(Exception e)
            {
#if DEBUG
                Debug.WriteLine("Error ->"+e.ToString());
#endif
                return new List<string>();
            }
                
            
        }
    }

}