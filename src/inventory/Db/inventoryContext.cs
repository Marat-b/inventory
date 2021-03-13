using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace inventory.Db
{
    public partial class inventoryContext : DbContext
    {
        public inventoryContext()
        {
        }

        public inventoryContext(DbContextOptions<inventoryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TComputer> TComputer { get; set; }
        public virtual DbSet<TMonitor> TMonitor { get; set; }
        
        public virtual DbSet<TRangeIpAddress> TRangeIpAddresses { get; set; }
        
        public virtual DbSet<TListIpAddress> TListIpAddresses { get; set; }

        /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("data source=192.168.0.111;initial catalog=inventory;user id=sa;password=Qz135795");
            }
        }*/

        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TComputer>(entity =>
            {
                entity.Property(e => e.LastUpdate).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<TMonitor>(entity =>
            {
                entity.Property(e => e.LastUpdate).HasDefaultValueSql("(getdate())");
            });
        }*/
    }
}
