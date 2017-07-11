using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XPROJECTMVC.Models.DTO
{
    public class ProductoDTO
    {
        public int iIdProducto { get; set; }
        public int iIdCategoria { get; set; }
        public string cNombreCategoria { get; set; }
        public string cNombre { get; set; }
        public string cDescripcion { get; set; }
        public decimal dPrecio { get; set; }
        public decimal dCantidadExistente { get; set; }
        public DateTime dtAlta { get; set; }
        public DateTime? dtModificacion { get; set; }
        public bool lActivo { get; set; }
    }
}