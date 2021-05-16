console.log("funciones exclusivas listas simplemente ligadas");

function bloquear_funciones(){

    document.getElementById("btn_funciones_crear_nodo").disabled = true;
    document.getElementById("btn_funciones_eliminar_nodo").disabled = true;
    document.getElementById("btn_funciones_buscar_nodo").disabled = true;
    document.getElementById("btn_funciones_modificar_nodo").disabled = true;
    document.getElementById("btn_funciones_imprimir_lista").disabled = true;

}

function desbloquear_funciones(){

    document.getElementById("btn_funciones_crear_nodo").disabled = false;
    document.getElementById("btn_funciones_eliminar_nodo").disabled = false;
    document.getElementById("btn_funciones_buscar_nodo").disabled = false;
    document.getElementById("btn_funciones_modificar_nodo").disabled = false;
    document.getElementById("btn_funciones_imprimir_lista").disabled = false;

}

//eliminar elementos del modal de explicación

$('#modal_explicacion').on('hidden.bs.modal', function (e) {
    
    document.getElementById('p_titulo_modal').remove();
    document.getElementById('p_titulo_plan_programacion').remove();
    document.getElementById('img_plan_programacion').remove();
    document.getElementById('p_explicacion_detalles').remove();

    $('#collapse_plan_programacion').collapse('hide')

});

function crear_explicacion(objExplicacion, visualizar){

    let p_titulo_modal = document.createElement("P");
    p_titulo_modal.setAttribute("id", "p_titulo_modal");
    p_titulo_modal.setAttribute("class", "h3");
    let titulo_modal = document.createTextNode(objExplicacion.titulo);
    p_titulo_modal.appendChild(titulo_modal);
    document.getElementById("modal_explicacion_titulo").appendChild(p_titulo_modal);

    let p_explicacion_detalles = document.createElement("P");
    p_explicacion_detalles.setAttribute("id", "p_explicacion_detalles");
    let explicacion_detalles = document.createTextNode(objExplicacion.explicacion);
    p_explicacion_detalles.appendChild(explicacion_detalles);
    document.getElementById("modal_explicacion_detalles").appendChild(p_explicacion_detalles);

    document.getElementById("div_plan_programacion").style.display = visualizar;

    let p_titulo_plan_programacion = document.createElement("P");
    p_titulo_plan_programacion.setAttribute("id", "p_titulo_plan_programacion");
    let titulo_plan_programacion = document.createTextNode(objExplicacion.imagen_titulo);
    p_titulo_plan_programacion.appendChild(titulo_plan_programacion);
    document.getElementById("modal_explicacion_plan_programacion_titulo").appendChild(p_titulo_plan_programacion);

    let img_plan_programacion = document.createElement("IMG");
    img_plan_programacion.setAttribute("id", "img_plan_programacion");
    img_plan_programacion.setAttribute("src", objExplicacion.imagen_ruta);
    img_plan_programacion.setAttribute("class", "responsive plan_programacion");
    document.getElementById("modal_explicacion_plan_programacion_imagen").appendChild(img_plan_programacion);

    $('#modal_explicacion').modal('show');
    
}

function mostrar_alerta_funcion_terminada(){

    $('.main-alert').addClass('mostrar-alerta');

    setTimeout(function(){
        $('.main-alert').removeClass('mostrar-alerta');
    }, 2500);

}   
