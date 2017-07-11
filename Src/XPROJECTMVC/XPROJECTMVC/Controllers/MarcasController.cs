using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using XPROJECTMVC.Models;
using XPROJECTMVC.Servicios;

namespace XPROJECTMVC.Controllers
{
    public class MarcasController : Controller
    {
        STOCKSHOPEntities context = new STOCKSHOPEntities();

        public ActionResult Index()
        {
            return View();
        }

        public MvcHtmlString ObtenerHtmlOptionsComboMarcas()
        {
            string cOptions = "";
            MarcasService srvMarcas = new MarcasService();
            List<Marcas> lstMarcas = new List<Marcas>();
            lstMarcas = srvMarcas.ObtenerMarcas("lActivo == @0", true);

            foreach (Marcas marca in lstMarcas)
            {
                cOptions += "<option value=\"" + marca.iIdMarca + "\">" + marca.cNombre + "</option>";
            }

            return new MvcHtmlString(cOptions);
        }
    }
}