@extends('main.index')

@section('titulo')
<title>Proyecto Tesis</title>
@endsection

@section('descripcion_keywords')
<meta name="description" content="">
<meta name="keywords" content="">
@endsection

@section('estilos')
<style type="text/css">

	canvas{
		border: 1px solid black;
		margin: 0px;
		padding: 0px;
	}

</style>
@endsection

@section('titulo_h1')

	<h1>Insertar</h1>

@endsection


@section('contenido')
<div class="container-fluid">

	<div class="row">

		<div id="div_contenedor" class="col-sm-9">

			<div id="div_canvas" class="col-sm-12">

				<div style="width: 1060px; height: 410px; overflow-x: auto; overflow-y: auto;">
					
					<canvas id="canvas" width="1050" height="400"></canvas>

				</div>

			</div>

			<div id="div_acciones" class="col-sm-12">



			</div>

		</div>

		<div id="div" class="col-sm-3">
			 
		</div>

	</div>

	<!-- Modal -->
	<div class="modal fade" id="modal_dato_nodo" tabindex="-1" role="dialog" aria-labelledby="modal_dato_nodo" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="modal_dato_nodo">Ingrese dato</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">

			<label for="input_dato">Dato:</label>
			<input type="text" id="input_dato" name="input_dato">
			<input type="hidden" id="input_pos_actualX" name="input_pos_actualX">
			<input type="hidden" id="input_pos_actualY" name="input_pos_actualY">
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
			<button id="button_modal_aceptar" type="button" class="btn btn-primary" onclick="agregarNuevoNodo();">Aceptar</button>
		</div>
		</div>
	</div>
	</div>

</div>
@endsection

@section('scripts')

