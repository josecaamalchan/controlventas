using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using XPROJECTMVC.Models;
using XPROJECTMVC.Servicios;

namespace XPROJECTMVC.Controllers
{
    public class CategoriasController : Controller
    {

        STOCKSHOPEntities context = new STOCKSHOPEntities();

        public ActionResult Index()
        {
            return View();
        }

        public MvcHtmlString ObtenerHtmlOptionsComboFamilias()
        {
            string cOptions = "";
            FamiliasService srvFamilia = new FamiliasService();
            List<Categorias> lstCategorias = new List<Categorias>();
            lstCategorias = srvFamilia.ObtenerFamilias("lActivo == @0", true);

            foreach (Categorias categ in lstCategorias)
            {
                cOptions += "<option value=\"" + categ.iIdCategoria + "\">" + categ.cNombre + "</option>";
            }

            return new MvcHtmlString(cOptions);
        }
    }
}