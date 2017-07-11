using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Web;
using XPROJECTMVC.Models;

namespace XPROJECTMVC.Servicios
{
    public class FamiliasService
    {
        STOCKSHOPEntities context;

        public FamiliasService()
        {
            context = new STOCKSHOPEntities();
        }

        public List<Categorias> ObtenerFamilias(string condiciones, params object[] parametros)
        {
            IQueryable<Categorias> tblCategorias = context.Categorias;
            var query = (from categ in tblCategorias.Where(condiciones, parametros) select categ);
            return query.ToList();
        }
    }
}