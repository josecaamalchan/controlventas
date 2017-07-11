function ObtenerFormulario() {
    $.ajax({
        url: UrlControllers._ObtenerFormularioProductos,
        type: 'POST',
        async: false,
        dataType: 'html',
        success: function (json) {
            var htmlCadena = json.toString();
            debugger
            $('#divVistaFormulario').html(htmlCadena);
            $('#modal-body').modal({
                keyboard: false,
                backdrop: 'static',
                show: 'true'
            });
        },
        error: function (xhr, status) {
            var error = "Ocurrio un error al intentar ejecutar el servicio.";
            bootbox.alert({
                message: error,
                title: "Informaci&oacute;n",
                buttons: {
                    ok: {
                        label: "Aceptar",
                        className: "red"
                    }
                }
            });
        }
    });
}

function GuardarProducto() {
    var datosGuardado = ({
        cNombre: $("#txtNombre").val(),
        cDescripcion: $("#txtDescripcion").val(),
        iCategoria: $("#cmbCategorias").val(),
        iMarca: $("#cmbMarcas").val()
    });

    $.ajax({
        url: UrlControllers._GuardarRegistro,
        data: {
            objeto: JSON.stringify(datosGuardado)
        },
        type: 'POST',
        async: false,
        dataType: 'json',
        success: function (response) {
            debugger
            if (response != null) {
                var Resultado = JSON.parse(response);
                if (Resultado.Resultado == "") {
                    $('#modalProducto').modal('hide');
                    bootbox.alert({
                        message: "El registro fue guardado correctamente.",
                        title: "Informaci&oacute;n",
                        buttons: {
                            ok: {
                                label: "Aceptar",
                                className: "blue"
                            }
                        }

                    });
                }
            }
        },
        error: function (xhr, status) {
            var error = xhr.responseText;
            bootbox.alert({
                message: error,
                title: "Informaci&oacute;n",
                buttons: {
                    ok: {
                        label: "Aceptar",
                        className: "red"
                    }
                }
            });
        }
    });
}

/**
metodo que hace una peticion para obtener los registros segun sea rlel tiode busqueda
*/
function obtenerRegistrosGrid() {
    
    objetoBusqueda = { lEsAvanzada: true, cTipoArchivo: "PDF", cObjeto: JSON.stringify(busqueda) }
    $.ajax({
        url: UrlPanelPrincipal._ObtenerBusquedaAvanzadaRegistros,
        type: 'POST',
        async: false,
        dataType: 'html',
        success: function (html) {
            //$('#myModal').modal('hide');
            //$('#sample_2').dataTable().fnDestroy();
            //$("#sample_2").find("tr:not(:first)").remove();
            $('tbody').html(html);
            TableAdvanced.init();
            //seleccionTabla();
        },
        error: function (xhr, status) {
            var error = "Ocurrio un error al intentar ejecutar el servicio.";
            bootbox.alert({
                message: error,
                title: "Informaci&oacute;n",
                buttons: {
                    ok: {
                        label: "Aceptar",
                        className: "red"
                    }
                }
            });
        }
    });
}

function BlurearCampos() {
    $("#txtNombre").blur();
    $("#txtDescripcion").blur();
}