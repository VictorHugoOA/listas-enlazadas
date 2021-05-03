console.log("funciones reutilizables");

/*
	Funcion para obtener posicion(x,y) donde se dio click en el canvas
*/
function getDomRect(event){

	let domRect = canvas.getBoundingClientRect();

	let obj_domRect = {
		"pos_actualX": event.clientX - domRect.left,
      	"pos_actualY": event.clientY - domRect.top,
	};

	return obj_domRect;

}

/*
	Funcion para generar una Direccion de memoria ficticia en hexadecimal
*/
function generarDireccionMemoria(){

	let hex = "0123456789abcdef"; 
	let dirMem = "0x"; 

	// of 6 letter or digits 
	for (let i = 0; i < 6; i++){
		dirMem += hex[(Math.floor(Math.random() * 16))]; 
	}

	return dirMem.trim();

}

/*
	Funcion para mostrar modal de advertensias
*/

function agregar_advertensia(mensaje){
		
	let parrafo = document.createElement("P");
	parrafo.setAttribute("id", "p_alerta");
	let texto = document.createTextNode(mensaje);
	parrafo.appendChild(texto);
	document.getElementById("div_alertas").appendChild(parrafo);

	$('#modal_advertencias').modal('show');

}

$('#modal_advertencias').on('hidden.bs.modal', function (e) {
	var nodo_eliminar = document.getElementById('p_alerta');
	nodo_eliminar.remove();
});

/*
	Funcion verificar que dato sea int
	
*/

function validar_numero(dato){

	return Number.isInteger(Number(dato));

}

/*CREAR VISTA DE CODIGO*/

function crear_tarjeta(obj){

	let card_id = obj.card_id;
	let titulo_h2 = obj.titulo_h2;
	let titulo_h3 = obj.titulo_h3; 

	let objCard = {
		"card": null,
		"contenedor": null,
	};

	/*se crea el div card*/
	let card_nueva = document.createElement("div");
	card_nueva.setAttribute("id", card_id);
	card_nueva.setAttribute("class", "card");

	//se crea el div contenedor
	let contenedor = document.createElement("div");
	contenedor.setAttribute("class", "contenedor");
	//se agrega el contenedor al card
	card_nueva.appendChild(contenedor);

	//se crea h2
	let card_titulo = document.createElement("h2");
	card_titulo.setAttribute("class", "card_h2");
	card_titulo.innerHTML  = titulo_h2;
	//se agrega h2 al contenedor
	contenedor.appendChild(card_titulo);

	//se crea h3
	let card_subtitulo = document.createElement("h3");
	card_subtitulo.innerHTML  = titulo_h3;
	//se agrega h3 al contenedor
	contenedor.appendChild(card_subtitulo);

	objCard.card = card_nueva;
	objCard.contenedor = contenedor;

	return objCard;

}


function crear_btn_collapsible(objEstructura){

	let card = objEstructura.card;
	let contenedor = objEstructura.contenedor;

	let id_div_contenedor = objEstructura.div_contenedor_paso.id;

	let id_btn_collapse = objEstructura.btn.id;
	let btn_descripcion = objEstructura.btn.descripcion;

	let id_div_collapse = objEstructura.div_codigo.id;
	//let codigo = objEstructura.div_codigo.codigo;

	let imgRuta = objEstructura.div_codigo.imagen;

	let div_contenedor_collapse = document.createElement("div");
	div_contenedor_collapse.setAttribute("id", id_div_contenedor);
	div_contenedor_collapse.setAttribute("style", "display: none;");
	contenedor.appendChild(div_contenedor_collapse);

	let btn_collapsible = document.createElement("button");
	btn_collapsible.setAttribute("id", id_btn_collapse);
	btn_collapsible.setAttribute("class", "btn_collapse");
	btn_collapsible.setAttribute("data-toggle", "collapse");
	btn_collapsible.setAttribute("data-target", "#" + id_div_collapse);
	btn_collapsible.innerHTML  = btn_descripcion;
	div_contenedor_collapse.appendChild(btn_collapsible);

	let div_collapsible = document.createElement("div");
	div_collapsible.setAttribute("id", id_div_collapse);
	div_collapsible.setAttribute("class", "collapse");
	div_collapsible.setAttribute("style", "padding: 10px; overflow-x: auto;");
	div_contenedor_collapse.appendChild(div_collapsible);

	if(imgRuta != ""){

		let img = document.createElement("img");
		img.setAttribute("id", "img");
		img.setAttribute("src", imgRuta );
		img.setAttribute("height", "200px;");
		div_collapsible.appendChild(img);

	}

/*
	for(let i = 0; i < codigo.length; i++){

		let p_collapsible = document.createElement("p");
		p_collapsible.innerHTML  = codigo[i];
		div_collapsible.appendChild(p_collapsible);

	}
*/
}

function deshabilitar_botones_menu(){

	document.getElementById("btn_crear_nodo").disabled = true;
	document.getElementById("btn_eliminar_nodo").disabled = true;
	document.getElementById("btn_buscar_nodo").disabled = true;
	document.getElementById("btn_modificar_nodo").disabled = true;

}

function habilitar_botones_menu(){

	document.getElementById("btn_crear_nodo").disabled = false;
	document.getElementById("btn_eliminar_nodo").disabled = false;
	document.getElementById("btn_buscar_nodo").disabled = false;
	document.getElementById("btn_modificar_nodo").disabled = false;

}

/**/

function agregar_tarjeta_document(card){

	//obtener hijos div_codigo
	var div_codigo_hijos = div_codigo_contenedor.children;

	if(div_codigo_hijos.length == 0){

		div_codigo_contenedor.appendChild(card); 

	}else{

		div_codigo_contenedor.insertBefore(card, div_codigo_hijos[0]); 

	}

}

//NUEVAS FUNCIONES DE CREACION

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function agregar_tabla(tabla){

	//obtener hijos div_codigo
	var div_codigo_hijos = div_codigo_contenedor.children;

	if(div_codigo_hijos.length == 0){

		div_codigo_contenedor.appendChild(tabla); 

	}else{

		div_codigo_contenedor.insertBefore(tabla, div_codigo_hijos[0]); 

	}

}

/*Funcion validar que el objeto esta vacio */
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}