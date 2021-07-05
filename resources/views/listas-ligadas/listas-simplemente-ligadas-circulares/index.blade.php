@extends('layouts.app')

@section('titulo')
<title>Listas Simplemente Ligadas Circulares</title>
@endsection

@section('descripcion_keywords')
<meta name="description" content="">
<meta name="keywords" content="">
@endsection

@section('estilos')
<link rel="stylesheet" type="text/css" href="{{ asset('../css/index.css') }}"></link>
<style type="text/css">

	canvas{
		margin: 0px;
		padding: 0px;
	}

	.btn-modal-opciones{
		display: flex;
	 	justify-content: center;
	 	margin: 10px;
	}

	/* collapsible */

	.btn_collapse {
		background-color: #777;
		color: white;
		cursor: pointer;
		padding: 12px;
		width: 100%;
		border: none;
		text-align: left;
		outline: none;
		font-size: 14px;
	}

	.active, .btn_collapse:hover {
		background-color: #555;
	}

	.active:after {
		content: "\2212";
	}

	.collapse {
		background-color: #f1f1f1;
	}

	.codigo{

		padding: 10px;

	}

	/*card*/

	.card {
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		transition: 0.3s;
		width: 100%;
		border-radius: 5px;
		margin-bottom: 20px;
	}

	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}

	.contenedor {
		padding: 10px;
	}

	.card_h2{
		color: #0d47a1;
	}

	/*tabla*/

	table, th, td {
		border: 1px solid black;
		border-collapse: collapse;
		margin: 10px;
		font-size: 12px;
	}
	th, td {
		padding: 2px;
		padding-right: 10px;
		text-align: left;
	}

	.btn{

		font-size: 14px;
		padding: 4px;
		margin: 2px;

	}



</style>
@endsection



@section('content')
<div id="div_titulo_h1" align="center">
	<h1>Lista Simplemente Ligada Circular</h1>
</div>

