var UIAlertDialogApi = function () {

    var handleDialogs = function() {

        $('#reiniciarpassword').click(function () {
            $("#cIdUsuario").blur();
            if ($("#cIdUsuario").val() == "") {
                bootbox.alert({
                    message: "Para poder solicitar el reinicio de la contrase&ntilde;a debe de proporcionar el nombre del usuario.",
                    title: "Informaci&oacute;n de Acceso"
                });
            }
            else {
                bootbox.dialog({
                    message: "Se enviar&aacute; un correo electr&oacute;nico con las instrucciones para poder reiniciar la contrase&ntilde;a del usuario <b>" + $("#cIdUsuario").val() + "</b> que tiene relacionada la siguiente direcci&oacute;n de correo <b>" + $("#cCorreo").val() + "</b>, <br>Clic en <b>Enviar</b> para confirmar la petici&oacute;n de cambio de contrase&ntilde;a, <br>Clic en <b>Cancelar</b> para ingonar est&aacute; petici&oacute;n",
                    title: "Recuperar Contrase&ntilde;a",
                    buttons: {
                        success: {
                            label: "Enviar",
                            className: "green",
                            callback: function () {
                                mostrarCargando();
                                $.ajax({
                                    type: "POST",
                                    data: JSON.stringify({ _IdUsuario: $("#cIdUsuario").val() }),
                                    url: "SolicitarReinicioPassword",
                                    contentType: "application/json; charset=utf-8",
                                    async: false,
                                    success: function (data) {
                                        var UsuarioTmp = $("#cIdUsuario").val();
                                        quitarCargando();
                                        bootbox.alert({
                                            message: "Se ha enviado un correo la siguiente direcci&oacute;n <b>" + $("#cCorreo").val() + "</b> con las instrucciones para reiniciar su contrase&ntilde;a.",
                                            title: "Envio de Correo"
                                        });
                                        location.reload(true);
                                        $("#cIdUsuario").val = UsuarioTmp;
                                    },
                                    error: function (_jqXHR, _textStatus, _errorThrown) {
                                        var UsuarioTmp = $("#cIdUsuario").val();
                                        quitarCargando();
                                        var error = $.parseJSON(_jqXHR.responseText);
                                        bootbox.alert({
                                            message: error.Message,
                                            title: "Informaci&oacute;n"
                                        });
                                        location.reload(true);
                                        $("#cIdUsuario").val = UsuarioTmp;
                                    }
                                });
                            }
                        },
                        danger: {
                            label: "Cancelar",
                            className: "red"
                        }
                    }
                });
            }

        });

        $('#desbloquearusuario').click(function () {
            $("#cIdUsuario").blur();
            if ($("#cIdUsuario").val() == "") {
                bootbox.alert({
                    message: "Para poder solicitar el desbloqueo de la contrase&ntilde;a debe de proporcionar el nombre del usuario.",
                    title: "Informaci&oacute;n de Acceso"
                });
            }
            else {
                bootbox.dialog({
                    message: "Se enviar&aacute; un correo electr&oacute;nico con las instrucciones para poder desbloquear la cuenta del usuario <b>" + $("#cIdUsuario").val() + "</b> que tiene relacionada la siguiente direcci&oacute;n de correo <b>" + $("#cCorreo").val() + "</b>, <br>Clic en <b>Enviar</b> para confirmar la petici&oacute;n de desbloqueo de la cuenta, <br>Clic en <b>Cancelar</b> para ingonar est&aacute; petici&oacute;n",
                    title: "Desbloquear Usuario",
                    buttons: {
                        success: {
                            label: "Enviar",
                            className: "green",
                            callback: function () {
                                $.ajax({
                                    type: "POST",
                                    data: JSON.stringify({ _IdUsuario: $("#cIdUsuario").val() }),
                                    url: "SolicitarDesbloqueoPassword",
                                    contentType: "application/json; charset=utf-8",
                                    async: false,
                                    success: function (data) {
                                        bootbox.alert({
                                            message: "Se ha enviado un correo la siguiente direcci&oacute;n <b>" + $("#cCorreo").val() + "</b> con las instrucciones para desbloquear su usuario.",
                                            title: "Envio de Correo"
                                        });
                                    },
                                    error: function (_jqXHR, _textStatus, _errorThrown) {
                                        var error = $.parseJSON(_jqXHR.responseText);
                                        bootbox.alert({
                                            message: error.Message,
                                            title: "Informaci&oacute;n"
                                        });
                                    }
                                });
                            }
                        },
                        danger: {
                            label: "Cancelar",
                            className: "red"
                        }
                    }
                });
            }

        });

        $('#cancelarreinicio').click(function () {
            $("#cIdUsuario").blur();
            bootbox.dialog({
                message: "Se enviar&aacute; un correo electr&oacute;nico con las instrucciones para cancelar la solicitud de reinicio de contrase&ntilde;a del usuario <b>" + $("#cIdUsuario").val() + "</b> que tiene relacionada la siguiente direcci&oacute;n de correo <b>" + $("#cCorreo").val() + "</b>, <br>Clic en <b>Enviar</b> para confirmar la petici&oacute;n de cambio de contrase&ntilde;a, <br>Clic en <b>Cancelar</b> para ingonar est&aacute; petici&oacute;n",
                title: "Cancelar Reinicio de Contrase&ntilde;a",
                buttons: {
                    success: {
                        label: "Enviar",
                        className: "green",
                        callback: function () {
                            $.ajax({
                                type: "POST",
                                data: JSON.stringify({ _IdUsuario: $("#cIdUsuario").val() }),
                                url: "SolicitarRevertirReinicioPassword",
                                contentType: "application/json; charset=utf-8",
                                async: false,
                                success: function (data) {
                                    bootbox.alert({
                                        message: "Se ha enviado un correo la siguiente direcci&oacute;n <b>" + $("#cCorreo").val() + "</b> con las instrucciones para cancelar el reinicio de su contrase&ntilde;a.",
                                        title: "Envio de Correo"
                                    });
                                },
                                error: function (_jqXHR, _textStatus, _errorThrown) {
                                    var error = $.parseJSON(_jqXHR.responseText);
                                    bootbox.alert({
                                        message: error.Message,
                                        title: "Informaci&oacute;n"
                                    });
                                }
                            });
                        }
                    },
                    danger: {
                        label: "Cancelar",
                        className: "red"
                    }
                }
            });


        });
    }

    var handleAlerts = function() {
        
        $('#alert_show').click(function(){

            Metronic.alert({
                container: $('#alert_container').val(), // alerts parent container(by default placed after the page breadcrumbs)
                place: $('#alert_place').val(), // append or prepent in container 
                type: $('#alert_type').val(),  // alert's type
                message: $('#alert_message').val(),  // alert's message
                close: $('#alert_close').is(":checked"), // make alert closable
                reset: $('#alert_reset').is(":checked"), // close all previouse alerts first
                focus: $('#alert_focus').is(":checked"), // auto scroll to the alert after shown
                closeInSeconds: $('#alert_close_in_seconds').val(), // auto close after defined seconds
                icon: $('#alert_icon').val() // put icon before the message
            });

        });

    }

    return {

        //main function to initiate the module
        init: function () {
            handleDialogs();
            handleAlerts();
        }
    };

}();