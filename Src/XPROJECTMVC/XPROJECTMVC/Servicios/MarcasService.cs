using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Web;
using XPROJECTMVC.Models;

namespace XPROJECTMVC.Servicios
{
    public class MarcasService
    {
        STOCKSHOPEntities context;
        public MarcasService()
        {
            context = new STOCKSHOPEntities();
        }

        public List<Marcas> ObtenerMarcas(string condiciones, params object[] parametros)
        {
            var query = (from marca in context.Marcas.Where(condiciones, parametros) select marca);
            return query.ToList();
        }
    }
}