<div class="container-fluid">
	
	<div class="row">
			
		<div id="div_contenedor" class="col-sm-6">

			<div id="div_canvas" class="col-sm-12" style="overflow-x: auto; overflow-y: auto;">

				<canvas id="canvas" width="1500" height="400"></canvas>

			</div>

			<div id="div_acciones" class="col-sm-12">

				<h2>Acciones</h2>

				<button id="btn_iniciar" class="btn btn-primary" type="button" onclick="iniciar();">Iniciar (Compilar y Ejecutar)</button>
				
				<div id="div_funciones_listas_simplemente_ligadas" style="display: none;">
					<button id="btn_funciones_crear_nodo" class="btn btn-primary" type="button" onclick="modal_funciones_insertar_nodo();">Insertar nodo</button>
					<button id="btn_funciones_eliminar_nodo" class="btn btn-primary" type="button" onclick="modal_funciones_eliminar_nodo();">Eliminar nodo</button>
					<button id="btn_funciones_buscar_nodo" class="btn btn-primary" type="button" onclick="modal_funciones_buscar_en_lista();">Buscar nodo</button>
					<button id="btn_funciones_modificar_nodo" class="btn btn-primary" type="button" onclick="modal_funciones_modificar_nodo();">Modificar nodo</button>
					<button id="btn_funciones_imprimir_lista" class="btn btn-primary" type="button" onclick="modal_funciones_imprimir_lista();">Imprimir lista</button>
				</div>

			</div>


		</div>

		<div id="div_codigo" class="col-sm-6" style="padding: 10px; height: 600px; overflow-y: auto; border: solid 2px;">

			<div id="div_codigo_contenedor" style="width: 100%;">
				
				

			</div>

		</div>

	</div>

	<!-- Modal funciones crear nodo -->
	<div id="modal_funciones_crear_nodo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_funciones_crear_nodo" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_funciones_crear_nodo">Crear nodo opciones</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<button id="btn_insertar_nodo_inicial" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_insertar_nodo_inicial();">Insertar nodo inicial</button>
					<button id="btn_insertar_nodo_inicio" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_insertar_nodo_inicio();">Insertar nodo al inicio de la lista</button>
					<button id="btn_insertar_nodo_final" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_insertar_nodo_final();">Insertar nodo al final de la lista</button>
					<button id="btn_insertar_antes_de" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_insertar_nodo_antes_de();">Insertar nodo antes de</button>
					<button id="btn_insertar_despues_de" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_insertar_nodo_despues_de();">Insertar nodo despues de</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal funciones eliminar nodo -->
	<div id="modal_funciones_eliminar_nodo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_funciones_eliminar_nodo" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_funciones_eliminar_nodo">Eliminar nodo opciones</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<button id="btn_eliminar_inicio" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_eliminar_nodo_inicio();">Eliminar nodo inicio</button>
					<button id="btn_eliminar_final" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_eliminar_nodo_final();">Eliminar nodo final</button>
					<button id="btn_eliminar_con_informacion" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_eliminar_nodo_informacionx();">Eliminar nodo con información x</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal funciones buscar -->
	<div id="modal_funciones_buscar" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_funciones_buscar" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_funciones_buscar">Buscar nodo en la lista opciones</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<button id="btn_buscar_en_lista" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_buscar_en_la_lista();">Buscar nodo en la lista</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal funciones modificar -->
	<div id="modal_funciones_modificar_nodo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_funciones_modificar_nodo" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_funciones_modificar_nodo">Modificar (int dato) nodo opciones</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<button id="btn_modificar_nodo" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_modificar_nodo();">Modificar (int dato) nodo</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal funciones imprimir lista -->
	<div id="modal_funciones_imprimir_lista" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_funciones_imprimir_lista" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_funciones_imprimir_lista">Imprimir lista opciones</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<button id="btn_imprimir_lista" class="btn btn-primary btn-modal-opciones" type="button" data-dismiss="modal" onclick="crear_tabla_imprimir_lista();">Imprimir lista</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal dato -->
	<div id="modal_dato_nodo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_dato_nodo" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_dato_nodo">Ingrese dato</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">

					<label for="input_dato">Dato:</label>
					<input type="text" id="input_dato" name="input_dato">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button id="btn_modal_dato_nodo_aceptar" type="button" class="btn btn-primary">Aceptar</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal dato modificar-->
	<div id="modal_dato_nodo_modificar" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_dato_nodo_modificar" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_dato_nodo_modificar">Ingrese el nuevo valor de (int dato)  del nodo</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<label for="input_dato_valor_modificar">(int dato):</label>
					<input type="text" id="input_dato_valor_modificar" name="input_dato_valor_modificar">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button id="btn_modal_dato_nodo_modificar_aceptar" type="button" class="btn btn-primary">Aceptar</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal dato busqueda-->
	<div id="modal_dato_busqueda" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_dato_busqueda" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="h5_modal_dato_busqueda">Ingrese el número a buscar: </h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">

					<label for="input_dato_busqueda">Dato a buscar:</label>
					<input type="text" id="input_dato_busqueda" name="input_dato_busqueda">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button id="btn_modal_dato_busqueda_aceptar" type="button" class="btn btn-primary">Aceptar</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal alertas -->
	<div class="modal fade" id="modal_advertencias" tabindex="-1" role="dialog" aria-labelledby="modal_advertencias" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div id="div_modal_body" class="modal-body">

					<div id="div_modal_body_alerta" id="mensaje" class="alert alert-warning" role="alert">
						<h4 class="alert-heading">Alerta!!</h4>
						<div id="div_alertas">
						</div>
					</div>
					
				</div>
				<div class="modal-footer">
					<button id="btn_modal_advertencias_aceptar" type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal explicación -->
	<div class="modal fade" id="modal_explicacion" tabindex="-1" role="dialog" aria-labelledby="modal_explicacion" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			<div class="modal-content">
				<div id="div_modal_body" class="modal-body">

					<div class="container-fluid">
						
						<div class="row">
							<div id="modal_explicacion_titulo" class="col-sm-12">
							</div>
						</div>

						<div class="row">
							<div id="modal_explicacion_detalles" class="col-sm-12">
							</div>
						</div>

						<div id="div_plan_programacion" class="row">
							<div class="col-sm-12">
								<div class="accordion" id="accordion_plan_programacion">
									<div class="card">
									    <div class="card-header" id="heading_plan_programacion">
									      	<h2 class="mb-0">
									        	<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_plan_programacion" aria-expanded="true" aria-controls="collapse_plan_programacion">
									          		Ver plan de programación
									        	</button>
									      	</h2>
									    </div>
									    <div id="collapse_plan_programacion" class="collapse" aria-labelledby="heading_plan_programacion" data-parent="#accordion_plan_programacion">
									      <div class="card-body">
									      	<div class="row">
									      		<div id="modal_explicacion_plan_programacion_titulo" class="col-sm-12">
												</div>
										      	<div id="modal_explicacion_plan_programacion_imagen" class="col-sm-12">
										      	</div>
									      	</div>
									      </div>
									    </div>
									</div>
								</div>
							</div>
						</div>

					</div>
					
				</div>
				<div class="modal-footer">
					<button id="btn_modal_explicacion_cerrar" type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
				</div>
			</div>
		</div>
	</div>

	<div class="alert alert-success main-alert" role="alert">
	  	Función terminada.
	</div>

</div>
@endsection

@section('scripts')

<!--funciones reutilizables-->
<script src="{{ asset('../js/funciones-reutilizables/index.js') }}"></script>

<!--funciones exclusivas-->
<script src="{{ asset('../js/lista-simplemente-ligada-circular/funciones/index.js') }}"></script>

<!--funciones listas simplemente ligadas-->
<script src="{{ asset('../js/lista-simplemente-ligada-circular/inicio/index.js') }}"></script>

