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

</style>
@endsection

@section('titulo_h1')

	<h1>Apuntadores</h1>

@endsection

@section('contenido')
<div class="container-fluid">

	<div class="row">
			
		<div id="div_contenedor" class="col-sm-7">

			<div id="div_canvas" class="col-sm-12" style="overflow-x: auto; overflow-y: auto;">

				<canvas id="canvas" width="1500" height="400"></canvas>

			</div>

			<div id="div_acciones" class="col-sm-12">

				<h2>Acciones</h2>

				<button id="btn_iniciar" class="btn btn-primary" type="button"  onclick="iniciar();">Iniciar (Compilar y Ejecutar)</button>
				
				<div id="div_funciones" style="display: none;">
					<button id="btn_crear_nodo" class="btn btn-primary" type="button" onclick="modal_funciones_crear_nodo();">Crear nodo</button>
					<button id="btn_eliminar_nodo" class="btn btn-primary" type="button" onclick="modal_funciones_eliminar_nodo();">Eliminar nodo</button>
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

</div>
@endsection