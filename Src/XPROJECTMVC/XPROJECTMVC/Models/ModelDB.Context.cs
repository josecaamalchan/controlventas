﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace XPROJECTMVC.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class STOCKSHOPEntities : DbContext
    {
        public STOCKSHOPEntities()
            : base("name=STOCKSHOPEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Categorias> Categorias { get; set; }
        public virtual DbSet<DetallesVenta> DetallesVenta { get; set; }
        public virtual DbSet<Marcas> Marcas { get; set; }
        public virtual DbSet<Productos> Productos { get; set; }
        public virtual DbSet<Ventas> Ventas { get; set; }
    }
}
