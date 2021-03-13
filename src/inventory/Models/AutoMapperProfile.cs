using AutoMapper;
using inventory.Db;

namespace inventory.Models
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<TRangeIpAddress, RangeIpAddressModel>().ReverseMap();

            CreateMap<TListIpAddress, ListIpAddressModel>().ReverseMap();
        }
    }
}