<script type="text/javascript">

	/*
	Declaracion de objectos
	*/
	var obj_nodo = {

		contenedor_principal: {
			x: null,
			y: null,
			width: 205, //195
			height: 123,
		},

		contenedor_liga_endpoint: {
			x: null,
			y: null,
			width: 30,
			height: 30,
		},

		contenedor_direccion_memoria: {
			x: null,
			y: null,
			width: 185,
			height: 50,
		},

		contenedor_dato: {
			x: null,
			y: null,
			width: 70,
			height: 35,
		},

		contenedor_ptrLiga: {
			x: null,
			y: null,
			width: 105,
			height: 35,
		},

		contenedor_ptrLiga_conexion: {
			x: null,
			y: null,
			width: 20,
			height: 20,
		},

		nodo_disenio: {
			margen_lineWidth: 2,
			margen_color: '#000',
			relleno_color: '#fff',
			texto_color: '#000',
			texto_font: '12px Arial',
			texto_font_valores: 'bold 14px Arial',
			texto_variables_color: '#5d4037',
		},

	};

	var obj_ptrNodoInicio = {
		
		contenedor_principal: {
			x: 10,
			y: 10,
			width: 194,
			height: 64,
		},

		disenio: {
			margen_lineWidth: '2',
			margen_color: '#000',
			relleno_color: '#fff',
		},

		ptrLiga: {
			x: 150,
			y: 20,
			width: 44,
			height: 44,
		},

		texto_disenio: {
			font: '12px Arial',
			color: '#000',
			size: 12,
			espacio: 2,
			font_valor: 'bold 14px Arial',
		},

		nodo_conectado: {
			conectado: false,
			nodo_key: null,
			direccion_memoria: "null",
		},

	};

	var canvas, ctx, objetos, objetoActual;
	var letra_linea_base = "middle";

	var mouseIsDownPtrNodoInicio = false;
	var mouseIsDown = false;
	var mouseIsDownLiga = false;

	var click_x, click_y;
	var clickLiga_x, clickLiga_y;

	window.onload = function(){

		objetos = [];

		canvas = document.getElementById("canvas");
		canvas.width = canvas.scrollWidth;
		canvas.height = canvas.scrollHeight;
		ctx = canvas.getContext("2d");

		dibujar_ptrNodoInicio();

		canvas.onmousedown = function(event) {

			objetoActual = null;

			mouseIsDown = true;
			mouseIsDownLiga = false;
			mouseIsDownPtrNodoInicio = false;

			conexionNodos = false;

			let obj_domRect = getDomRect(event);
			let pos_actualX = obj_domRect.pos_actualX;
			let pos_actualY = obj_domRect.pos_actualY;

	      	click_x = pos_actualX;
	      	click_y = pos_actualY;

			//se detecto ptrNodoInicio
			if(obj_ptrNodoInicio.ptrLiga.x < pos_actualX
					&& (obj_ptrNodoInicio.ptrLiga.width + obj_ptrNodoInicio.ptrLiga.x  > obj_domRect.pos_actualX)
					&& obj_ptrNodoInicio.ptrLiga.y < pos_actualY
					&& (obj_ptrNodoInicio.ptrLiga.height + obj_ptrNodoInicio.ptrLiga.y > pos_actualY)
					//
					&& obj_ptrNodoInicio.nodo_conectado.conectado == false){
						
						mouseIsDownPtrNodoInicio = true;
						
			}else{

				let objeto = null;

				for(var key in objetos){

					objeto = objetos[key].key_objecto;

					//verifica cuadro principal
					if(objeto.contenedorPrincipal_x < pos_actualX 
						&& (objeto.contenedorPrincipal_width + objeto.contenedorPrincipal_x  > obj_domRect.pos_actualX)
						&& objeto.contenedorPrincipal_y < pos_actualY 
						&& (objeto.contenedorPrincipal_height + objeto.contenedorPrincipal_y > pos_actualY)){

						objetoActual = objeto;

						//verificar cuadro de liga
						if(objetoActual.contenedorLiga_x < pos_actualX
							&& (objetoActual.liga_width + objetoActual.contenedorLiga_x > pos_actualX)
							&& objetoActual.contenedorLiga_y < pos_actualY
							&& (objetoActual.liga_height + objetoActual.contenedorLiga_y > pos_actualY)
							//
							&& objetoActual.ptrNodoSig.conectado == false){
							
							mouseIsDownLiga = true; 

							break;

						}

						break;
							
					}

				}

			}

			actualizar();

			//console.log("onmousedown " + objetoActual.id + " " + objetoActual.dato);

		};

		canvas.onmousemove = function(event) {

			let obj_domRect = getDomRect(event);
			let pos_actualX = obj_domRect.pos_actualX;
			let pos_actualY = obj_domRect.pos_actualY;

			//se mueve el nodo
			if(mouseIsDown && !mouseIsDownLiga && !mouseIsDownPtrNodoInicio){

				if(objetoActual != null){
					
		      		let mov_x = pos_actualX - click_x;
		      		let mov_y = pos_actualY - click_y;

		      		//contenedor principal
					objetoActual.contenedorPrincipal_x = objetoActual.contenedorPrincipal_x + mov_x;
					objetoActual.contenedorPrincipal_y = objetoActual.contenedorPrincipal_y + mov_y;

					//contenedor principal titulo
					objetoActual.contenedorPrincipal_titulo_x = objetoActual.contenedorPrincipal_titulo_x + mov_x;
					objetoActual.contenedorPrincipal_titulo_y = objetoActual.contenedorPrincipal_titulo_y + mov_y;

					//contenedor principal texto
					objetoActual.contenedorPrincipal_texto_x = objetoActual.contenedorPrincipal_texto_x + mov_x;
					objetoActual.contenedorPrincipal_texto_y = objetoActual.contenedorPrincipal_texto_y + mov_y;

					//contenedor direccion memoria posicion
					objetoActual.contenedorDireccionMemoria_x = objetoActual.contenedorDireccionMemoria_x + mov_x;
					objetoActual.contenedorDireccionMemoria_y = objetoActual.contenedorDireccionMemoria_y + mov_y;

					//contenedor principal Direccion memoria
					objetoActual.contenedorPrincipal_dirmem_x = objetoActual.contenedorPrincipal_dirmem_x + mov_x;
					objetoActual.contenedorPrincipal_dirmem_y = objetoActual.contenedorPrincipal_dirmem_y + mov_y;

					objetoActual.contenedorDireccionMemoriaLigaEndPoint_x = objetoActual.contenedorDireccionMemoriaLigaEndPoint_x + mov_x;
					objetoActual.contenedorDireccionMemoriaLigaEndPoint_y = objetoActual.contenedorDireccionMemoriaLigaEndPoint_y + mov_y;

					// ##########################################################################################

					objetoActual.contenedorDato_x = objetoActual.contenedorDato_x + mov_x;
					objetoActual.contenedorDato_y = objetoActual.contenedorDato_y + mov_y;

					//dato texto
					objetoActual.dato_texto_x = objetoActual.dato_texto_x + mov_x;
					objetoActual.dato_texto_y = objetoActual.dato_texto_y + mov_y;
					//dato valor
					objetoActual.dato_valor_x = objetoActual.dato_valor_x + mov_x;
					objetoActual.dato_valor_y = objetoActual.dato_valor_y + mov_y;

					objetoActual.contenedorLiga_x = objetoActual.contenedorLiga_x + mov_x;
					objetoActual.contenedorLiga_y = objetoActual.contenedorLiga_y + mov_y;

					objetoActual.ptrLiga_texto_x = objetoActual.ptrLiga_texto_x + mov_x;
					objetoActual.ptrLiga_texto_y = objetoActual.ptrLiga_texto_y + mov_y;

					objetoActual.ptrLiga_valor_x = objetoActual.ptrLiga_valor_x + mov_x;
					objetoActual.ptrLiga_valor_y = objetoActual.ptrLiga_valor_y + mov_y;

					actualizar();

					click_x = pos_actualX;
	      			click_y = pos_actualY;

				}
				
			}

			//se mueve la liga
			if(mouseIsDownLiga){

				let x_inicio = objetoActual.contenedorLiga_x + (objetoActual.liga_width / 2);
				let y_inicio = objetoActual.contenedorLiga_y + (objetoActual.liga_height / 2);

		      	actualizar();
				dibujar_liga(false, x_inicio, y_inicio, pos_actualX, pos_actualY);

			}

			//se mueve liga ptrNodoInicio
			if(mouseIsDownPtrNodoInicio){

				let x_inicio = obj_ptrNodoInicio.ptrLiga.x + (obj_ptrNodoInicio.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoInicio.ptrLiga.y + (obj_ptrNodoInicio.ptrLiga.height / 2);

				actualizar();
				dibujar_liga(true, x_inicio, y_inicio, pos_actualX, pos_actualY);

			}

			//console.log("onmousemove " + objetoActual);

		};

		canvas.onmouseup = function(event) {

			mouseIsDown = false;

			if(mouseIsDownLiga || mouseIsDownPtrNodoInicio){

				//determinar posicion donde el mouse fue soltado
				let obj_domRect = getDomRect(event);
				let pos_actualX = obj_domRect.pos_actualX;
				let pos_actualY = obj_domRect.pos_actualY;

				let objeto = null;

				//verificar que la flecha este dentro del rango de algun nodo
				for(var key in objetos){
					
					objeto = objetos[key].key_objecto;

					//verifica en que nodo fue soltado la flecha
					if(objeto.contenedorPrincipal_x < pos_actualX
						&& (objeto.contenedorPrincipal_width + objeto.contenedorPrincipal_x  > pos_actualX)
						&& objeto.contenedorPrincipal_y < pos_actualY
						&& (objeto.contenedorPrincipal_height + objeto.contenedorPrincipal_y > pos_actualY)){

						let x_inicio = null;
						let y_inicio = null;

						let x_fin = objeto.contenedorDireccionMemoriaLigaEndPoint_x + (objeto.contenedorDireccionMemoriaLigaEndPoint_width / 2);
						let y_fin = objeto.contenedorDireccionMemoriaLigaEndPoint_y + (objeto.contenedorDireccionMemoriaLigaEndPoint_height / 2);

						if(mouseIsDownLiga 
							&& objetoActual.ptrNodoSig.conectado == false && (objeto.nodo_conectado.conectado == false || objeto.esNodoInicio == false)){

							x_inicio = objetoActual.contenedorLiga_x + (objetoActual.liga_width / 2);
							y_inicio = objetoActual.contenedorLiga_y + (objetoActual.liga_height / 2);

							//objeto actual se liga con el objeto seleccionado
							objetoActual.ptrNodoSig.conectado = true;
							objetoActual.ptrNodoSig.nodo_sig_key = objeto.key;
							objetoActual.valor_ptrLiga = objeto.direccion_memoria
							
							//objeto seleccionado se liga con el objeto actual
							objeto.nodo_conectado.conectado = true;
							objeto.nodo_conectado.nodo_key = objetoActual.key;

							dibujar_liga(false, x_inicio, y_inicio, x_fin, y_fin);

						}else{

							if(mouseIsDownPtrNodoInicio){

								x_inicio = obj_ptrNodoInicio.ptrLiga.x + (obj_ptrNodoInicio.ptrLiga.width / 2);
								y_inicio = obj_ptrNodoInicio.ptrLiga.y + (obj_ptrNodoInicio.ptrLiga.height / 2);

								obj_ptrNodoInicio.nodo_conectado.conectado = true;
								obj_ptrNodoInicio.nodo_conectado.nodo_key = objeto.key;
								obj_ptrNodoInicio.nodo_conectado.direccion_memoria = objeto.direccion_memoria
								
								objeto.esNodoInicio = true;

								dibujar_liga(true, x_inicio, y_inicio, x_fin, y_fin);

							}

						}

						break;

					}

				}

			}

			mouseIsDownLiga = false;
			mouseIsDownPtrNodoInicio = false;

			actualizar();

		};

		canvas.ondblclick = function(event) {

			if(objetoActual == null){

				let obj_domRect = getDomRect(event);
				let pos_actualX = obj_domRect.pos_actualX;
				let pos_actualY = obj_domRect.pos_actualY;

				document.getElementById("input_pos_actualX").value = pos_actualX;
				document.getElementById("input_pos_actualY").value = pos_actualY;

				$('#modal_dato_nodo').modal('show');

			}

		};

	};

	//FUNCIONES AGREGAR NUEVO NODO

	function agregarNuevoNodo(){

		let dato = document.getElementById("input_dato").value;

		let pos_actualX = parseInt(document.getElementById("input_pos_actualX").value);
		let pos_actualY = parseInt(document.getElementById("input_pos_actualY").value);

		if(!validarDato(dato)){

			let key_objecto = objetos.length;

			//Crear nuevo nodo
			objetos.push({

				key_objecto: {

					esNodoInicio: false,

					key: key_objecto,
					direccion_memoria: generarDireccionMemoria(),
					//valor dato
					valor_dato: dato,
					//liga
					valor_ptrLiga: "null",

					//
					ptrNodoSig: {
						conectado: false,
						nodo_sig_key: null,
					},

					//
					nodo_conectado: {
						conectado: false,
						nodo_key: null,
					},

					//contenedor principal posicion
					contenedorPrincipal_x: pos_actualX,
					contenedorPrincipal_y: pos_actualY,
					//contenedor principal medidas
					contenedorPrincipal_width: obj_nodo.contenedor_principal.width,
					contenedorPrincipal_height: obj_nodo.contenedor_principal.height,

					//texto Struct Nodo
					contenedorPrincipal_titulo_x: pos_actualX + 67.50,
					contenedorPrincipal_titulo_y: pos_actualY + 14,

					// #############################################################################################################

					//contenedor direccion memoria posicion
					contenedorDireccionMemoria_x: pos_actualX + 10,
					contenedorDireccionMemoria_y: pos_actualY + 18,
					//contenedor direccion memoria medidas
					contenedorDireccionMemoria_width: obj_nodo.contenedor_direccion_memoria.width,
					contenedorDireccionMemoria_height: obj_nodo.contenedor_direccion_memoria.height,

					//
					contenedorDireccionMemoriaLigaEndPoint_x: pos_actualX + 20,
					contenedorDireccionMemoriaLigaEndPoint_y: pos_actualY + 28,
					//
					contenedorDireccionMemoriaLigaEndPoint_width: obj_nodo.contenedor_liga_endpoint.width,
					contenedorDireccionMemoriaLigaEndPoint_height: obj_nodo.contenedor_liga_endpoint.height,

					//texto Direccion de memoria:
					contenedorPrincipal_texto_x: obj_nodo.contenedor_liga_endpoint.width + pos_actualX + 24,
					contenedorPrincipal_texto_y: obj_nodo.contenedor_liga_endpoint.height + pos_actualY + 10,

					//texto Direccion memoria del nodo
					contenedorPrincipal_dirmem_x: obj_nodo.contenedor_liga_endpoint.width + pos_actualX + 24,
					contenedorPrincipal_dirmem_y: obj_nodo.contenedor_liga_endpoint.height + pos_actualY + 22,

					// #############################################################################################################

					//contenedor Dato posicion
					contenedorDato_x: pos_actualX + 10,
					contenedorDato_y: pos_actualY + 60 + 18,
					//contenedor Dato medidas
					dato_width: obj_nodo.contenedor_dato.width,
					dato_height: obj_nodo.contenedor_dato.height,
					//dato texto Dato (int)
					dato_texto_x: pos_actualX + 12,
					dato_texto_y: pos_actualY + 74 + 18,
					//dato texto Valor
					dato_valor_x: pos_actualX + 12,
					dato_valor_y: pos_actualY + 88 + 18,

					//contenedor Liga posicion
					contenedorLiga_x: pos_actualX + obj_nodo.contenedor_dato.width + 20,
					contenedorLiga_y: pos_actualY + 60 + 18,
					//contenedor Liga medidas
					liga_width: obj_nodo.contenedor_ptrLiga.width,
					liga_height: obj_nodo.contenedor_ptrLiga.height,
					//direccion memoria texto 
					ptrLiga_texto_x: pos_actualX + obj_nodo.contenedor_dato.width + 22,
					ptrLiga_texto_y: pos_actualY + 74 + 18,
					//direccion memoria Valor
					ptrLiga_valor_x: pos_actualX + obj_nodo.contenedor_dato.width + 22,
					ptrLiga_valor_y: pos_actualY + 88 + 18,

				}
				
			});

		}else{

			

		}

		$('#modal_dato_nodo').modal('hide');

		actualizar();

		document.getElementById("input_dato").value = "";

	}

	/*
	Funcion para validar dato:
		-no sea vacio
	*/
	function validarDato(dato){

		let datoLocal = dato.trim();

		return (datoLocal === "" || datoLocal === null || datoLocal === undefined);

	}

	//FUNCIONES DIBUJAR SOBRE CANVAS

	function actualizar(){

		//limpiar el canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//dibujar ptrNodoInicio
		dibujar_ptrNodoInicio();

		//dibujar nodos y flechas
		let objeto = null;

		for(var key in objetos){

			objeto = objetos[key].key_objecto;

			dibujar_nodo(objeto);

			if(objeto.esNodoInicio){

				//dibujar_liga_nodo_inicio
				let x_inicio = obj_ptrNodoInicio.ptrLiga.x + (obj_ptrNodoInicio.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoInicio.ptrLiga.y + (obj_ptrNodoInicio.ptrLiga.height / 2);

				let x_fin = objeto.contenedorDireccionMemoriaLigaEndPoint_x + (objeto.contenedorDireccionMemoriaLigaEndPoint_width / 2);
				let y_fin = objeto.contenedorDireccionMemoriaLigaEndPoint_y + (objeto.contenedorDireccionMemoriaLigaEndPoint_height / 2);

				dibujar_liga(true, x_inicio, y_inicio, x_fin, y_fin);

			}else{

				if(objeto.nodo_conectado.conectado){

					let obj = objetos[objeto.nodo_conectado.nodo_key].key_objecto;

					let x_inicio = obj.contenedorLiga_x + (obj.liga_width / 2);
					let y_inicio = obj.contenedorLiga_y + (obj.liga_height / 2);

					let x_fin = objeto.contenedorDireccionMemoriaLigaEndPoint_x + (objeto.contenedorDireccionMemoriaLigaEndPoint_width / 2);
					let y_fin = objeto.contenedorDireccionMemoriaLigaEndPoint_y + (objeto.contenedorDireccionMemoriaLigaEndPoint_height / 2);

					dibujar_liga(false, x_inicio, y_inicio, x_fin, y_fin);

				}

			}

			if(objeto.ptrNodoSig.conectado){

				let x_inicio = objeto.contenedorLiga_x + (objeto.liga_width / 2);
				let y_inicio = objeto.contenedorLiga_y + (objeto.liga_height / 2);

				let obj = objetos[objeto.ptrNodoSig.nodo_sig_key].key_objecto;

				let x_fin = obj.contenedorDireccionMemoriaLigaEndPoint_x + (obj.contenedorDireccionMemoriaLigaEndPoint_width / 2);
				let y_fin = obj.contenedorDireccionMemoriaLigaEndPoint_y + (obj.contenedorDireccionMemoriaLigaEndPoint_height / 2);

				dibujar_liga(false, x_inicio, y_inicio, x_fin, y_fin);

			}

		}

		//dibujar seleccion de ptrNodoInicio
		if(mouseIsDownPtrNodoInicio){

			dibujar_seleccion_ptrNodoInicio();

		}else{

			//dibujar seleccion de nodo
			if(objetoActual != null){

				dibujar_seleccion();

				//dibujar seleccion ptrSigNodo
				if(mouseIsDownLiga){
					dibujar_seleccion_liga();
				}

			}

		}

	}

	function dibujar_nodo(objeto){

		//contenedor principal
		ctx.beginPath();
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(objeto.contenedorPrincipal_x, objeto.contenedorPrincipal_y, 
			objeto.contenedorPrincipal_width, objeto.contenedorPrincipal_height);
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_variables_color;
		ctx.fillText("Struct nodo", 
			objeto.contenedorPrincipal_titulo_x, objeto.contenedorPrincipal_titulo_y);

		//contenedor direccion memoria
		ctx.beginPath();
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(objeto.contenedorDireccionMemoria_x, objeto.contenedorDireccionMemoria_y, 
			objeto.contenedorDireccionMemoria_width, objeto.contenedorDireccionMemoria_height);
		ctx.stroke();
		ctx.fill();

		//contenedor direccion memoria liga end point
		ctx.beginPath();
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(objeto.contenedorDireccionMemoriaLigaEndPoint_x, objeto.contenedorDireccionMemoriaLigaEndPoint_y, 
			objeto.contenedorDireccionMemoriaLigaEndPoint_width, objeto.contenedorDireccionMemoriaLigaEndPoint_height);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.font = obj_nodo.nodo_disenio.texto_font;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_color;
		ctx.fillText("Dirección de memoria:", objeto.contenedorPrincipal_texto_x, objeto.contenedorPrincipal_texto_y);

		ctx.beginPath();
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_color;
		ctx.fillText(objeto.direccion_memoria, objeto.contenedorPrincipal_dirmem_x, objeto.contenedorPrincipal_dirmem_y);

		// ##################################################################################################################

		//dato
		ctx.beginPath();
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(objeto.contenedorDato_x, objeto.contenedorDato_y, objeto.dato_width, objeto.dato_height);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_variables_color;
		ctx.fillText("dato", objeto.dato_texto_x, objeto.dato_texto_y);

		ctx.beginPath();
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_color;
		ctx.fillText(objeto.valor_dato, objeto.dato_valor_x, objeto.dato_valor_y);

		//ptrLiga
		ctx.beginPath();
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(objeto.contenedorLiga_x, objeto.contenedorLiga_y, objeto.liga_width, objeto.liga_height);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_variables_color;
		ctx.fillText("*ptrSigNodo", objeto.ptrLiga_texto_x, objeto.ptrLiga_texto_y);

		ctx.beginPath();
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_color;
		ctx.fillText(objeto.valor_ptrLiga, objeto.ptrLiga_valor_x, objeto.ptrLiga_valor_y);

	}

	function dibujar_seleccion(){

		//contenedor principal
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.strokeStyle = '#03a9f4';
		ctx.rect(objetoActual.contenedorPrincipal_x - 3, objetoActual.contenedorPrincipal_y - 3, objetoActual.contenedorPrincipal_width + 6, objetoActual.contenedorPrincipal_height + 6);
		ctx.stroke();

	}

	function dibujar_seleccion_liga(){

		//contenedor principal
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.strokeStyle = '#ec407a';
		ctx.rect(objetoActual.contenedorLiga_x - 3, objetoActual.contenedorLiga_y - 3, objetoActual.liga_width + 6, objetoActual.liga_height + 6);
		ctx.stroke();

	}

	function dibujar_liga(nodoInicio, x_inicio, y_inicio, x_fin, y_fin){

		if(!nodoInicio){
			x_inicio = x_inicio + 35;
		}

		var punta_tamanio = 5;
		var angle = Math.atan2(y_fin-y_inicio,x_fin-x_inicio);

		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#6200ea';
		ctx.moveTo(x_inicio, y_inicio);
		ctx.lineTo(x_fin, y_fin);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(x_fin, y_fin);
		ctx.lineTo(x_fin - punta_tamanio * Math.cos(angle - Math.PI / 7), y_fin - punta_tamanio * Math.sin(angle - Math.PI / 7));
		ctx.lineTo(x_fin - punta_tamanio * Math.cos(angle + Math.PI / 7), y_fin - punta_tamanio * Math.sin(angle + Math.PI / 7));
		ctx.lineTo(x_fin, y_fin);
		ctx.lineTo(x_fin - punta_tamanio * Math.cos(angle - Math.PI / 7), y_fin - punta_tamanio * Math.sin(angle - Math.PI / 7));

		ctx.strokeStyle = "#6200ea";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = "#6200ea";
		ctx.fill();

	}

	/* OBJETOS FIJOS */

	function dibujar_ptrNodoInicio(){

		let inicio_x = obj_ptrNodoInicio.contenedor_principal.x;
		let inicio_y = obj_ptrNodoInicio.contenedor_principal.y;

		let texto_x = inicio_x + 10;

		//ptrNodoInicio
		ctx.beginPath();
		ctx.lineWidth = obj_ptrNodoInicio.disenio.margen_lineWidth;
		ctx.strokeStyle = obj_ptrNodoInicio.disenio.margen_color;
		ctx.fillStyle = obj_ptrNodoInicio.disenio.relleno_color;
		ctx.rect(obj_ptrNodoInicio.contenedor_principal.x, obj_ptrNodoInicio.contenedor_principal.y, 
			obj_ptrNodoInicio.contenedor_principal.width, obj_ptrNodoInicio.contenedor_principal.height);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = obj_ptrNodoInicio.texto_disenio.color;
		ctx.font = obj_ptrNodoInicio.texto_disenio.font;
		ctx.fillText("variable tipo apuntador", texto_x, 34);

		ctx.beginPath();
		ctx.fillStyle = obj_ptrNodoInicio.texto_disenio.color;
		ctx.font = obj_ptrNodoInicio.texto_disenio.font;
		ctx.fillText("nodo *ptrNodoInicio", texto_x, 48);

		ctx.beginPath();
		ctx.fillStyle = obj_ptrNodoInicio.texto_disenio.color;
		ctx.font = obj_ptrNodoInicio.texto_disenio.font_valor;
		ctx.fillText(obj_ptrNodoInicio.nodo_conectado.direccion_memoria, texto_x, 62);

		//ptrNodoInicio liga
		ctx.beginPath();
		ctx.lineWidth = obj_ptrNodoInicio.disenio.margen_lineWidth;
		ctx.strokeStyle = obj_ptrNodoInicio.disenio.margen_color;
		ctx.fillStyle = obj_ptrNodoInicio.disenio.relleno_color;
		ctx.rect(obj_ptrNodoInicio.ptrLiga.x, obj_ptrNodoInicio.ptrLiga.y, 
			obj_ptrNodoInicio.ptrLiga.width, obj_ptrNodoInicio.ptrLiga.height);
		ctx.stroke();
		ctx.fill();

	}

	function dibujar_seleccion_ptrNodoInicio(){

		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.strokeStyle = '#ec407a';
		ctx.rect(obj_ptrNodoInicio.ptrLiga.x - 3, obj_ptrNodoInicio.ptrLiga.y - 3, obj_ptrNodoInicio.ptrLiga.width + 6, obj_ptrNodoInicio.ptrLiga.height + 6);
		ctx.stroke();

	}

	/*
	Funcion para obtener posicion(x,y) donde se dio click en el canvas
	*/
	function getDomRect(event){

		let domRect = canvas.getBoundingClientRect();

		let obj_domRect = {
			'pos_actualX': event.clientX - domRect.left,
	      	'pos_actualY': event.clientY - domRect.top,
		};

		return obj_domRect;

	}

	function generarDireccionMemoria(){

		var hex = "0123456789abcdef"; 
	
		var dirMem = "0x"; 
	
		// of 6 letter or digits 
		for (var i = 0; i < 6; i++){
			dirMem += hex[(Math.floor(Math.random() * 16))]; 
		}

		return dirMem.trim();

	}
		
</script>

@endsection