//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Ventas
    {
        public int iIdVenta { get; set; }
        public int iIdUsuario { get; set; }
        public string cNombreCliente { get; set; }
        public decimal dMonto { get; set; }
        public bool lActivo { get; set; }
        public System.DateTime dtAlta { get; set; }
        public Nullable<System.DateTime> dtModificacion { get; set; }
    }
}
