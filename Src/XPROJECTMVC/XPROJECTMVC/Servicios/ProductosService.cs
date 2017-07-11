using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Web;
using XPROJECTMVC.Models;
using XPROJECTMVC.Models.DTO;

namespace XPROJECTMVC.Servicios
{
    public class ProductosService
    {
        STOCKSHOPEntities context;
        public ProductosService()
        {
            context = new STOCKSHOPEntities();
        }

        public List<ProductoDTO> ObtenerProductos(string condiciones, params object[] parametros)
        {
            IQueryable<Productos> tblInventario = context.Productos;
            IQueryable<Categorias> tblCategorias = context.Categorias;
            var query = (from prod in context.Productos.Where(condiciones, parametros)
                         join categoria in tblCategorias on prod.iIdCategoria equals categoria.iIdCategoria
                         select new ProductoDTO
                         {
                             iIdProducto = prod.iIdProducto,
                             iIdCategoria = categoria.iIdCategoria,
                             cNombreCategoria = categoria.cNombre,
                             cNombre = prod.cNombre,
                             cDescripcion = prod.cDescripcion,
                             dPrecio = prod.dPrecio,
                             dCantidadExistente = prod.dCantidadExistente,
                             dtAlta = prod.dtAlta,
                             dtModificacion = prod.dtModificacion ?? null,
                             lActivo = prod.lActivo
                         });
            return query.ToList();
        }
    }
}