<script type="text/javascript">

	var empezar = false;

	var obj_nodo = {

		"contenedor_principal": {
			"width": 175,
			"height": 74,
		},

		"contenedor_direccion_memoria": {
			"width": 175,
			"height": 22,
		},

		"contenedor_dato": {
			"width": 70,
			"height": 52,
		},

		"contenedor_ptrLiga": {
			"width": 105,
			"height": 52,
		},

		"nodo_disenio": {
			"margen_lineWidth": 2,
			"margen_color": '#000',
			"relleno_color": '#fff',
			"texto_color": '#000',
			"texto_font": '14px Arial',
			"texto_font_valores": 'bold 14px Arial',
			"texto_variables_color": '#4a148c',
		},

		"nodo_seleccion_disenio": {
			"margen_lineWidth": 4,
			"margen_color": '#03a9f4',
		},

	};

	var obj_ptrNodoInicio = {
		
		"contenedor_principal": {
			"x": 10,
			"y": 10,
			"width": 137,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"ptrLiga": {
			"x": 107,
			"y": 20,
			"width": 30,
			"height": 30,
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"direccion_memoria_color": '#0d47a1',
		},

		"nombre": "ptrNodoInicio",

		"declarada": false,

		"nodo_conectado": {
			"key": null,
		},

	};

	var obj_ptrNodoFinal = {

		"contenedor_principal": {
			"x": 10,
			"y": 331,
			"width": 137,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"ptrLiga": {
			"x": 107,
			"y": 341,
			"width": 30,
			"height": 30,
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"direccion_memoria_color": '#b71c1c',
		},

		"nombre": "ptrNodoFinal",

		"declarada": false,
		
		"nodo_conectado": {
			"key": null,
		},

	};

	//variables que utilizan las funciones de c++

	var obj_var_encontrado = {
		
		"contenedor_principal": {
			"x": 10,
			"y": 70,
			"width": 80,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"valor_color": '#000',
		},

		"nombre": "encontrado",
		"valor": true,

		"declarada": false,

	};

	var obj_var_busqueda = {
		
		"contenedor_principal": {
			"x": 10,
			"y": 130,
			"width": 80,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"valor_color": '#000',
		},

		"nombre": "busqueda",
		"valor": 0,
		
		"declarada": false,

	};

	//apuntadores que utilizan las funciones de c++

	var obj_ptrNodoNuevo = {
		
		"contenedor_principal": {
			"x": 10,
			"y": 190,
			"width": 137,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"ptrLiga": {
			"x": 107,
			"y": 200,
			"width": 30,
			"height": 30,
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"direccion_memoria_color": '#000',
		},

		"nombre": "ptrNodoNuevo",

		"declarada": false,

		"nodo_conectado": {
			"key": null,
		},

	};

	var obj_ptrNodoActual = {
		
		"contenedor_principal": {
			"x": 167,
			"y": 10,
			"width": 137,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"ptrLiga": {
			"x": 264,
			"y": 20,
			"width": 30,
			"height": 30,
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"direccion_memoria_color": '#000',
		},

		"nombre": "ptrNodoActual",

		"declarada": false,

		"nodo_conectado": {
			"key": null,
		},

	};

	var obj_ptrNodoEliminar = {
		
		"contenedor_principal": {
			"x": 167,
			"y": 10,
			"width": 137,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"ptrLiga": {
			"x": 264,
			"y": 20,
			"width": 30,
			"height": 30,
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"direccion_memoria_color": '#000',
		},

		"nombre": "ptrNodoEliminar",

		"declarada": false,

		"nodo_conectado": {
			"key": null,
		},

	};

	var obj_ptrNodoAnterior = {
		
		"contenedor_principal": {
			"x": 167,
			"y": 10,
			"width": 137,
			"height": 50,
		},

		"disenio": {
			"margen_lineWidth": '2',
			"margen_color": '#000',
			"relleno_color": '#fff',
		},

		"ptrLiga": {
			"x": 264,
			"y": 20,
			"width": 30,
			"height": 30,
		},

		"texto_disenio": {
			"font": '12px Arial',
			"color": '#000',
			"size": 12,
			"espacio": 2,
			"font_valor": 'bold 14px Arial',
			"direccion_memoria_color": '#000',
		},

		"nombre": "ptrNodoAnterior",

		"declarada": false,

		"nodo_conectado": {
			"key": null,
		},

	};

	//

	var canvas, ctx, objetos, objetoActual;

	var mouseIsDown = false;
	var clickDetectado = false;
	var mouseIsDown_ptrNodoNuevo = false;
	var mouseIsDown_ptrNodoActual = false;
	var mouseIsDown_ptrNodoEliminar = false;
	var mouseIsDown_ptrNodoAnterior = false;

	var click_x, click_y;
	var clickLiga_x, clickLiga_y;

	window.onload = function(){

		objetos = {};

		canvas = document.getElementById("canvas");
		canvas.width = canvas.scrollWidth;
		canvas.height = canvas.scrollHeight;
		ctx = canvas.getContext("2d");

	};

	function iniciar(){

		crear_tabla_declaracion_variables_globales();

		/*EVENTS DE MOUSE SOBRE EL CANVAS*/

		canvas.onmousedown = function(event) {

			if(empezar){

				objetoActual = null;

				mouseIsDown = true;
				clickDetectado = false;
				mouseIsDown_ptrNodoNuevo = false;
				mouseIsDown_ptrNodoActual = false;
				mouseIsDown_ptrNodoEliminar = false;
				mouseIsDown_ptrNodoAnterior = false;

				let obj_domRect = getDomRect(event);
				let pos_actualX = obj_domRect.pos_actualX;
				let pos_actualY = obj_domRect.pos_actualY;

				click_x = pos_actualX;
				click_y = pos_actualY;

				if((obj_ptrNodoNuevo.declarada && detectar_ptrNodo(obj_ptrNodoNuevo, pos_actualX, pos_actualY)) 
				|| (obj_ptrNodoActual.declarada && detectar_ptrNodo(obj_ptrNodoActual, pos_actualX, pos_actualY))
				|| (obj_ptrNodoEliminar.declarada && detectar_ptrNodo(obj_ptrNodoEliminar, pos_actualX, pos_actualY))
				|| (obj_ptrNodoAnterior.declarada && detectar_ptrNodo(obj_ptrNodoAnterior, pos_actualX, pos_actualY))){
					
					if(obj_ptrNodoNuevo.declarada && detectar_ptrNodo(obj_ptrNodoNuevo, pos_actualX, pos_actualY) && !clickDetectado){
						mouseIsDown_ptrNodoNuevo = true;
						clickDetectado = true;
					}

					if(obj_ptrNodoActual.declarada && detectar_ptrNodo(obj_ptrNodoActual, pos_actualX, pos_actualY) && !clickDetectado){
						mouseIsDown_ptrNodoActual = true;
						clickDetectado = true;
					}

					if(obj_ptrNodoEliminar.declarada && detectar_ptrNodo(obj_ptrNodoEliminar, pos_actualX, pos_actualY) && !clickDetectado){
						mouseIsDown_ptrNodoEliminar = true;
						clickDetectado = true;
					}

					if(obj_ptrNodoAnterior.declarada && detectar_ptrNodo(obj_ptrNodoAnterior, pos_actualX, pos_actualY) && !clickDetectado){
						mouseIsDown_ptrNodoAnterior = true;
						clickDetectado = true;
					}

				}else{

					let objeto = null;

					for(var key in objetos){

						objeto = objetos[key];

						//verifica cuadro principal
						if(objeto.nodo_estructura.contenedor_principal.x < pos_actualX 
							&& (objeto.nodo_estructura.contenedor_principal.width + objeto.nodo_estructura.contenedor_principal.x  > pos_actualX)
							&& objeto.nodo_estructura.contenedor_principal.y < pos_actualY 
							&& (objeto.nodo_estructura.contenedor_principal.height + objeto.nodo_estructura.contenedor_principal.y > pos_actualY)){

							objetoActual = objeto;

							break;
								
						}

					}
					
				}

				actualizar();

			}

		};

		canvas.onmousemove = function(event) {

			if(empezar){

				let obj_domRect = getDomRect(event);
				let pos_actualX = obj_domRect.pos_actualX;
				let pos_actualY = obj_domRect.pos_actualY;

				if(mouseIsDown){

					let mov_x = pos_actualX - click_x;
					let mov_y = pos_actualY - click_y;

					//mover el nodo
					if(objetoActual != null){
						
						//objetoActual.nodo_estructura.contenedor_principal.
						objetoActual.nodo_estructura.contenedor_principal.x = objetoActual.nodo_estructura.contenedor_principal.x + mov_x;
						objetoActual.nodo_estructura.contenedor_principal.y = objetoActual.nodo_estructura.contenedor_principal.y + mov_y;

						//objetoActual.nodo_estructura.titulo_dir_mem.
						objetoActual.nodo_estructura.titulo_dir_mem.x = objetoActual.nodo_estructura.titulo_dir_mem.x + mov_x;
						objetoActual.nodo_estructura.titulo_dir_mem.y = objetoActual.nodo_estructura.titulo_dir_mem.y + mov_y;

						//

						//objetoActual.dato_estructura.contenedor.
						objetoActual.dato_estructura.contenedor.x = objetoActual.dato_estructura.contenedor.x + mov_x;
						objetoActual.dato_estructura.contenedor.y = objetoActual.dato_estructura.contenedor.y + mov_y;

						//objetoActual.dato_estructura.titulo.
						objetoActual.dato_estructura.titulo.x = objetoActual.dato_estructura.titulo.x + mov_x;
						objetoActual.dato_estructura.titulo.y = objetoActual.dato_estructura.titulo.y + mov_y;

						//objetoActual.dato_estructura.valor.
						objetoActual.dato_estructura.valor.x = objetoActual.dato_estructura.valor.x + mov_x;
						objetoActual.dato_estructura.valor.y = objetoActual.dato_estructura.valor.y + mov_y;

						//

						//objetoActual.ptrLiga_estructura.contenedor.
						objetoActual.ptrLiga_estructura.contenedor.x = objetoActual.ptrLiga_estructura.contenedor.x + mov_x;
						objetoActual.ptrLiga_estructura.contenedor.y = objetoActual.ptrLiga_estructura.contenedor.y + mov_y;

						//objetoActual.ptrLiga_estructura.titulo.
						objetoActual.ptrLiga_estructura.titulo.x = objetoActual.ptrLiga_estructura.titulo.x + mov_x;
						objetoActual.ptrLiga_estructura.titulo.y = objetoActual.ptrLiga_estructura.titulo.y + mov_y;

						//objetoActual.ptrLiga_estructura.valor.
						objetoActual.ptrLiga_estructura.valor.x = objetoActual.ptrLiga_estructura.valor.x + mov_x;
						objetoActual.ptrLiga_estructura.valor.y = objetoActual.ptrLiga_estructura.valor.y + mov_y;

					}

					if(mouseIsDown_ptrNodoNuevo){
						mover_puntero(obj_ptrNodoNuevo, mov_x, mov_y);
					}
					
					if(mouseIsDown_ptrNodoActual){
						mover_puntero(obj_ptrNodoActual, mov_x, mov_y);
					}

					if(mouseIsDown_ptrNodoEliminar){
						mover_puntero(obj_ptrNodoEliminar, mov_x, mov_y);
					}

					if(mouseIsDown_ptrNodoAnterior){
						mover_puntero(obj_ptrNodoAnterior, mov_x, mov_y);
					}

					actualizar();

					click_x = pos_actualX;
					click_y = pos_actualY;
					
				}

			}

		};

		canvas.onmouseup = function(event) {

			if(empezar){

				mouseIsDown = false;

				actualizar();

			}

		};

	}

	//FUNCIONES CREAR NUEVO NODO

	function crearNuevoNodo(objDireccionMemoria){

		//let dato = document.getElementById("input_dato").value;

		let direccion_memoria = objDireccionMemoria.direccion_memoria;

		let pos_actualX = 180;
		let pos_actualY = 165;

		let key_objecto = direccion_memoria;

		//Crear nuevo nodo
		objetos[key_objecto] = {

			"key": key_objecto,
			"direccion_memoria": direccion_memoria,

			"dato": {
				"valor": null,
			},

			"ptrLigaSig": {
				"inicializado": false,
				"key": null,
			},

			"nodo_estructura": {

				"contenedor_principal": {
					"x": pos_actualX,
					"y": pos_actualY,
					"width": obj_nodo.contenedor_principal.width,
					"height": obj_nodo.contenedor_principal.height,
				},

				"titulo_dir_mem": {
					"x": pos_actualX + (obj_nodo.contenedor_principal.width / 2),
					"y": pos_actualY + 16,
				},

			},

			"dato_estructura": {

				"contenedor": {
					"x": pos_actualX,
					"y": pos_actualY + obj_nodo.contenedor_direccion_memoria.height,
					"width": obj_nodo.contenedor_dato.width,
					"height": obj_nodo.contenedor_dato.height,
				},

				"titulo": {
					"x": pos_actualX + 10,
					"y": pos_actualY + obj_nodo.contenedor_direccion_memoria.height + 22,
				},

				"valor": {
					"x": pos_actualX + 10,
					"y": pos_actualY + obj_nodo.contenedor_direccion_memoria.height + 40,
				},
				
			},

			"ptrLiga_estructura": {

				"contenedor": {
					"x": pos_actualX + obj_nodo.contenedor_dato.width,
					"y": pos_actualY + obj_nodo.contenedor_direccion_memoria.height,
					"width": obj_nodo.contenedor_ptrLiga.width,
					"height": obj_nodo.contenedor_ptrLiga.height,
				},

				"titulo": {
					"x": pos_actualX + obj_nodo.contenedor_dato.width + 10,
					"y": pos_actualY + obj_nodo.contenedor_direccion_memoria.height + 22,
				},

				"valor": {
					"x": pos_actualX + obj_nodo.contenedor_dato.width + 10,
					"y": pos_actualY + obj_nodo.contenedor_direccion_memoria.height + 40,
				},

			},

		};

		actualizar();

		return key_objecto;

	}

	//FUNCIONES DIBUJAR SOBRE CANVAS

	function actualizar(){

		//limpiar el canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//dibujar apuntadores

		if(obj_ptrNodoInicio.declarada){

			dibujar_puntero(obj_ptrNodoInicio);

		}

		if(obj_ptrNodoFinal.declarada){

			dibujar_puntero(obj_ptrNodoFinal);

		}

		if(obj_ptrNodoNuevo.declarada){

			dibujar_puntero(obj_ptrNodoNuevo);

		}

		//punteros que se mueven

		if(obj_ptrNodoAnterior.declarada){

			dibujar_puntero(obj_ptrNodoAnterior);

		}

		if(obj_ptrNodoActual.declarada){

			dibujar_puntero(obj_ptrNodoActual);

		}

		if(obj_ptrNodoEliminar.declarada){

			dibujar_puntero(obj_ptrNodoEliminar);

		}

		

		//dibujar nodos
		let objeto = null;

		for(var key in objetos){

			objeto = objetos[key];

			dibujar_nodo(objeto);

		}

		//dibujar flechas
		for(var key in objetos){

			objeto = objetos[key];

			if(obj_ptrNodoNuevo.nodo_conectado.key == objeto.key){

				//ptrLigaSig
				let x_inicio = obj_ptrNodoNuevo.ptrLiga.x + (obj_ptrNodoNuevo.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoNuevo.ptrLiga.y + (obj_ptrNodoNuevo.ptrLiga.height / 2);

				//endpoint
				let x_fin = objeto.nodo_estructura.contenedor_principal.x + 45;
				let y_fin = objeto.nodo_estructura.contenedor_principal.y + 11;

				dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, obj_ptrNodoNuevo.texto_disenio.direccion_memoria_color);

			}

			if(obj_ptrNodoActual.nodo_conectado.key == objeto.key){

				//ptrLigaSig
				let x_inicio = obj_ptrNodoActual.ptrLiga.x + (obj_ptrNodoActual.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoActual.ptrLiga.y + (obj_ptrNodoActual.ptrLiga.height / 2);

				//endpoint
				let x_fin = objeto.nodo_estructura.contenedor_principal.x + 45;
				let y_fin = objeto.nodo_estructura.contenedor_principal.y + 11;

				dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, obj_ptrNodoActual.texto_disenio.direccion_memoria_color);

			}

			if(obj_ptrNodoEliminar.nodo_conectado.key == objeto.key){

				//ptrLigaSig
				let x_inicio = obj_ptrNodoEliminar.ptrLiga.x + (obj_ptrNodoEliminar.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoEliminar.ptrLiga.y + (obj_ptrNodoEliminar.ptrLiga.height / 2);

				//endpoint
				let x_fin = objeto.nodo_estructura.contenedor_principal.x + 45;
				let y_fin = objeto.nodo_estructura.contenedor_principal.y + 11;

				dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, obj_ptrNodoEliminar.texto_disenio.direccion_memoria_color);

			}

			if(obj_ptrNodoAnterior.nodo_conectado.key == objeto.key){

				//ptrLigaSig
				let x_inicio = obj_ptrNodoAnterior.ptrLiga.x + (obj_ptrNodoAnterior.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoAnterior.ptrLiga.y + (obj_ptrNodoAnterior.ptrLiga.height / 2);

				//endpoint
				let x_fin = objeto.nodo_estructura.contenedor_principal.x + 45;
				let y_fin = objeto.nodo_estructura.contenedor_principal.y + 11;

				dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, obj_ptrNodoAnterior.texto_disenio.direccion_memoria_color);

			}

			if(obj_ptrNodoFinal.nodo_conectado.key == objeto.key){

				//ptrLigaSig
				let x_inicio = obj_ptrNodoFinal.ptrLiga.x + (obj_ptrNodoFinal.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoFinal.ptrLiga.y + (obj_ptrNodoFinal.ptrLiga.height / 2);

				//endpoint
				let x_fin = objeto.nodo_estructura.contenedor_principal.x + 45;
				let y_fin = objeto.nodo_estructura.contenedor_principal.y + 11;

				dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, obj_ptrNodoFinal.texto_disenio.direccion_memoria_color);

			}

			if(obj_ptrNodoInicio.nodo_conectado.key == objeto.key){

				//ptrLigaSig
				let x_inicio = obj_ptrNodoInicio.ptrLiga.x + (obj_ptrNodoInicio.ptrLiga.width / 2);
				let y_inicio = obj_ptrNodoInicio.ptrLiga.y + (obj_ptrNodoInicio.ptrLiga.height / 2);

				//endpoint
				let x_fin = objeto.nodo_estructura.contenedor_principal.x + 45;
				let y_fin = objeto.nodo_estructura.contenedor_principal.y + 11;

				dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, obj_ptrNodoInicio.texto_disenio.direccion_memoria_color);

			}

			if(objeto.ptrLigaSig.key != null){
				if(objeto.ptrLigaSig.key == obj_ptrNodoInicio.nodo_conectado.key){

					let objInicio = objetos[obj_ptrNodoInicio.nodo_conectado.key];

					let endX = objInicio.nodo_estructura.titulo_dir_mem.x;
					let startX = objeto.ptrLiga_estructura.contenedor.x + objeto.ptrLiga_estructura.contenedor.width;
					let endY = objInicio.nodo_estructura.titulo_dir_mem.y;
					let startY = objeto.ptrLiga_estructura.contenedor.y;
					let middleX = (endX + startX)/2;
					let middleY = (endY + startY)/2;
					let offsetX = canvas.width/2

					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.strokeStyle = '#000000';
					ctx.moveTo(startX, startY);
					ctx.quadraticCurveTo(middleX + (offsetX/2), middleY - 20, endX, endY);
					ctx.stroke();

					const punta_tamanio = 5;
					const angle = Math.atan2(endY - (middleY - 20 ), endX - (middleX + offsetX/2));

					ctx.beginPath();
					ctx.moveTo(endX, endY);
					ctx.lineTo(endX - punta_tamanio * Math.cos(angle - Math.PI / 7), endY - punta_tamanio * Math.sin(angle - Math.PI / 7));
					ctx.lineTo(endX - punta_tamanio * Math.cos(angle + Math.PI / 7), endY - punta_tamanio * Math.sin(angle + Math.PI / 7));
					ctx.lineTo(endX, endY);
					ctx.lineTo(endX - punta_tamanio * Math.cos(angle - Math.PI / 7), endY - punta_tamanio * Math.sin(angle - Math.PI / 7));
					ctx.strokeStyle='#FF0000';
					ctx.stroke();
					ctx.fillStyle = "#FF0000";
					ctx.fill();

				}else{
					//ptrLigaSig
					let x_inicio = objeto.ptrLiga_estructura.contenedor.x + 90;
					let y_inicio = objeto.ptrLiga_estructura.contenedor.y + (objeto.ptrLiga_estructura.contenedor.height / 2);
					let obj = objetos[objeto.ptrLigaSig.key];
					//endpoint
					let x_fin = obj.nodo_estructura.contenedor_principal.x + 45;
					let y_fin = obj.nodo_estructura.contenedor_principal.y + 11;
					dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, "#000000");
				}

			}

		}

		//dibuja variables de c++

		if(obj_var_encontrado.declarada){

			dibujar_variable(obj_var_encontrado);

		}

		if(obj_var_busqueda.declarada){

			dibujar_variable(obj_var_busqueda);

		}

	}

	function dibujar_nodo(nodo){ 

		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		//ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(nodo.nodo_estructura.contenedor_principal.x, nodo.nodo_estructura.contenedor_principal.y, 
			nodo.nodo_estructura.contenedor_principal.width, nodo.nodo_estructura.contenedor_principal.height);
		ctx.fill();
		//ctx.stroke();

		ctx.beginPath();
		ctx.textAlign = "center";

		let color = null;

		if(obj_ptrNodoInicio.nodo_conectado.key == nodo.key && obj_ptrNodoFinal.nodo_conectado.key == nodo.key){
			
			color = "#00796b";

		}else{

			if(obj_ptrNodoInicio.nodo_conectado.key == nodo.key){
			
			color = obj_ptrNodoInicio.texto_disenio.direccion_memoria_color;

			}else{

				if(obj_ptrNodoFinal.nodo_conectado.key == nodo.key){
			
					color = obj_ptrNodoFinal.texto_disenio.direccion_memoria_color;

				}else{

					color = "#000000";

				}

			}

		}

		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = color;
		ctx.fillText(nodo.direccion_memoria, 
			nodo.nodo_estructura.titulo_dir_mem.x, nodo.nodo_estructura.titulo_dir_mem.y);

		/*Dibujar contenedor dato*/

		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(nodo.dato_estructura.contenedor.x, nodo.dato_estructura.contenedor.y, 
			nodo.dato_estructura.contenedor.width, nodo.dato_estructura.contenedor.height);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.textAlign = "left";
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_variables_color;
		ctx.fillText("dato", nodo.dato_estructura.titulo.x, nodo.dato_estructura.titulo.y);

		ctx.beginPath();
		ctx.textAlign = "left";
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_color;

		let dato_valor = null;

		if(nodo.dato.valor !== null){

			dato_valor = nodo.dato.valor;

		}else{

			dato_valor = "";

		}

		ctx.fillText(dato_valor, nodo.dato_estructura.valor.x, nodo.dato_estructura.valor.y);

		/*Dibujar contenedor ptrLigaSig*/

		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.fillStyle = obj_nodo.nodo_disenio.relleno_color;
		ctx.strokeStyle = obj_nodo.nodo_disenio.margen_color;
		ctx.rect(nodo.ptrLiga_estructura.contenedor.x,nodo.ptrLiga_estructura.contenedor.y, 
			nodo.ptrLiga_estructura.contenedor.width, nodo.ptrLiga_estructura.contenedor.height);
		ctx.stroke();
		ctx.fill();
		
		ctx.beginPath();
		ctx.textAlign = "left";
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_variables_color;
		ctx.fillText("ptrNodoSig", nodo.ptrLiga_estructura.titulo.x, nodo.ptrLiga_estructura.titulo.y);

		ctx.beginPath();
		ctx.textAlign = "left";
		ctx.font = obj_nodo.nodo_disenio.texto_font_valores;
		ctx.fillStyle = obj_nodo.nodo_disenio.texto_color;

		let ptrNodoSig = null;

		if(nodo.ptrLigaSig.inicializado){

			if(nodo.ptrLigaSig.key !== null){

				ptrNodoSig = objetos[nodo.ptrLigaSig.key].direccion_memoria;

			}else{

				ptrNodoSig = "NULL";

			}			

			

		}else{

			ptrNodoSig = "";

		}

		ctx.fillText(ptrNodoSig, nodo.ptrLiga_estructura.valor.x, nodo.ptrLiga_estructura.valor.y);

	}

	function dibujar_seleccion_nodo(){

		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = '#03a9f4';
		ctx.rect(objetoActual.nodo_estructura.contenedor_principal.x - 2, objetoActual.nodo_estructura.contenedor_principal.y - 2, 
			objetoActual.nodo_estructura.contenedor_principal.width + 4, objetoActual.nodo_estructura.contenedor_principal.height + 4);
		ctx.stroke();

	}

	function dibujar_seleccion_liga(){

		//objetoActual.ptrLiga_estructura.contenedor.

		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = '#ec407a';
		ctx.rect(objetoActual.ptrLiga_estructura.contenedor.x - 2, objetoActual.ptrLiga_estructura.contenedor.y - 2, 
			objetoActual.ptrLiga_estructura.contenedor.width + 4, objetoActual.ptrLiga_estructura.contenedor.height + 4);
		ctx.stroke();

	}

	function dibujar_liga(x_inicio, y_inicio, x_fin, y_fin, color){

		var punta_tamanio = 5;
		var angle = Math.atan2(y_fin - y_inicio, x_fin - x_inicio);

		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = color;
		ctx.moveTo(x_inicio, y_inicio);
		ctx.lineTo(x_fin, y_fin);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(x_fin, y_fin);
		ctx.lineTo(x_fin - punta_tamanio * Math.cos(angle - Math.PI / 7), y_fin - punta_tamanio * Math.sin(angle - Math.PI / 7));
		ctx.lineTo(x_fin - punta_tamanio * Math.cos(angle + Math.PI / 7), y_fin - punta_tamanio * Math.sin(angle + Math.PI / 7));
		ctx.lineTo(x_fin, y_fin);
		ctx.lineTo(x_fin - punta_tamanio * Math.cos(angle - Math.PI / 7), y_fin - punta_tamanio * Math.sin(angle - Math.PI / 7));

		ctx.strokeStyle = color;
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = color;
		ctx.fill();

	}

	/* OBJETOS FIJOS */

	/*
		Funcion dibujar ptrNodo
	*/
	function dibujar_puntero(obj_puntero){

		let inicio_x = obj_puntero.contenedor_principal.x;
		let inicio_y = obj_puntero.contenedor_principal.y;

		let texto_x = inicio_x + 10;
		let texto_y = inicio_y;

		//dibujar contenedor
		ctx.beginPath();
		ctx.lineWidth = obj_puntero.disenio.margen_lineWidth;
		ctx.strokeStyle = obj_puntero.disenio.margen_color;
		ctx.fillStyle = obj_puntero.disenio.relleno_color;
		ctx.rect(obj_puntero.contenedor_principal.x, obj_puntero.contenedor_principal.y, 
			obj_puntero.contenedor_principal.width, obj_puntero.contenedor_principal.height);
		ctx.stroke();
		ctx.fill();

		//dibujar nombre apuntador
		ctx.beginPath();
		ctx.fillStyle = obj_puntero.texto_disenio.color;
		ctx.font = obj_puntero.texto_disenio.font;
		ctx.fillText(obj_puntero.nombre, texto_x, texto_y + 22);

		//dibujar direccion de memoria
		ctx.beginPath();
		ctx.fillStyle = obj_puntero.texto_disenio.direccion_memoria_color;
		ctx.font = obj_puntero.texto_disenio.font_valor;

		let direccion_memoria = null;

		if(obj_puntero.nodo_conectado.key === null){

			direccion_memoria = "NULL";

		}else{

			direccion_memoria = objetos[obj_puntero.nodo_conectado.key].direccion_memoria;

		}

		ctx.fillText(direccion_memoria, texto_x, texto_y + 38);

		//dibujar cuadro de liga
		ctx.beginPath();
		ctx.lineWidth = obj_puntero.disenio.margen_lineWidth;
		ctx.strokeStyle = obj_puntero.disenio.margen_color;
		ctx.fillStyle = obj_puntero.disenio.relleno_color;
		ctx.rect(obj_puntero.ptrLiga.x, obj_puntero.ptrLiga.y, 
			obj_puntero.ptrLiga.width, obj_puntero.ptrLiga.height);
		ctx.stroke();
		ctx.fill();

	}

	function detectar_ptrNodo(obj_puntero, pos_actualX, pos_actualY){

		if(obj_puntero.contenedor_principal.x < pos_actualX
			&& (obj_puntero.contenedor_principal.width + obj_puntero.contenedor_principal.x  > pos_actualX)
			&& obj_puntero.contenedor_principal.y < pos_actualY
			&& (obj_puntero.contenedor_principal.height + obj_puntero.contenedor_principal.y > pos_actualY)){
				return true;	
		}else{
			return false;
		}

	}

	function mover_puntero(obj_puntero, mov_x, mov_y){

		obj_puntero.contenedor_principal.x = obj_puntero.contenedor_principal.x + mov_x;
		obj_puntero.contenedor_principal.y = obj_puntero.contenedor_principal.y + mov_y;

		obj_puntero.ptrLiga.x = obj_puntero.ptrLiga.x + mov_x;
		obj_puntero.ptrLiga.y = obj_puntero.ptrLiga.y + mov_y;

	}

	/*
		Funciones dibujar variables
	*/
	function dibujar_variable(obj){

		let inicio_x = obj.contenedor_principal.x;
		let inicio_y = obj.contenedor_principal.y;

		let texto_x = inicio_x + 10;
		let texto_y = inicio_y;

		//ptrNodoInicio
		ctx.beginPath();
		ctx.lineWidth = obj.disenio.margen_lineWidth;
		ctx.strokeStyle = obj.disenio.margen_color;
		ctx.fillStyle = obj.disenio.relleno_color;
		ctx.rect(obj.contenedor_principal.x, obj.contenedor_principal.y, 
			obj.contenedor_principal.width, obj.contenedor_principal.height);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = obj.texto_disenio.color;
		ctx.font = obj.texto_disenio.font;
		ctx.fillText(obj.nombre, texto_x, texto_y + 22);

		ctx.beginPath();
		ctx.fillStyle = obj.texto_disenio.valor_color;
		ctx.font = obj.texto_disenio.font_valor;
		ctx.fillText(obj.valor, texto_x, texto_y + 38);
		
	}

</script>

@endsection
