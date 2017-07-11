using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using XPROJECTMVC.Models;
using XPROJECTMVC.Models.DTO;
using XPROJECTMVC.Servicios;

namespace XPROJECTMVC.Controllers
{
    public class ProductosController : Controller
    {
        public ActionResult ObtenerPrincipal()
        {
            ProductosService srvProductos = new ProductosService();
            List<ProductoDTO> lstProductos = new List<ProductoDTO>();
            lstProductos = srvProductos.ObtenerProductos("1==1", true);
            return PartialView("~/Views/Productos/PanelPrincipal.cshtml", lstProductos);
        }

        [HttpPost]
        public ActionResult ObtenerFormulario()
        {
            CategoriasController categController = new CategoriasController();
            MarcasController marcController = new MarcasController();
            ViewBag.Modalidad = "N";
            ViewBag.Titulo = "Producto";
            ViewBag.CategoriasOpcionesCombo = categController.ObtenerHtmlOptionsComboFamilias();
            ViewBag.MarcasOpcionesCombo = marcController.ObtenerHtmlOptionsComboMarcas();
            return PartialView("~/Views/Productos/Formulario.cshtml");
        }

        [HttpPost]
        public string Guardar()
        {
            string cMensaje = "";
            JObject json = JObject.Parse(Request["objeto"]);
            string cModalidad = (string)json["Modalidad"];
            
            try
            {
                using (STOCKSHOPEntities context = new STOCKSHOPEntities())
                {
                    Productos objProd = new Productos();
                    objProd.cNombre = (string)json["cNombre"];
                    objProd.cDescripcion = (string)json["cDescripcion"];
                    objProd.iIdCategoria = (int)json["iCategoria"];
                    objProd.iIdMarca = (int)json["iMarca"];
                    objProd.lActivo = true;
                    objProd.dtAlta = DateTime.Today;
                    objProd.dtModificacion = DateTime.Today;

                    context.Productos.Add(objProd);
                    int iNumGuardados = context.SaveChanges();

                    cMensaje = iNumGuardados > 0 ? "El producto fue guardado correctamente" : "El producto no pudo ser guardado";
                }
            }
            catch(Exception ex)
            {
                cMensaje = ex.Message;
            }

            return cMensaje;
        }
    }
}