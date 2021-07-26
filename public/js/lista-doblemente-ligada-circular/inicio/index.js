console.log("funciones inicio");
function crear_tabla_declaracion_variables_globales(){

    ejecutar_funcion = false;

    let tabla = 
        '<table id="tabla_declaraciones">' +
        '<tbody id="tbody_tabla_declaraciones">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        /*
                #include<conio.h>
                #include<iostream>
                using namespace std;
                */
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        '<span class="libreria">#include&#60;conio.h&#62;</span> <br>' +
        '<span class="libreria">#include&#60;iostream&#62;</span> <br>' +
        '<span class="palabra-reservada">using</span> <span class="palabra-reservada">namespace</span> std<span class="simbolo">;</span> <br>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        /*
                void crear_nodo_inicial();
                void insertar_nodo_inicio();
                void insertar_nodo_final();
                void insertar_nodo_antes_de();
                void insertar_nodo_despues_de();
                void eliminar_nodo_inicio();
                void eliminar_nodo_final();
                void eliminar_informacionX();
                void buscar();
                void modificar();
                void imprimir_lista();
                */
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_inicial<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_inicio<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_final<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_antes_de<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_despues_de<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> eliminar_nodo_inicio<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> eliminar_nodo_final<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> eliminar_informacionX<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> buscar<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> modificar<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '<span class="palabra-reservada">void</span> imprimir_lista<span class="simbolo">()</span><span class="simbolo">;</span><br>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        /*
                struct nodo {
                    int dato;
                    struct nodo *ptrNodoSiguiente;
                };
                */
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        '<span class="palabra-reservada">struct</span> nodo <span class="simbolo">{</span> <br>' + 
        '<span style="padding-left: 1em;"><span class="palabra-reservada">int</span> dato<span class="simbolo">;</span></span> <br>' + 
        '<span style="padding-left: 1em;"><span class="palabra-reservada">struct</span> nodo <span class="simbolo">*</span>ptrNodoSiguiente<span class="simbolo">;</span></span> <br>' + 
        '<span style="padding-left: 1em;"><span class="palabra-reservada">struct</span> nodo <span class="simbolo">*</span>ptrNodoAnterior<span class="simbolo">;</span></span> <br>' + 
        '<span class="simbolo">}</span><span class="simbolo">;</span>' + 
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_declaracion_estructura_ejecutar" type="button" class="btn btn-success btn-deshabilitar">Declarar estructura</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_declaracion_estructura_explicacion" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        /*
                nodo *ptrNodoInicio = NULL;
                */
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        'nodo <span class="simbolo">*</span>ptrNodoInicio <span class="simbolo">=</span> NULL<span class="simbolo">;</span> <br>' + 
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_declaracion_ptrNodoInicio_ejecutar" type="button" class="btn btn-success btn-deshabilitar">Declarar puntero</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_declaracion_ptrNodoInicio_explicacion" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        /*
                nodo *ptrNodoFinal = NULL;
                */
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        'nodo <span class="simbolo">*</span>ptrNodoFinal <span class="simbolo">=</span> NULL<span class="simbolo">;</span> <br>' + 
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_declaracion_ptrNodoFinal_ejecutar" type="button" class="btn btn-success btn-deshabilitar">Declarar puntero</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_declaracion_ptrNodoFinal_explicacion" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        /*
                int main(){
                    getch();
                    return 0;
                }
                */
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        '<span class="palabra-reservada">int</span> main<span class="simbolo">()</span><span class="simbolo">{</span></span> <br>' +
        '<span style="padding-left: 1em;">getch<span class="simbolo">()</span><span class="simbolo">;</span></span></span> <br>' +
        '<span style="padding-left: 1em;">return <span class="numero">0</span></span><span class="simbolo">;</span></span></span> <br>' +
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_inicial<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_inicio<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_final<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_antes_de<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> insertar_nodo_despues_de<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> eliminar_nodo_inicio<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> eliminar_nodo_final<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> eliminar_informacionX<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> buscar<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> modificar<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '<span class="palabra-reservada">void</span> imprimir_lista<span class="simbolo">()</span><span class="simbolo">{</span>...<span class="simbolo">}</span><br>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_iniciar").style.display = "none"; 

    document.getElementById("btn_declaracion_estructura_ejecutar").style.display = "block";

    document.getElementById("btn_declaracion_estructura_ejecutar").onclick = function() {
        document.getElementById("btn_declaracion_estructura_ejecutar").style.display = "none";
        document.getElementById("btn_declaracion_ptrNodoInicio_ejecutar").style.display = "block";
    }
    document.getElementById("btn_declaracion_estructura_explicacion").onclick = function() {

        let objExplicacion = {
            "titulo": "Declaración de estructura nodo autoreferenciada global",
            "explicacion": "",
            "imagen_titulo": "Plan de programación 3 - Sintaxis declaración de estructura autoreferenciada",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_3_declaracion_estructura_autoreferenciada.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    document.getElementById("btn_declaracion_ptrNodoInicio_ejecutar").onclick = function() {

        obj_ptrNodoInicio.declarada = true;

        actualizar();

        document.getElementById("btn_declaracion_ptrNodoInicio_ejecutar").style.display = "none";
        document.getElementById("btn_declaracion_ptrNodoFinal_ejecutar").style.display = "block";
    }
    document.getElementById("btn_declaracion_ptrNodoInicio_explicacion").onclick = function() {

        let objExplicacion = {
            "titulo": "Declaración de variable tipo puntero global",
            "explicacion": "Se declara una variable tipo puntero que guardara la dirección de memoria del nodo que esta al inicio de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración de variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    document.getElementById("btn_declaracion_ptrNodoFinal_ejecutar").onclick = function() {

        obj_ptrNodoFinal.declarada = true;

        actualizar();

        document.getElementById("btn_declaracion_ptrNodoFinal_ejecutar").style.display = "none";

        document.getElementById("btn_iniciar").style.display = "none";
        document.getElementById("div_funciones_listas_simplemente_ligadas").style.display = "block";

        empezar = true;

        mostrar_alerta_funcion_terminada();

    }
    document.getElementById("btn_declaracion_ptrNodoFinal_explicacion").onclick = function() {

        let objExplicacion = {
            "titulo": "Declaración de variable tipo puntero global",
            "explicacion": "Se declara una variable tipo puntero que guardara la dirección de memoria del nodo que esta al final de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración de variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

}

/*FUNCIONES INSERTAR NODO*/

console.log("funciones crear nodo");

/*Modal que muestra opciones de crear nodo*/
function modal_funciones_insertar_nodo(){

    if(isEmpty(objetos)){

        document.getElementById("btn_insertar_nodo_inicial").style.display = "block";
        document.getElementById("btn_insertar_nodo_inicio").style.display = "none";
        document.getElementById("btn_insertar_nodo_final").style.display = "none";
        document.getElementById("btn_insertar_antes_de").style.display = "none";
        document.getElementById("btn_insertar_despues_de").style.display = "none";

    }else{

        document.getElementById("btn_insertar_nodo_inicial").style.display = "none";
        document.getElementById("btn_insertar_nodo_inicio").style.display = "block";
        document.getElementById("btn_insertar_nodo_final").style.display = "block";
        document.getElementById("btn_insertar_antes_de").style.display = "block";
        document.getElementById("btn_insertar_despues_de").style.display = "block";

    }

    $('#modal_funciones_crear_nodo').modal('show');

}

function crear_tabla_insertar_nodo_inicial(){

    bloquear_funciones();

    let direccion_memoria_nodo = generarDireccionMemoria();

    while(objetos.hasOwnProperty(direccion_memoria_nodo)){
        direccion_memoria_nodo = generarDireccionMemoria();
    }

    let tabla = 
        '<table id="tabla_insertar_nodo_inicial_' + direccion_memoria_nodo + '">' +
        '<tbody id="tbody_tabla_insertar_nodo_inicial_' + direccion_memoria_nodo + '">' +

        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void crear_nodo_inicial(){
        '<span class="palabra-reservada">void</span> insertar_nodo_inicial<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td></td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_explicacion_1_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoInicio = NULL;
        'ptrNodoInicio <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoFinal = NULL;
        'ptrNodoFinal <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //nodo *ptrNodoNuevo = new nodo;
        'nodo <span class="simbolo">*</span>ptrNodoNuevo <span class="simbolo">=</span> <span class="palabra-reservada">new</span> nodo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_4_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_explicacion_4_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +

        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoSiguiente = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '<br>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoAnterior = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +

        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_explicacion_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //cout<<"Ingrese el dato:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el dato:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //cin>>ptrNodoNuevo->dato;
        'cin<span class="simbolo">&#62;&#62;</span>ptrNodoNuevo<span class="simbolo">-&#62;</span>dato<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +

        '<td>' +
        '<button id="btn_crear_nodo_inicial_explicacion_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +

        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoInicio = ptrNodoNuevo;
        'ptrNodoInicio <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoFinal = ptrNodoNuevo;
        'ptrNodoFinal <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //10 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoFinal
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoFinal<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_explicacion_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //11 //ptrNodoNuevo->ptrNodoAnterior = ptrNodoInicio
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoAnterior = ptrNodoInicio
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_ejecutar_11_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicial_explicacion_11_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        //}
        '<span class="simbolo">}</span>' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_crear_nodo_inicial_ejecutar_2_" + direccion_memoria_nodo).style.display = "block";

    //void crear_nodo_inicial(){
    document.getElementById("btn_crear_nodo_inicial_explicacion_1_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_nodo_inicial()",
            "explicacion": "Función que agrega el primer nodo a una lista simplemente ligada cuando esta se encuentra vacía.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //2 //ptrNodoInicio = NULL;
    document.getElementById("btn_crear_nodo_inicial_ejecutar_2_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicial_ejecutar_2_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoInicio.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_crear_nodo_inicial_ejecutar_3_" + direccion_memoria_nodo).style.display = "block";

    }

    //3 //ptrNodoFinal = NULL;
    document.getElementById("btn_crear_nodo_inicial_ejecutar_3_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicial_ejecutar_3_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoFinal.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_crear_nodo_inicial_ejecutar_4_" + direccion_memoria_nodo).style.display = "block";

    }

    //4 //nodo *ptrNodoNuevo = new nodo;
    document.getElementById("btn_crear_nodo_inicial_ejecutar_4_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicial_ejecutar_4_" + direccion_memoria_nodo).style.display = "none";

        //crear nodo canvas
        let key_objeto = crearNuevoNodo({"direccion_memoria": direccion_memoria_nodo});

        obj_ptrNodoNuevo.declarada = true;
        obj_ptrNodoNuevo.nodo_conectado.key = objetos[key_objeto].key;

        actualizar();

        document.getElementById("btn_crear_nodo_inicial_ejecutar_5_" + direccion_memoria_nodo).style.display = "block";

    }
    //4
    document.getElementById("btn_crear_nodo_inicial_explicacion_4_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea un nuevo nodo de forma dinámica usando el operador new.",
            "imagen_titulo": "Plan de programación 4 - Sintaxis operador new",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_4_operador_new.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //5 //ptrNodoNuevo->ptrNodoSiguiente = NULL;
    //ptrNodoNuevo->ptrNodoAnterior = NULL
    document.getElementById("btn_crear_nodo_inicial_ejecutar_5_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicial_ejecutar_5_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = null;

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.key = null;

        actualizar();

        document.getElementById("btn_crear_nodo_inicial_ejecutar_7_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_crear_nodo_inicial_explicacion_5_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se inicializa el miembro ptrNodoSiguiente y ptrNodoAnterior del nuevo nodo en NULL. Ya que aun no se indica cual es el nodo que sigue del nuevo nodo.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //7 //cin>>ptrNodoNuevo->dato;
    document.getElementById("btn_crear_nodo_inicial_ejecutar_7_" + direccion_memoria_nodo).onclick = function() {

        $('#modal_dato_nodo').modal('show');

        document.getElementById("btn_modal_dato_nodo_aceptar").onclick = function() {

            $('#modal_dato_nodo').modal('hide');

            let dato = document.getElementById("input_dato").value;

            document.getElementById("input_dato").value = "";

            if(validar_numero(dato)){

                document.getElementById("btn_crear_nodo_inicial_ejecutar_7_" + direccion_memoria_nodo).style.display = "none";

                objetos[obj_ptrNodoNuevo.nodo_conectado.key].dato.valor = Number(dato);

                actualizar();

                document.getElementById("btn_crear_nodo_inicial_ejecutar_8_" + direccion_memoria_nodo).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }
        }

    }

    //7 
    document.getElementById("btn_crear_nodo_inicial_explicacion_7_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se guarda en el miembro dato del nuevo nodo el valor que el usuario ingrese por medio de la consola.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //8 //ptrNodoInicio = ptrNodoNuevo;
    document.getElementById("btn_crear_nodo_inicial_ejecutar_8_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicial_ejecutar_8_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoInicio.nodo_conectado.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key;

        actualizar();

        document.getElementById("btn_crear_nodo_inicial_ejecutar_9_" + direccion_memoria_nodo).style.display = "block";

    }

    //9 //ptrNodoFinal = ptrNodoNuevo;
    document.getElementById("btn_crear_nodo_inicial_ejecutar_9_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_inicial_ejecutar_9_" + direccion_memoria_nodo).style.display = "none";
        obj_ptrNodoFinal.nodo_conectado.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key;
        actualizar();
        document.getElementById("btn_crear_nodo_inicial_ejecutar_10_" + direccion_memoria_nodo).style.display = "block";

    }

    // 10 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoFinal
    document.getElementById("btn_crear_nodo_inicial_ejecutar_10_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_inicial_ejecutar_10_" + direccion_memoria_nodo).style.display = "none";
        // objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        actualizar();
        document.getElementById("btn_crear_nodo_inicial_ejecutar_11_" + direccion_memoria_nodo).style.display = "block";
    }
    // 10
    document.getElementById("btn_crear_nodo_inicial_explicacion_10_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Al miembro ptrNodoSiguiente se le asigna el ptrNodoFinal ya que es el nodo siguiente al nuevo nodo",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }

    // 11 //ptrNodoNuevo->ptrNodoAnterior = ptrNodoInicio
    document.getElementById("btn_crear_nodo_inicial_ejecutar_11_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_inicial_ejecutar_11_" + direccion_memoria_nodo).style.display = "none";
        // objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.key = obj_ptrNodoFinal.nodo_conectado.key;
        // fin de la función
        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = null;
        actualizar();
        desbloquear_funciones();
        mostrar_alerta_funcion_terminada();
    }
    //7 
    document.getElementById("btn_crear_nodo_inicial_explicacion_11_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Al miembro ptrNodoAnterior se asigna el ptrNodoInicio ya que es el nodo anterior al nuevo nodo",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //}

}

function crear_tabla_insertar_nodo_inicio(){

    bloquear_funciones();

    let direccion_memoria_nodo = generarDireccionMemoria();

    while(objetos.hasOwnProperty(direccion_memoria_nodo)){
        direccion_memoria_nodo = generarDireccionMemoria();
    }

    let tabla = 
        '<table id="tabla_insertar_nodo_inicio_' + direccion_memoria_nodo + '">' +
        '<tbody id="tbody_tabla_insertar_nodo_inicio_' + direccion_memoria_nodo + '">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void insertar_inicio(){
        '<span class="palabra-reservada">void</span> insertar_nodo_inicio<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td></td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_1_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //nodo *ptrNodoNuevo = new nodo;
        'nodo <span class="simbolo">*</span>ptrNodoNuevo <span class="simbolo">=</span> <span class="palabra-reservada">new</span> nodo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +

        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoSiguiente = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +

        '<br>' +

        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoAnterior = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +

        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //cout<<"Ingrese el dato:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el dato:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //cin>>ptrNodoNuevo->dato;
        'cin<span class="simbolo">&#62;&#62;</span>ptrNodoNuevo<span class="simbolo">-&#62;</span>dato<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_6_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_6_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoAnterior = ptrNodoFinal;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> ptrNodoFinal<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoInicio->ptrNodoAnterior = ptrNodoNuevo;
        'ptrNodoInicio<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoInicio = ptrNodoNuevo;
        'ptrNodoInicio <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio
        'ptrNodoFinal<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_ejecutar_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_inicio_explicacion_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span class="simbolo">}</span>' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_crear_nodo_inicio_ejecutar_2_" + direccion_memoria_nodo).style.display = "block";

    //1 //void insertar_inicio(){
    document.getElementById("btn_crear_nodo_inicio_explicacion_1_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_nodo_inicio()",
            "explicacion": "Función que agrega un nuevo nodo al inicio de la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //2 //nodo *ptrNodoNuevo = new nodo;
    document.getElementById("btn_crear_nodo_inicio_ejecutar_2_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicio_ejecutar_2_" + direccion_memoria_nodo).style.display = "none";

        //crear nodo canvas
        let key_objeto = crearNuevoNodo({"direccion_memoria": direccion_memoria_nodo});		

        obj_ptrNodoNuevo.declarada = true;
        obj_ptrNodoNuevo.nodo_conectado.key = objetos[key_objeto].key;

        actualizar();

        document.getElementById("btn_crear_nodo_inicio_ejecutar_3_" + direccion_memoria_nodo).style.display = "block";

    }
    //2 
    document.getElementById("btn_crear_nodo_inicio_explicacion_2_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea un nuevo nodo de forma dinámica usando el operador new.",
            "imagen_titulo": "Plan de programación 4 - Sintaxis operador new",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_4_operador_new.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //3 //ptrNodoNuevo->ptrNodoSiguiente = NULL;
    document.getElementById("btn_crear_nodo_inicio_ejecutar_3_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicio_ejecutar_3_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = null;

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.key = null;

        actualizar();

        document.getElementById("btn_crear_nodo_inicio_ejecutar_5_" + direccion_memoria_nodo).style.display = "block";

    }
    //3
    document.getElementById("btn_crear_nodo_inicio_explicacion_3_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se inicializa el miembro ptrNodoSiguiente y ptrNodoAnterior del nuevo nodo en NULL. Ya que aun no se indica cual es el nodo que sigue del nuevo nodo.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //5 //cin>>ptrNodoNuevo->dato;
    document.getElementById("btn_crear_nodo_inicio_ejecutar_5_" + direccion_memoria_nodo).onclick = function() {

        $('#modal_dato_nodo').modal('show');

        document.getElementById("btn_modal_dato_nodo_aceptar").onclick = function() {

            $('#modal_dato_nodo').modal('hide');

            let dato = document.getElementById("input_dato").value;

            document.getElementById("input_dato").value = "";

            if(validar_numero(dato)){

                document.getElementById("btn_crear_nodo_inicio_ejecutar_5_" + direccion_memoria_nodo).style.display = "none";

                objetos[obj_ptrNodoNuevo.nodo_conectado.key].dato.valor = Number(dato);
                actualizar();

                document.getElementById("btn_crear_nodo_inicio_ejecutar_6_" + direccion_memoria_nodo).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    //5 
    document.getElementById("btn_crear_nodo_inicio_explicacion_5_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se guarda en el miembro dato del nuevo nodo el valor que el usuario ingrese por medio de la consola.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //6 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio;
    document.getElementById("btn_crear_nodo_inicio_ejecutar_6_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_inicio_ejecutar_6_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_crear_nodo_inicio_ejecutar_9_" + direccion_memoria_nodo).style.display = "block";

    }
    //6 
    document.getElementById("btn_crear_nodo_inicio_explicacion_6_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nuevo nodo debe de apuntar a la dirección de memoria del nodo que actualmente está al inicio de la lista.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    // 9 //ptrNodoNuevo->ptrNodoAnterior = ptrNodoFinal
    document.getElementById("btn_crear_nodo_inicio_ejecutar_9_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_inicio_ejecutar_9_" + direccion_memoria_nodo).style.display = "none";
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.key = obj_ptrNodoFinal.nodo_conectado.key;
        actualizar();
        document.getElementById("btn_crear_nodo_inicio_ejecutar_10_" + direccion_memoria_nodo).style.display = "block";
    }
    //9
    document.getElementById("btn_crear_nodo_inicio_explicacion_9_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El ptrNodoAnterior del nodo nuevo va apuntar al nodo final porque el nuevo nodo será el nodo de inicio",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }

    // 10 //ptrNodoInicio->ptrNodoAnterior = ptrNodoNuevo
    document.getElementById("btn_crear_nodo_inicio_ejecutar_10_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_inicio_ejecutar_10_" + direccion_memoria_nodo).style.display = "none";
        objetos[obj_ptrNodoInicio.nodo_conectado.key].ptrLigaAnt.key = obj_ptrNodoNuevo.nodo_conectado.key;
        actualizar();
        document.getElementById("btn_crear_nodo_inicio_ejecutar_7_" + direccion_memoria_nodo).style.display = "block";
    }
    //10
    document.getElementById("btn_crear_nodo_inicio_explicacion_10_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El ptrNodoAnterior del nodo de inicio va a apuntar al nuevo nodo, porque el nuevo nodo será el nodo de inicio",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }


    //7 //ptrNodoInicio = ptrNodoNuevo;
    document.getElementById("btn_crear_nodo_inicio_ejecutar_7_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_inicio_ejecutar_7_" + direccion_memoria_nodo).style.display = "none";
        obj_ptrNodoInicio.nodo_conectado.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key;
        document.getElementById("btn_crear_nodo_inicio_ejecutar_8_" + direccion_memoria_nodo).style.display = "block";
        //fin de la función
        actualizar();
    }
    //7 
    document.getElementById("btn_crear_nodo_inicio_explicacion_7_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El ptrNodoInicio debe de apuntar a la dirección de memoria del nuevo nodo, para que dicho nodo sea el nuevo nodo que esta al inicio de la lista.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }

    // 8 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio
    document.getElementById("btn_crear_nodo_inicio_ejecutar_8_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_inicio_ejecutar_8_" + direccion_memoria_nodo).style.display = "none";
        objetos[obj_ptrNodoFinal.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        //fin de la función
        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = null;
        actualizar();
        desbloquear_funciones();
        mostrar_alerta_funcion_terminada();
    }
    //8
    document.getElementById("btn_crear_nodo_inicio_explicacion_8_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El ptrNodoSiguiente del nodo final siempre deba apuntar al nodo de inicio, y esto tambien cuando se  agrega nuevo nodo al principio. Así mantenemos \
            la lista como una lista circular",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //}

}

function crear_tabla_insertar_nodo_final(){

    bloquear_funciones();

    let direccion_memoria_nodo = generarDireccionMemoria();

    while(objetos.hasOwnProperty(direccion_memoria_nodo)){
        direccion_memoria_nodo = generarDireccionMemoria();
    }

    let tabla = 
        '<table id="tabla_insertar_nodo_final_' + direccion_memoria_nodo + '">' +
        '<tbody id="tbody_tabla_insertar_nodo_final_' + direccion_memoria_nodo + '">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void insertar_final(){
        '<span class="palabra-reservada">void</span> insertar_nodo_final<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td></td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_1_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //nodo *ptrNodoNuevo = new nodo;
        'nodo <span class="simbolo">*</span>ptrNodoNuevo <span class="simbolo">=</span> <span class="palabra-reservada">new</span> nodo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +

        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoSiguiente = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +

        '<br>' +

        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoAnterior = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +

        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //cout<<"Ingrese el dato:\n";
        'cout<span class="simbolo"><<</span><span class="impresion">"Ingrese el dato:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //cin>>ptrNodoNuevo->dato;
        'cin<span class="simbolo">&#62;&#62;</span>ptrNodoNuevo<span class="simbolo">-&#62;</span>dato<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoFinal->ptrNodoSiguiente = ptrNodoNuevo;
        'ptrNodoFinal<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_6_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_6_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoAnterior = ptrNodoFinal
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> ptrNodoFinal<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoFinal = ptrNodoNuevo;
        'ptrNodoFinal <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span> ptrNodoSiguiente<span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //ptrNodoInicio->ptrNodoAnterior = ptrNodoFinal
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //ptrNodoInicio->ptrNodoAnterior = ptrNodoFinal
        'ptrNodoInicio<span class="simbolo">-&#62;</span> ptrNodoAnterior<span class="simbolo">=</span> ptrNodoFinal<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_ejecutar_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_crear_nodo_final_explicacion_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        //}
        '<span class="simbolo">}</span>' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_crear_nodo_final_ejecutar_2_" + direccion_memoria_nodo).style.display = "block";

    //1 //void insertar_final(){
    document.getElementById("btn_crear_nodo_final_explicacion_1_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_nodo_final()",
            "explicacion": "Función que agrega un nuevo nodo al final de la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }


    //2 //nodo *ptrNodoNuevo = new nodo;
    document.getElementById("btn_crear_nodo_final_ejecutar_2_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_final_ejecutar_2_" + direccion_memoria_nodo).style.display = "none";

        //crear nodo canvas
        let key_objeto = crearNuevoNodo({"direccion_memoria": direccion_memoria_nodo});

        obj_ptrNodoNuevo.declarada = true;
        obj_ptrNodoNuevo.nodo_conectado.key = objetos[key_objeto].key;

        actualizar();

        document.getElementById("btn_crear_nodo_final_ejecutar_3_" + direccion_memoria_nodo).style.display = "block";

    }
    //2
    document.getElementById("btn_crear_nodo_final_explicacion_2_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea un nuevo nodo de forma dinámica usando el operador new.",
            "imagen_titulo": "Plan de programación 4 - Sintaxis operador new",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_4_operador_new.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //3 //ptrNodoNuevo->ptrNodoSiguiente = NULL;
    document.getElementById("btn_crear_nodo_final_ejecutar_3_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_crear_nodo_final_ejecutar_3_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = null;

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.key = null;

        actualizar();

        document.getElementById("btn_crear_nodo_final_ejecutar_5_" + direccion_memoria_nodo).style.display = "block";

    }
    //3
    document.getElementById("btn_crear_nodo_final_explicacion_3_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se inicializan los miembros ptrNodoSiguiente y ptrNodoAnterior del nuevo nodo en NULL. Ya que aun no se indica cual es el nodo que sigue y el que le precede del nuevo nodo.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //5 //cin>>ptrNodoNuevo->dato;
    document.getElementById("btn_crear_nodo_final_ejecutar_5_" + direccion_memoria_nodo).onclick = function() {

        $('#modal_dato_nodo').modal('show');

        document.getElementById("btn_modal_dato_nodo_aceptar").onclick = function() {

            $('#modal_dato_nodo').modal('hide');

            let dato = document.getElementById("input_dato").value;

            document.getElementById("input_dato").value = "";

            if(validar_numero(dato)){

                document.getElementById("btn_crear_nodo_final_ejecutar_5_" + direccion_memoria_nodo).style.display = "none";

                objetos[obj_ptrNodoNuevo.nodo_conectado.key].dato.valor = Number(dato);
                actualizar();

                document.getElementById("btn_crear_nodo_final_ejecutar_6_" + direccion_memoria_nodo).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    //5
    document.getElementById("btn_crear_nodo_final_explicacion_5_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se guarda en el miembro dato del nuevo nodo el valor que el usuario ingrese por medio de la consola.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //6 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoNuevo;
    document.getElementById("btn_crear_nodo_final_ejecutar_6_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_final_ejecutar_6_" + direccion_memoria_nodo).style.display = "none";
        objetos[obj_ptrNodoFinal.nodo_conectado.key].ptrLigaSig.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key;
        actualizar();
        document.getElementById("btn_crear_nodo_final_ejecutar_9_" + direccion_memoria_nodo).style.display = "block";
    }
    //6 
    document.getElementById("btn_crear_nodo_final_explicacion_6_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nodo que actualmente es el nodo final de la lista, debe de apuntar a la dirección de memoria del nuevo nodo.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //9 //ptrNodoNuevo->ptrNodoAnterior = ptrNodoFinal
    document.getElementById("btn_crear_nodo_final_ejecutar_9_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_final_ejecutar_9_" + direccion_memoria_nodo).style.display = "none";
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaAnt.key = obj_ptrNodoFinal.nodo_conectado.key;
        actualizar();
        document.getElementById("btn_crear_nodo_final_ejecutar_7_" + direccion_memoria_nodo).style.display = "block";
    }
    //9 
    document.getElementById("btn_crear_nodo_final_explicacion_6_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoAnterior del nodo que será el nuevo nodo final de la lista, debe apuntar a la dirección de memoria del actual nodo final",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //7 //ptrNodoFinal = ptrNodoNuevo;
    document.getElementById("btn_crear_nodo_final_ejecutar_7_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_final_ejecutar_7_" + direccion_memoria_nodo).style.display = "none";
        obj_ptrNodoFinal.nodo_conectado.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key;
        actualizar();
        document.getElementById("btn_crear_nodo_final_ejecutar_8_" + direccion_memoria_nodo).style.display = "block";
    }
    //7
    document.getElementById("btn_crear_nodo_final_explicacion_7_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nodo que actualmente es el nodo final de la lista, debe de apuntar a la dirección de memoria del nuevo nodo.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");
    }


    //8 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio;
    document.getElementById("btn_crear_nodo_final_ejecutar_8_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_final_ejecutar_8_" + direccion_memoria_nodo).style.display = "none";
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        actualizar();
        document.getElementById("btn_crear_nodo_final_ejecutar_10_" + direccion_memoria_nodo).style.display = "block";

    }
    //8
    document.getElementById("btn_crear_nodo_final_explicacion_8_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nodo nuevo debe apuntar al nodo del principio. Como el nodo nuevo se volverá el final de la lista \
            el siguiente del nodo nuevo es el nodo inicio, y mantener la lista como una lista circular.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //10 //ptrNodoInicio->ptrNodoAnterior = ptrNodoFinal
    document.getElementById("btn_crear_nodo_final_ejecutar_10_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_crear_nodo_final_ejecutar_10_" + direccion_memoria_nodo).style.display = "none";
        objetos[obj_ptrNodoInicio.nodo_conectado.key].ptrLigaAnt.key = obj_ptrNodoFinal.nodo_conectado.key;
        
        //fin de la función
        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = null;
        actualizar();
        desbloquear_funciones();
        mostrar_alerta_funcion_terminada();
    }
    //10
    document.getElementById("btn_crear_nodo_final_explicacion_10_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoAnterior del nodo de inicio debe apuntar al nuevo nodo final",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "none");
    }
    //}

}	

function crear_tabla_insertar_nodo_antes_de(){

    bloquear_funciones();

    let direccion_memoria_nodo = generarDireccionMemoria();

    while(objetos.hasOwnProperty(direccion_memoria_nodo)){
        direccion_memoria_nodo = generarDireccionMemoria();
    }

    let tabla = 
        '<table id="tabla_insertar_nodo_antes_de_' + direccion_memoria_nodo + '">' +
        '<tbody id="tbody_tabla_insertar_nodo_antes_de_' + direccion_memoria_nodo + '">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //1 //void insertar_antes_de(){
        '<span class="palabra-reservada">void</span> insertar_antes_de<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_1_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //2 //nodo *ptrNodoAnterior = NULL;
        'nodo <span class="simbolo">*</span>ptrNodoAnterior <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //3 //nodo *ptrNodoActual = ptrNodoInicio;
        'nodo <span class="simbolo">*</span>ptrNodoActual <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //4 //bool encontrado = true;
        '<span class="palabra-reservada">bool</span> encontrado <span class="simbolo">=</span> <span class="palabra-reservada">true</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_4_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_4_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //5 //int busqueda;
        '<span class="palabra-reservada">int</span> busqueda <span class="simbolo">=</span> <span class="numero">0</span><span class="simbolo">;</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_5_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //6 //cout<<"Ingrese el número a buscar:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el número a buscar:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //7 //cin>>busqueda;
        'cin<span class="simbolo">&#62;&#62;</span>busqueda<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //8 //while(ptrNodoActual->dato != busqueda && encontrado){
        '<span class="palabra-reservada">while</span><span class="simbolo">(</span>ptrNodoActual<span class="simbolo">-&#62;</span>dato <span class="simbolo">!=</span> busqueda <span class="simbolo">&#38;&#38;</span> encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //9 //if(ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">!=</span> ptrNodoInicio<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //10 //ptrNodoAnterior = ptrNodoActual;
        'ptrNodoAnterior <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //11 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        'ptrNodoActual <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_11_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_11_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //13 //encontrado = false;
        'encontrado <span class="simbolo">=</span> <span class="palabra-reservada">false</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_13_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //16 //if(encontrado){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_16_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_16_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //17 //nodo *ptrNodoNuevo = new nodo;
        'nodo <span class="simbolo">*</span>ptrNodoNuevo <span class="simbolo">=</span> <span class="palabra-reservada">new</span> nodo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_17_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_17_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //18 //ptrNodoNuevo->ptrNodoSiguiente = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_18_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_18_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //19 //cout<<"Ingrese el dato:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el dato:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //20 //cin>>ptrNodoNuevo->dato;
        'cin<span class="simbolo">&#62;&#62;</span>ptrNodoNuevo<span class="simbolo">-&#62;</span>dato<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_20_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_20_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //21 //if (ptrNodoInicio == ptrNodoActual){
        '<span class="palabra-reservada">if</span> <span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">==</span> ptrNodoActual<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_21_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_21_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //22 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_22_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_22_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //23 //ptrNodoInicio = ptrNodoNuevo;
        'ptrNodoInicio <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_23_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_23_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //31 //ptrNodoFinal -> ptrNodoSiguiente = ptrNodoInicio
        'ptrNodoFinal <span class="simbolo">-&#62;</span> ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_31_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_31_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //25 //ptrNodoAnterior->ptrNodoSiguiente = ptrNodoNuevo;
        'ptrNodoAnterior<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_25_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_25_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //26 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoActual;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_26_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_explicacion_26_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //29 //cout<<"El nodo dado como referencia no se encuentra en la lista.\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"El nodo dado como referencia no se encuentra en la lista.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_29_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //30 //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_antes_de_ejecutar_30_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_2_" + direccion_memoria_nodo).style.display = "block";

    //1 //void insertar_antes_de(){
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_1_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_antes_de()",
            "explicacion": "Función que agrega un nuevo nodo antes de un nodo dado como referencia que se encuentra en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //2 //nodo *ptrNodoAnterior = NULL;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_2_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_2_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoAnterior.declarada = true;
        obj_ptrNodoAnterior.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_3_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_2_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea una nueva variable de tipo puntero que ira apuntando a la dirección de memoria del nodo anterior al que esta siendo apuntando por el puntero ptrNodoActual.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //3 //nodo *ptrNodoActual = ptrNodoInicio;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_3_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_3_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoActual.declarada = true;
        obj_ptrNodoActual.nodo_conectado.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_4_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_3_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea una nueva variable de tipo puntero, la cual servirá para ir apuntando a la dirección de cada nodo de la lista y así recorrer la lista simplemente ligada, aparte de indicar la dirección de memoria del primer nodo encontrado cuyo valor en su miembro dato sea igual al valor buscado.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //4 //bool encontrado = true;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_4_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_4_" + direccion_memoria_nodo).style.display = "none";

        obj_var_encontrado.declarada = true;
        obj_var_encontrado.valor = true;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_5_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_4_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Variable tipo bool que indicara si el nodo dado como referencia se encuentra en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //5 //int busqueda;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_5_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_5_" + direccion_memoria_nodo).style.display = "none";

        obj_var_busqueda.declarada = true;
        obj_var_busqueda.valor = 0;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_7_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_5_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Variable tipo int que guardará el valor a buscar en la lista simplemente ligada, para indicar cual es el nodo dado como referencia.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //6 //cout<<"Ingrese el número a buscar:\n";

    //7 //cin>>busqueda;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_7_" + direccion_memoria_nodo).onclick = function() {

        $('#modal_dato_busqueda').modal('show');

        document.getElementById("btn_modal_dato_busqueda_aceptar").onclick = function() {

            $('#modal_dato_busqueda').modal('hide');

            obj_var_busqueda.valor = document.getElementById("input_dato_busqueda").value;

            document.getElementById("input_dato_busqueda").value = "";

            if(validar_numero(obj_var_busqueda.valor)){

                document.getElementById("btn_insertar_nodo_antes_de_ejecutar_7_" + direccion_memoria_nodo).style.display = "none";

                actualizar();

                document.getElementById("btn_insertar_nodo_antes_de_ejecutar_8_" + direccion_memoria_nodo).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_7_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se lee el valor a buscar en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //8 //while(ptrNodoActual->dato != busqueda && encontrado){
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_8_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_8_" + direccion_memoria_nodo).style.display = "none";

        if(objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor != obj_var_busqueda.valor && obj_var_encontrado.valor){
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_9_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_16_" + direccion_memoria_nodo).style.display = "block";
        }

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_8_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Ciclo While con el que se recorrerá la lista mientras el valor guardado en el miembro dato del nodo al que apunta ptrNodoActual sea diferente al valor buscado y encontrado sea verdadero.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //9 //if(ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_9_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_9_" + direccion_memoria_nodo).style.display = "none";

        if(objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key != obj_ptrNodoInicio.nodo_conectado.key){
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_10_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_13_" + direccion_memoria_nodo).style.display = "block";
        }

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_9_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si ptrNodoActual no está apuntando al último nodo de la lista simplemente ligada. En caso de ser verdad, se sigue con el recorrido de la lista simplemente ligada, en caso de ser negativo, el puntero ptrNodoActual se encuentra en el último nodo de la lista por lo que la variable encontrado pasara a false.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //10 //ptrNodoAnterior = ptrNodoActual;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_10_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_10_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoAnterior.nodo_conectado.key = obj_ptrNodoActual.nodo_conectado.key;	

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_11_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_10_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Al puntero ptrNodoAnterior se le asigna la dirección de memoria a la que apunta actualmente el puntero ptrNodoActual.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //11 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_11_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_11_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoActual.nodo_conectado.key = objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_8_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_11_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se accede al miembro ptrNodoSiguiente del nodo al que apunta actualmente el puntero ptrNodoActual para obtener la dirección de memoria del siguiente nodo y está será la nueva dirección de memoria a la que apunta ptrNodoActual .",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}else{

    //13 //encontrado = false;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_13_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_13_" + direccion_memoria_nodo).style.display = "none";

        obj_var_encontrado.valor = false;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_8_" + direccion_memoria_nodo).style.display = "block";

    }

    //}

    //}

    //16 //if(encontrado){
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_16_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_16_" + direccion_memoria_nodo).style.display = "none";

        if(obj_var_encontrado.valor){
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_17_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_29_" + direccion_memoria_nodo).style.display = "block";
        }

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_16_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si fue encontrado un nodo en el que su miembro dato es igual al valor buscado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //17 //nodo *ptrNodoNuevo = new nodo;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_17_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_17_" + direccion_memoria_nodo).style.display = "none";

        //crear nodo canvas
        let key_objeto = crearNuevoNodo({"direccion_memoria": direccion_memoria_nodo});

        obj_ptrNodoNuevo.declarada = true;
        obj_ptrNodoNuevo.nodo_conectado.key = objetos[key_objeto].key;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_18_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_17_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea un nuevo nodo de forma dinámica usando el operador new.",
            "imagen_titulo": "Plan de programación 4 - Sintaxis operador new",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_4_operador_new.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //18 //ptrNodoNuevo->ptrNodoSiguiente = NULL;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_18_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_18_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = null;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_20_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_18_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se inicializa el miembro ptrNodoSiguiente del nuevo nodo en NULL. Ya que aun no se indica cual es el nodo que sigue del nuevo nodo.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //19 //cout<<"Ingrese el dato:\n";

    //20 //cin>>ptrNodoNuevo->dato;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_20_" + direccion_memoria_nodo).onclick = function() {

        $('#modal_dato_nodo').modal('show');

        document.getElementById("btn_modal_dato_nodo_aceptar").onclick = function() {

            $('#modal_dato_nodo').modal('hide');

            let dato = document.getElementById("input_dato").value;

            document.getElementById("input_dato").value = "";

            if(validar_numero(dato)){

                objetos[obj_ptrNodoNuevo.nodo_conectado.key].dato.valor = Number(dato);
                actualizar();

                document.getElementById("btn_insertar_nodo_antes_de_ejecutar_20_" + direccion_memoria_nodo).style.display = "none";
                document.getElementById("btn_insertar_nodo_antes_de_ejecutar_21_" + direccion_memoria_nodo).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_20_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se guarda en el miembro dato del nuevo nodo el valor que el usuario ingrese por medio de la consola.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //21 //if (ptrNodoInicio == ptrNodoActual){
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_21_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_21_" + direccion_memoria_nodo).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key == obj_ptrNodoActual.nodo_conectado.key){
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_22_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_antes_de_ejecutar_25_" + direccion_memoria_nodo).style.display = "block";
        }

    }	
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_21_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que el nodo al que apunta el puntero ptrNodoActual es el mismo nodo al que apunta el puntero ptrNodoInicio, se realiza esto para verificar si el nuevo nodo será el nuevo nodo que estará al inicio de la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //22 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoInicio;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_22_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_22_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_23_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_22_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se asigna la dirección de memoria del que es actualmente el primer nodo de la lista al miembro ptrNodoSiguiente del nuevo nodo creado.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //23 //ptrNodoInicio = ptrNodoNuevo;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_23_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_23_" + direccion_memoria_nodo).style.display = "none";
        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_31_" + direccion_memoria_nodo).style.display = "block";

        obj_ptrNodoInicio.nodo_conectado.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key
        actualizar();

    }

    document.getElementById("btn_insertar_nodo_antes_de_explicacion_23_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El puntero ptrNodoInicio debe de apuntar a la dirección de memoria del nuevo nodo, para que dicho nodo sea el nuevo nodo que esta al inicio de la lista.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //31 ptrNodoFinal -> ptrNodoSiguiente = ptrNodoInicio
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_31_" + direccion_memoria_nodo).onclick = function() {


        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_31_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoFinal.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = false;

        obj_ptrNodoAnterior.declarada = false;
        obj_ptrNodoAnterior.nodo_conectado.key = false;

        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = false;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = true;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;
        actualizar();

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    document.getElementById("btn_insertar_nodo_antes_de_explicacion_31_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El ptrNodoSiguiente del nodo final siempre deba apuntar al nodo de inicio, y esto tambien cuando se  agrega nuevo nodo al principio. Así mantenemos \
            la lista como una lista circular",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "none");
    }

    //}else{

    //25 //ptrNodoAnterior->ptrNodoSiguiente = ptrNodoNuevo;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_25_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_25_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoAnterior.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoNuevo.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_26_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_25_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nodo al que apunta el puntero ptrNodoAnterior debe de apuntar a la dirección de memoria del nuevo nodo, ya que el nuevo nodo se insertará entre el nodo al que apunta el nodo ptrNodoAnterior y nodo al que apunta el puntero ptrNodoActual (dirección de memoria del primer nodo encontrado, cuyo valor en su miembro dato contiene el valor buscado).",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //26 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoActual;
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_26_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_26_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoActual.nodo_conectado.key;

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = false;

        obj_ptrNodoAnterior.declarada = false;
        obj_ptrNodoAnterior.nodo_conectado.key = false;

        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = false;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = true;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        actualizar();

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }
    document.getElementById("btn_insertar_nodo_antes_de_explicacion_26_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nuevo nodo debe de apuntar a la dirección de memoria del nodo actual (dirección de memoria del primer nodo encontrado cuyo valor en su miembro dato es igual al valor buscado).",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}

    //}else{

    //29 //cout<<"El nodo dado como referencia no se encuentra en la lista.\n";
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_29_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_29_" + direccion_memoria_nodo).style.display = "none";

        alert("El nodo dado como referencia no se encuentra en la lista.");

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_30_" + direccion_memoria_nodo).style.display = "block";

    }

    //30 //getch();
    document.getElementById("btn_insertar_nodo_antes_de_ejecutar_30_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_antes_de_ejecutar_30_" + direccion_memoria_nodo).style.display = "none";

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = false;

        obj_ptrNodoAnterior.declarada = false;
        obj_ptrNodoAnterior.nodo_conectado.key = false;

        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = false;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = true;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        actualizar();

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    //}

    //}	


}

function crear_tabla_insertar_nodo_despues_de(){

    bloquear_funciones();

    let direccion_memoria_nodo = generarDireccionMemoria();

    while(objetos.hasOwnProperty(direccion_memoria_nodo)){
        direccion_memoria_nodo = generarDireccionMemoria();
    }

    let tabla = 
        '<table id="tabla_insertar_nodo_despues_de_' + direccion_memoria_nodo + '">' +
        '<tbody id="tbody_tabla_insertar_nodo_despues_de_' + direccion_memoria_nodo + '">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //1 //void insertar_despues_de(){
        '<span class="palabra-reservada">void</span> insertar_despues_de<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_1_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //2 //nodo *ptrNodoActual = ptrNodoInicio;
        'nodo <span class="simbolo">*</span>ptrNodoActual <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_2_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //3 //bool encontrado = true;
        '<span class="palabra-reservada">bool</span> encontrado <span class="simbolo">=</span> <span class="palabra-reservada">true</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_3_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //4 //int busqueda;
        '<span class="palabra-reservada">int</span> busqueda <span class="simbolo">=</span> <span class="numero">0</span><span class="simbolo">;</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_4_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_4_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //5 //cout<<"Ingrese el número a buscar:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el número a buscar:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //6 //cin>>busqueda;
        'cin<span class="simbolo">&#62;&#62;</span>busqueda<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_6_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_6_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //7 //while(ptrNodoActual->dato != busqueda && encontrado){
        '<span class="palabra-reservada">while</span><span class="simbolo">(</span>ptrNodoActual<span class="simbolo">-&#62;</span>dato <span class="simbolo">!=</span> busqueda <span class="simbolo">&#38;&#38;</span> encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_7_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //8 //if(ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">!=</span> ptrNodoInicio<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_8_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //9 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        'ptrNodoActual <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_9_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //10 //encontrado = false;
        'encontrado <span class="simbolo">=</span> <span class="palabra-reservada">false</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_10_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //11 //if(encontrado){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_11_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_11_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //12 //nodo *ptrNodoNuevo = new nodo;
        'nodo <span class="simbolo">*</span>ptrNodoNuevo <span class="simbolo">=</span> <span class="palabra-reservada">new</span> nodo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_12_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_12_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //13 //ptrNodoNuevo->ptrNodoSiguiente = NULL;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_13_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_13_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //14 //cout<<"Ingrese el dato:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el dato:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //15 //cin>>ptrNodoNuevo->dato;
        'cin<span class="simbolo">&#62;&#62;</span>ptrNodoNuevo<span class="simbolo">-&#62;</span>dato<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_15_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_15_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //16 //if (ptrNodoFinal == ptrNodoActual){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoFinal <span class="simbolo">==</span> ptrNodoActual<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_16_' + direccion_memoria_nodo + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_16_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //17 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoNuevo;
        'ptrNodoFinal<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_17_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_17_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //18 //ptrNodoFinal = ptrNodoNuevo;
        'ptrNodoFinal <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_18_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_18_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //23 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio;
        'ptrNodoFinal <span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_23_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_23_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //19 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoActual->ptrNodoSiguiente;
        'ptrNodoNuevo<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente;' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_19_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_19_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //20 //ptrNodoActual->ptrNodoSiguiente = ptrNodoNuevo;
        'ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoNuevo<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_20_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_explicacion_20_' + direccion_memoria_nodo + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //21 //cout<<"El nodo dado como referencia no se encuentra en la lista.\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"El nodo dado como referencia no se encuentra en la lista.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_21_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //22 //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_insertar_nodo_despues_de_ejecutar_22_' + direccion_memoria_nodo + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_2_" + direccion_memoria_nodo).style.display = "block";

    //1 //void insertar_despues_de(){
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_1_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Función que agrega un nuevo nodo después de un nodo dado como referencia que se encuentra en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

        $('#modal_explicacion').modal('show');

    }

    //2 //nodo *ptrNodoActual = ptrNodoInicio;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_2_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_2_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoActual.declarada = true;
        obj_ptrNodoActual.nodo_conectado.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_3_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_2_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se crea una nueva variable de tipo puntero, la cual servirá para ir apuntando a la dirección de cada nodo de la lista y así recorrer la lista simplemente ligada, aparte de indicar la dirección de memoria del primer nodo encontrado cuyo valor en su miembro dato sea igual al valor buscado.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //3 //bool encontrado = true;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_3_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_3_" + direccion_memoria_nodo).style.display = "none";

        obj_var_encontrado.declarada = true;
        obj_var_encontrado.valor = true;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_4_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_3_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Variable tipo bool que indicara si el nodo dado como referencia se encuentra en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //4 //int busqueda;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_4_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_4_" + direccion_memoria_nodo).style.display = "none";

        obj_var_busqueda.declarada = true;
        obj_var_busqueda.valor = 0;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_6_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_4_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Variable tipo int que guardará el valor a buscar en la lista simplemente ligada, para indicar cual es el nodo dado como referencia.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //5 //cout<<"Ingrese el número a buscar:\n";

    //6 //cin>>busqueda;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_6_" + direccion_memoria_nodo).onclick = function() {

        $('#modal_dato_busqueda').modal('show');

        document.getElementById("btn_modal_dato_busqueda_aceptar").onclick = function() {

            $('#modal_dato_busqueda').modal('hide');

            obj_var_busqueda.valor = document.getElementById("input_dato_busqueda").value;

            document.getElementById("input_dato_busqueda").value = "";

            if(validar_numero(obj_var_busqueda.valor)){

                document.getElementById("btn_insertar_nodo_despues_de_ejecutar_6_" + direccion_memoria_nodo).style.display = "none";

                actualizar();

                document.getElementById("btn_insertar_nodo_despues_de_ejecutar_7_" + direccion_memoria_nodo).style.display = "block";			

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_6_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se lee el valor a buscar en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //7 //while(ptrNodoActual->dato != busqueda && encontrado){
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_7_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_7_" + direccion_memoria_nodo).style.display = "none";

        if(objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor != obj_var_busqueda.valor && obj_var_encontrado.valor){
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_8_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_11_" + direccion_memoria_nodo).style.display = "block";
        }

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_7_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Ciclo while con el que se recorrerá la lista mientras el valor guardado en el miembro dato del nodo al que apunta ptrNodoActual sea diferente al valor buscado y encontrado sea verdadero.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //8 //if (ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_8_" + direccion_memoria_nodo).onclick = function() {
        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_8_" + direccion_memoria_nodo).style.display = "none";
        if(objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key != obj_ptrNodoInicio.nodo_conectado.key){
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_9_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_10_" + direccion_memoria_nodo).style.display = "block";
        }
    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_8_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se verifica si ptrNodoActual no está apuntando al último nodo de la lista simplemente ligada. En caso de ser verdad, se sigue con el recorrido de la lista simplemente ligada, en caso de ser negativo, el puntero ptrNodoActual se encuentra en el último nodo de la lista por lo que la variable encontrado pasara a false.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //9 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_9_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_9_" + direccion_memoria_nodo).style.display = "none";

        obj_ptrNodoActual.nodo_conectado.key = objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_7_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_9_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se verifica si ptrNodoActual no está apuntando al último nodo de la lista simplemente ligada. En caso de ser verdad, se sigue con el recorrido de la lista simplemente ligada, en caso de ser negativo, el puntero ptrNodoActual se encuentra en el último nodo de la lista por lo que la variable encontrado pasara a false.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}else{

    //10 //encontrado = false;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_10_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_10_" + direccion_memoria_nodo).style.display = "none";

        obj_var_encontrado.valor = false;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_7_" + direccion_memoria_nodo).style.display = "block";

    }

    //}

    //}

    //11 //if(encontrado){
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_11_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_11_" + direccion_memoria_nodo).style.display = "none";

        if(obj_var_encontrado.valor){
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_12_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_21_" + direccion_memoria_nodo).style.display = "block";
        }

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_11_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se verifica si fue encontrado un nodo en el que su miembro dato es igual al valor buscado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //12 //nodo *ptrNodoNuevo = new nodo;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_12_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_12_" + direccion_memoria_nodo).style.display = "none";

        //crear nodo canvas
        let key_objeto = crearNuevoNodo({"direccion_memoria": direccion_memoria_nodo});

        obj_ptrNodoNuevo.declarada = true;
        obj_ptrNodoNuevo.nodo_conectado.key = objetos[key_objeto].key;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_13_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_12_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se crea un nuevo nodo de forma dinámica usando el operador new.",
            "imagen_titulo": "Plan de programación 4 - Sintaxis operador new",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_4_operador_new.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //13 //ptrNodoNuevo->ptrNodoSiguiente = NULL;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_13_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_13_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.inicializado = true;
        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = null;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_15_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_13_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se inicializa el miembro ptrNodoSiguiente del nuevo nodo en NULL. Ya que aun no se indica cual es el nodo que sigue del nuevo nodo.",
            "imagen_titulo": "Plan de programación 4 - Sintaxis operador new",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_4_operador_new.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //14 //cout<<"Ingrese el dato:\n";

    //15 //cin>>ptrNodoNuevo->dato;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_15_" + direccion_memoria_nodo).onclick = function() {

        $('#modal_dato_nodo').modal('show');

        document.getElementById("btn_modal_dato_nodo_aceptar").onclick = function() {

            $('#modal_dato_nodo').modal('hide');

            let dato = document.getElementById("input_dato").value;

            document.getElementById("input_dato").value = "";

            if(validar_numero(dato)){

                document.getElementById("btn_insertar_nodo_despues_de_ejecutar_15_" + direccion_memoria_nodo).style.display = "none";

                objetos[obj_ptrNodoNuevo.nodo_conectado.key].dato.valor = Number(dato);

                actualizar();

                document.getElementById("btn_insertar_nodo_despues_de_ejecutar_16_" + direccion_memoria_nodo).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_15_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se guarda en el miembro dato del nuevo nodo el valor que el usuario ingrese por medio de la consola.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //16 //if (ptrNodoFinal == ptrNodoActual){
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_16_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_16_" + direccion_memoria_nodo).style.display = "none";

        if(obj_ptrNodoFinal.nodo_conectado.key == obj_ptrNodoActual.nodo_conectado.key){
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_17_" + direccion_memoria_nodo).style.display = "block";
        }else{
            document.getElementById("btn_insertar_nodo_despues_de_ejecutar_19_" + direccion_memoria_nodo).style.display = "block";
        }

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_16_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se verifica que el nodo al que apunta el puntero ptrNodoActual es el mismo nodo al que apunta el puntero ptrNodoFinal, se realiza esto para verificar si el nuevo nodo será el nuevo nodo que estará al final de la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //17 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoNuevo;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_17_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_17_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoFinal.nodo_conectado.key].ptrLigaSig.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_18_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_17_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se verifica que el nodo al que apunta el puntero ptrNodoActual es el mismo nodo al que apunta el puntero ptrNodoFinal, se realiza esto para verificar si el nuevo nodo será el nuevo nodo que estará al final de la lista.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //18 //ptrNodoFinal = ptrNodoNuevo;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_18_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_18_" + direccion_memoria_nodo).style.display = "none";
        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_23_" + direccion_memoria_nodo).style.display = "block";

        obj_ptrNodoFinal.nodo_conectado.key = objetos[obj_ptrNodoNuevo.nodo_conectado.key].key;

        actualizar();

        //fin de la función

    }

    document.getElementById("btn_insertar_nodo_despues_de_explicacion_18_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "El puntero ptrNodoFinal apunta a la dirección de memoria del nuevo nodo creado. Con esto, el nuevo nodo pasa a ser el último nodo de la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //23 ptrNodoFinal -> ptrNodoSiguiente = ptrNodoInicio

    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_23_" + direccion_memoria_nodo).onclick = function() {


        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_23_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoFinal.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = null;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = true;

        actualizar();

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    document.getElementById("btn_insertar_nodo_despues_de_explicacion_23_" + direccion_memoria_nodo).onclick = function() {
        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "El puntero ptrNodoFinal apunta a la dirección de memoria del nuevo nodo creado. Con esto, el nuevo nodo pasa a ser el último nodo de la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //}else{

    //19 //ptrNodoNuevo->ptrNodoSiguiente = ptrNodoActual->ptrNodoSiguiente;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_19_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_19_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoNuevo.nodo_conectado.key].ptrLigaSig.key = objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_20_" + direccion_memoria_nodo).style.display = "block";

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_19_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Al miembro ptrNodoSiguiente del nuevo nodo creado, se le asigna la dirección de memoria del nodo siguiente del nodo que esta siendo apuntado por el puntero ptrNodoActual.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //20 //ptrNodoActual->ptrNodoSiguiente = ptrNodoNuevo;
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_20_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_20_" + direccion_memoria_nodo).style.display = "none";

        objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoNuevo.nodo_conectado.key;

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = null;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = true;

        actualizar();

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }
    document.getElementById("btn_insertar_nodo_despues_de_explicacion_20_" + direccion_memoria_nodo).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Al miembro ptrNodoSiguiente del nodo apuntado por el puntero ptrNodoActual, se le asigna la memoria del nuevo nodo creado. Debido a que el nuevo nodo debe de ser insertado después del nodo al que apunta ptrNodoActual.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}

    //}else{

    //21 //cout<<"El nodo dado como referencia no se encuentra en la lista.\n";
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_21_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_21_" + direccion_memoria_nodo).style.display = "none";

        alert("El nodo dado como referencia no se encuentra en la lista.");

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_22_" + direccion_memoria_nodo).style.display = "block";

    }

    //22 //getch();
    document.getElementById("btn_insertar_nodo_despues_de_ejecutar_22_" + direccion_memoria_nodo).onclick = function() {

        document.getElementById("btn_insertar_nodo_despues_de_ejecutar_22_" + direccion_memoria_nodo).style.display = "none";

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        obj_ptrNodoNuevo.declarada = false;
        obj_ptrNodoNuevo.nodo_conectado.key = null;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = true;

        actualizar();

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    //}

    //}

}

/*FUNCIONES ELIMINAR NODO*/

console.log("funciones eliminar nodo");

var cont_eliminar = 1;

/*Modal que muestra opciones de eliminar nodo*/
function modal_funciones_eliminar_nodo(){

    document.getElementById("btn_eliminar_inicio").style.display = "block";
    document.getElementById("btn_eliminar_final").style.display = "block";
    document.getElementById("btn_eliminar_con_informacion").style.display = "block";

    $('#modal_funciones_eliminar_nodo').modal('show');

}

/*FUNCIONES ELIMINAR NODO INICIO*/
function crear_tabla_eliminar_nodo_inicio(){

    bloquear_funciones();

    let tabla = 
        '<table id="tabla_eliminar_nodo_inicio_' + cont_eliminar + '">' +
        '<tbody id="tbody_tabla_eliminar_nodo_inicio_' + cont_eliminar + '">' +

        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void eliminar_nodo_inicio(){
        '<span class="palabra-reservada">void</span> eliminar_nodo_inicio<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_explicacion_1_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +


        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">!=</span> NULL <span class="simbolo">&#38;&#38;</span> ptrNodoFinal <span class="simbolo">!=</span> NULL<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_2_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_explicacion_2_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	


        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //nodo *ptrNodoEliminar = ptrNodoInicio;
        'nodo <span class="simbolo">*</span>ptrNodoEliminar <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_3_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_explicacion_3_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //if(ptrNodoInicio == ptrNodoFinal){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">==</span> ptrNodoFinal<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_4_' + cont_eliminar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_explicacion_4_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoInicio = NULL;
        'ptrNodoInicio <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_5_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoFinal = NULL;
        'ptrNodoFinal <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_6_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoInicio = ptrNodoInicio->ptrNodoSiguiente;
        'ptrNodoInicio <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_7_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_explicacion_7_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +

        '<span style="padding-left: 3em;">' +
        //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio
        'ptrNodoFinal <span class="simbolo">-&#62;</span> ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +

        '<br>' +

        '<span style="padding-left: 3em;">' +
        //ptrNodoInicio->ptrNodoAnterior = ptrNodoFinal
        'ptrNodoInicio <span class="simbolo">-&#62;</span> ptrNodoAnterior <span class="simbolo">=</span> ptrNodoFinal<span class="simbolo">;</span>' +
        '</span>' +

        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_11_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_explicacion_11_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //delete ptrNodoEliminar;
        '<span class="palabra-reservada">delete</span> ptrNodoEliminar<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_8_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_explicacion_8_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +


        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +


        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"La lista esta vacía.\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"La lista esta vacía.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_9_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_inicio_ejecutar_10_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_2_" + cont_eliminar).style.display = "block";

    //1 //void eliminar_nodo_inicio(){
    document.getElementById("btn_eliminar_nodo_inicio_explicacion_1_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void eliminar_nodo_inicio()",
            "explicacion": "Función que eliminar el nodo que esta al inicio de la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_2_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_2_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key != null && obj_ptrNodoFinal.nodo_conectado.key != null){

            document.getElementById("btn_eliminar_nodo_inicio_ejecutar_3_" + cont_eliminar).style.display = "block";

        }else{

            document.getElementById("btn_eliminar_nodo_inicio_ejecutar_9_" + cont_eliminar).style.display = "block";

        }

    }
    //2 
    document.getElementById("btn_eliminar_nodo_inicio_explicacion_2_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que la lista no esté vacía.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //3 //nodo *ptrNodoEliminar = ptrNodoInicio;
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_3_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_3_" + cont_eliminar).style.display = "none";

        obj_ptrNodoEliminar.declarada = true;
        obj_ptrNodoEliminar.nodo_conectado.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_4_" + cont_eliminar).style.display = "block";

    }
    //3 
    document.getElementById("btn_eliminar_nodo_inicio_explicacion_3_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea una variable tipo puntero que apuntara a la dirección de memoria del nodo a eliminar. En este caso al ser la función de eliminar el nodo que está al inicio de la lista, el puntero se inicializa con la dirección de memoria del primer nodo de la lista.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //4 //if(ptrNodoInicio == ptrNodoFinal){
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_4_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_4_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key == obj_ptrNodoFinal.nodo_conectado.key){


            document.getElementById("btn_eliminar_nodo_inicio_ejecutar_5_" + cont_eliminar).style.display = "block";

        }else{

            document.getElementById("btn_eliminar_nodo_inicio_ejecutar_7_" + cont_eliminar).style.display = "block";

        }

    }
    //4
    document.getElementById("btn_eliminar_nodo_inicio_explicacion_4_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si la lista tiene solo un nodo. Ya que, al eliminar el único nodo, los punteros ptrNodoInicio y ptrNodoFinal deberan apuntar NULL al no haber nodos en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //5 //ptrNodoInicio = NULL;
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_5_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_5_" + cont_eliminar).style.display = "none";

        obj_ptrNodoInicio.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_6_" + cont_eliminar).style.display = "block";

    }

    //6 //ptrNodoFinal = NULL;
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_6_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_6_" + cont_eliminar).style.display = "none";

        obj_ptrNodoFinal.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_8_" + cont_eliminar).style.display = "block";

    }

    //}else{

    //7 //ptrNodoInicio = ptrNodoInicio->ptrNodoSiguiente;
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_7_" + cont_eliminar).onclick = function() {
        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_7_" + cont_eliminar).style.display = "none";
        obj_ptrNodoInicio.nodo_conectado.key = objetos[obj_ptrNodoInicio.nodo_conectado.key].ptrLigaSig.key;
        actualizar();
        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_11_" + cont_eliminar).style.display = "block";
    }
    //7
    document.getElementById("btn_eliminar_nodo_inicio_explicacion_7_" + cont_eliminar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Ya que la lista tiene mas de un nodo, el ptrNodoInicio debe de apuntar al que es actualmente el segundo nodo se la lista para que pase a ser el primer nodo de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //11 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_11_" + cont_eliminar).onclick = function() {
        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_11_" + cont_eliminar).style.display = "none";
        objetos[obj_ptrNodoFinal.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        objetos[obj_ptrNodoInicio.nodo_conectado.key].ptrLigaAnt.key = obj_ptrNodoFinal.nodo_conectado.key;
        actualizar();
        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_8_" + cont_eliminar).style.display = "block";
    }
    //11
    document.getElementById("btn_eliminar_nodo_inicio_explicacion_11_" + cont_eliminar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nodo final debe apuntar al nuevo nodo de inicio, y el miembro ptrNodoAnterior del nuevo nodo inicio debe apuntar al nodo final para elimiar el nodo al principio",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //}

    //8 //delete ptrNodoEliminar;
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_8_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_8_" + cont_eliminar).style.display = "none";

        delete objetos[obj_ptrNodoEliminar.nodo_conectado.key];

        //fin de la función

        obj_ptrNodoEliminar.declarada = false;
        obj_ptrNodoEliminar.nodo_conectado.key = null;

        actualizar();

        cont_eliminar += 1;

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }
    //8 
    document.getElementById("btn_eliminar_nodo_inicio_explicacion_8_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se elimina el nodo cuya dirección de memoria es apuntada por el puntero ptrNodoEliminar.",
            "imagen_titulo": "Plan de programación 5 - Sintaxis operador delete",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_5_operador_delete.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}else{

    //9 //cout<<"La lista esta vacía.\n";
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_9_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_9_" + cont_eliminar).style.display = "none";

        agregar_advertensia("La lista esta vacía.");

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_10_" + cont_eliminar).style.display = "block";

    }

    //10 //getch();
    document.getElementById("btn_eliminar_nodo_inicio_ejecutar_10_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_inicio_ejecutar_10_" + cont_eliminar).style.display = "none";

        //fin de la función

        obj_ptrNodoEliminar.declarada = false;
        obj_ptrNodoEliminar.nodo_conectado.key = null;

        actualizar();

        cont_eliminar += 1;

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    //}

    //}

}

/*FUNCIONES ELIMINAR NODO FINAL*/
function crear_tabla_eliminar_nodo_final(){

    bloquear_funciones();

    let tabla = 
        '<table id="tabla_eliminar_nodo_final_' + cont_eliminar + '">' +
        '<tbody id="tbody_tabla_eliminar_nodo_final_' + cont_eliminar + '">' +

        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        //void eliminar_nodo_final(){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void eliminar_nodo_final(){
        '<span class="palabra-reservada">void</span> eliminar_nodo_final<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_1_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">!=</span> NULL <span class="simbolo">&#38;&#38;</span> ptrNodoFinal <span class="simbolo">!=</span> NULL<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_2_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_2_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //nodo *ptrNodoEliminar = ptrNodoFinal;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //nodo *ptrNodoEliminar = ptrNodoFinal;
        'nodo <span class="simbolo">*</span>ptrNodoEliminar <span class="simbolo">=</span> ptrNodoFinal<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_3_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_3_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //if(ptrNodoFinal == ptrNodoInicio){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //if(ptrNodoFinal == ptrNodoInicio){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoFinal <span class="simbolo">==</span> ptrNodoInicio<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_4_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_4_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //ptrNodoInicio = NULL;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoInicio = NULL;
        'ptrNodoInicio <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_5_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //ptrNodoFinal = NULL;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoFinal = NULL;
        'ptrNodoFinal <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_6_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //nodo *ptrNodoActual = ptrNodoInicio->ptrNodoAnterior->ptrNodoAnterior;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //nodo *ptrNodoActual = ptrNodoInicio->ptrNodoAnterior->ptrNodoAnterior;
        'nodo <span class="simbolo">*</span>ptrNodoActual <span class="simbolo">=</span> ptrNodoInicio <span class="simbolo">-&#62;</span>ptrNodoAnterior<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_7_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_7_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +


        //ptrNodoActual->ptrNodoSiguiente = ptrNodoInicio;
        '<tr>' +
        '<td></td>' +
        '<td>' +

        '<span style="padding-left: 3em;">' +
        //ptrNodoActual->ptrNodoSiguiente = ptrNodoInicio;
        'ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +

        '<br>' +
        
        '<span style="padding-left: 3em;">' +
        //ptrNodoInicio->ptrNodoAnterior = ptrNodoActual;
        'ptrNodoInicio<span class="simbolo">-&#62;</span>ptrNodoAnterior <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">;</span>' +
        '</span>' +

        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_10_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_10_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //ptrNodoFinal = ptrNodoActual;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoFinal = ptrNodoActual;
        'ptrNodoFinal <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_11_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_11_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //delete ptrNodoEliminar;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //delete ptrNodoEliminar;
        '<span class="palabra-reservada">delete</span> ptrNodoEliminar<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_12_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_explicacion_12_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //cout<<"La lista esta vacía\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"La lista esta vacía\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"La lista esta vacía\\n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_13_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //getch();
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_final_ejecutar_14_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">Ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_eliminar_nodo_final_ejecutar_2_" + cont_eliminar).style.display = "block";

    //1 //void eliminar_nodo_final(){
    document.getElementById("btn_eliminar_nodo_final_explicacion_1_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void eliminar_nodo_final()",
            "explicacion": "Función que eliminar el nodo que esta al final de la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
    document.getElementById("btn_eliminar_nodo_final_ejecutar_2_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_2_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key != null && obj_ptrNodoFinal.nodo_conectado.key != null){

            document.getElementById("btn_eliminar_nodo_final_ejecutar_3_" + cont_eliminar).style.display = "block";

        }else{

            document.getElementById("btn_eliminar_nodo_final_ejecutar_13_" + cont_eliminar).style.display = "block";

        }

    }
    //2
    document.getElementById("btn_eliminar_nodo_final_explicacion_2_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que la lista no esté vacía.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //3 //nodo *ptrNodoEliminar = ptrNodoFinal;
    document.getElementById("btn_eliminar_nodo_final_ejecutar_3_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_3_" + cont_eliminar).style.display = "none";

        obj_ptrNodoEliminar.declarada = true;
        obj_ptrNodoEliminar.nodo_conectado.key = obj_ptrNodoFinal.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_final_ejecutar_4_" + cont_eliminar).style.display = "block";

    }
    //3
    document.getElementById("btn_eliminar_nodo_final_explicacion_3_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se crea una variable tipo puntero que apuntara a la dirección de memoria del nodo a eliminar. En este caso al ser la función de eliminar el nodo que está al final de la lista, el puntero se inicializa con la dirección de memoria del último nodo de la lista.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //4 //if(ptrNodoFinal == ptrNodoInicio){
    document.getElementById("btn_eliminar_nodo_final_ejecutar_4_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_4_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoFinal.nodo_conectado.key == obj_ptrNodoInicio.nodo_conectado.key){

            document.getElementById("btn_eliminar_nodo_final_ejecutar_5_" + cont_eliminar).style.display = "block";

        }else{

            document.getElementById("btn_eliminar_nodo_final_ejecutar_7_" + cont_eliminar).style.display = "block";

        }

    }
    //4
    document.getElementById("btn_eliminar_nodo_final_explicacion_4_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si la lista tiene solo un nodo. Ya que, al eliminar el único nodo, los punteros ptrNodoInicio y ptrNodoFinal deberan apuntar NULL al no haber nodos en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //5 //ptrNodoInicio = NULL;
    document.getElementById("btn_eliminar_nodo_final_ejecutar_5_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_5_" + cont_eliminar).style.display = "none";

        obj_ptrNodoInicio.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_final_ejecutar_6_" + cont_eliminar).style.display = "block";

    }

    //6 //ptrNodoFinal = NULL;
    document.getElementById("btn_eliminar_nodo_final_ejecutar_6_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_6_" + cont_eliminar).style.display = "none";

        obj_ptrNodoFinal.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_final_ejecutar_12_" + cont_eliminar).style.display = "block";

    }

    //}else{

    //7 //nodo *ptrNodoActual = ptrNodoInicio->ptrNodoAnterior->ptrNodoAnterior;
    document.getElementById("btn_eliminar_nodo_final_ejecutar_7_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_7_" + cont_eliminar).style.display = "none";

        obj_ptrNodoActual.declarada = true;
        obj_ptrNodoActual.nodo_conectado.key = objetos[objetos[obj_ptrNodoInicio.nodo_conectado.key].ptrLigaAnt.key].ptrLigaAnt.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_final_ejecutar_10_" + cont_eliminar).style.display = "block";

    }
    //7
    document.getElementById("btn_eliminar_nodo_final_explicacion_7_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se declara una variable puntero que va a tener el valor el nodo anterior al nodo final",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }


    //}

    //10 //ptrNodoActual->ptrNodoSiguiente = ptrNodoInicio;
    //ptrNodoInicio->ptrNodoAnterior = ptrNodoActual;
    document.getElementById("btn_eliminar_nodo_final_ejecutar_10_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_10_" + cont_eliminar).style.display = "none";

        objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        objetos[obj_ptrNodoInicio.nodo_conectado.key].ptrLigaAnt.key = obj_ptrNodoActual.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_final_ejecutar_11_" + cont_eliminar).style.display = "block";

    }
    //10
    document.getElementById("btn_eliminar_nodo_final_explicacion_10_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente de ptrNodoActual va a apuntar al nodo de inicio, y el miembro ptrNodoAnterior de ptrNodoInicio va a apuntar al ptrNodoActual",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //11 //ptrNodoFinal = ptrNodoActual;
    document.getElementById("btn_eliminar_nodo_final_ejecutar_11_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_11_" + cont_eliminar).style.display = "none";

        obj_ptrNodoFinal.nodo_conectado.key = obj_ptrNodoActual.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_final_ejecutar_12_" + cont_eliminar).style.display = "block";

    }
    //11
    document.getElementById("btn_eliminar_nodo_final_explicacion_11_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El puntero ptrNodoFinal apunta a la dirección de memoria del nuevo último nodo de la lista, el cual es el nodo apuntado por el puntero ptrNodoActual.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //}

    //12 //delete ptrNodoEliminar;
    document.getElementById("btn_eliminar_nodo_final_ejecutar_12_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_12_" + cont_eliminar).style.display = "none";

        delete objetos[obj_ptrNodoEliminar.nodo_conectado.key];

        //fin de la función

        obj_ptrNodoEliminar.declarada = false;
        obj_ptrNodoEliminar.nodo_conectado.key = null;

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        actualizar();

        cont_eliminar += 1;

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }
    //12
    document.getElementById("btn_eliminar_nodo_final_explicacion_12_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se elimina el nodo cuya dirección de memoria es apuntada por el puntero ptrNodoEliminar.",
            "imagen_titulo": "Plan de programación 5 - Sintaxis operador delete",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_5_operador_delete.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}else{ 

    //13 //cout<<"La lista esta vacía.\n";
    document.getElementById("btn_eliminar_nodo_final_ejecutar_13_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_13_" + cont_eliminar).style.display = "none";

        alert("La lista esta vacía.");

        document.getElementById("btn_eliminar_nodo_final_ejecutar_14_" + cont_eliminar).style.display = "block";

    }

    //14 //getch();
    document.getElementById("btn_eliminar_nodo_final_ejecutar_14_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_final_ejecutar_14_" + cont_eliminar).style.display = "none";

        //fin de la función

        obj_ptrNodoEliminar.declarada = false;
        obj_ptrNodoEliminar.nodo_conectado.key = null;

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        cont_eliminar += 1;

        actualizar();

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    //}

    //}

}

/*FUNCIONES ELIMINAR NODO CON INFORMACION X*/

function crear_tabla_eliminar_nodo_informacionx(){

    bloquear_funciones();

    let tabla = 
        '<table id="tabla_eliminar_nodo_informacion_' + cont_eliminar + '">' +
        '<tbody id="tbody_tabla_eliminar_nodo_informacion_' + cont_eliminar + '">' +

        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        //1 //void eliminar_informacionX(){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void eliminar_informacionX(){
        '<span class="palabra-reservada">void</span> eliminar_informacionX<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_1_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">!=</span> NULL <span class="simbolo">&#38;&#38;</span> ptrNodoFinal <span class="simbolo">!=</span> NULL<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_2_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_2_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //3 //nodo *ptrNodoActual = ptrNodoInicio;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //nodo *ptrNodoActual = ptrNodoInicio;
        'nodo <span class="simbolo">*</span>ptrNodoActual <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_3_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_3_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //4 //nodo *ptrNodoAnterior = NULL;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //nodo *ptrNodoAnterior = NULL;
        'nodo <span class="simbolo">*</span>ptrNodoAnterior <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_4_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_4_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //5 //bool encontrado = true;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //bool encontrado = true;
        '<span class="palabra-reservada">bool</span> encontrado <span class="simbolo">=</span> <span class="palabra-reservada">true</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_5_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_5_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //6 //int busqueda;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //int busqueda;
        '<span class="palabra-reservada">int</span> busqueda <span class="simbolo">=</span> <span class="numero">0</span><span class="simbolo">;</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_6_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_6_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //7 //cout<<"Ingrese el (int) dato a buscar:\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"Ingrese el (int) dato a buscar:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el (int) dato a buscar:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //8 //cin>>busqueda;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cin>>busqueda;
        'cin<span class="simbolo">&#62;&#62;</span>busqueda<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_8_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_8_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //9 //while(ptrNodoActual->dato != busqueda && encontrado){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //while(ptrNodoActual->dato != busqueda && encontrado){
        '<span class="palabra-reservada">while</span><span class="simbolo">(</span>ptrNodoActual<span class="simbolo">-&#62;</span>dato <span class="simbolo">!=</span> busqueda <span class="simbolo">&#38;&#38;</span> encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_9_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_9_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //10 //if (ptrNodoActual->ptrNodoSiguiente != NULL){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //if(ptrNodoActual->ptrNodoSiguiente != NULL){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">!=</span> ptrNodoInicio<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_10_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_10_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //11 //ptrNodoAnterior = ptrNodoActual;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //ptrNodoAnterior = ptrNodoActual;
        'ptrNodoAnterior <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_11_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_11_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //12 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        'ptrNodoActual <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_12_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_12_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //13 //encontrado = false;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //encontrado = false;
        'encontrado <span class="simbolo">=</span> <span class="palabra-reservada">false</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_13_' + cont_eliminar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //14 //if(encontrado){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //if(encontrado){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_14_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_14_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //15 //nodo *ptrNodoEliminar = ptrNodoActual;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //nodo *ptrNodoEliminar = ptrNodoActual;
        'nodo <span class="simbolo">*</span>ptrNodoEliminar <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_15_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_15_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //16 //if(ptrNodoEliminar == ptrNodoInicio && ptrNodoEliminar == ptrNodoFinal){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //if(ptrNodoEliminar == ptrNodoInicio && ptrNodoEliminar == ptrNodoFinal){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoEliminar <span class="simbolo">==</span> ptrNodoInicio <span class="simbolo">&#38;&#38;</span> ptrNodoEliminar <span class="simbolo">==</span> ptrNodoFinal<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_16_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_16_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //17 //ptrNodoInicio = NULL;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //ptrNodoInicio = NULL;
        'ptrNodoInicio <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_17_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //18 //ptrNodoFinal = NULL;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //ptrNodoInicio = NULL;
        'ptrNodoInicio <span class="simbolo">=</span> NULL<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_18_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //19 //if(ptrNodoEliminar == ptrNodoInicio){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //if(ptrNodoEliminar == ptrNodoInicio){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoEliminar <span class="simbolo">==</span> ptrNodoInicio<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_19_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_19_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //20 //ptrNodoInicio = ptrNodoEliminar->ptrNodoSiguiente;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 5em;">' +
        //ptrNodoInicio = ptrNodoEliminar->ptrNodoSiguiente;
        'ptrNodoInicio <span class="simbolo">=</span> ptrNodoEliminar<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_20_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_20_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //28 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 5em;">' +
        //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio
        'ptrNodoFinal<span>-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoInicio' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_28_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_28_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //21 //if(ptrNodoFinal == ptrNodoEliminar){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 5em;">' +
        //if(ptrNodoFinal == ptrNodoEliminar){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoFinal <span class="simbolo">==</span> ptrNodoEliminar<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_21_' + cont_eliminar+ '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_21_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //22 //ptrNodoFinal = ptrNodoAnterior;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 6em;">' +
        //ptrNodoFinal = ptrNodoAnterior;
        'ptrNodoFinal <span class="simbolo">=</span> ptrNodoAnterior<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_22_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_22_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 5em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //23 //ptrNodoAnterior->ptrNodoSiguiente = ptrNodoEliminar->ptrNodoSiguiente;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 5em;">' +
        //ptrNodoAnterior->ptrNodoSiguiente = ptrNodoEliminar->ptrNodoSiguiente;
        'ptrNodoAnterior<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">=</span> ptrNodoEliminar<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_23_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_23_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 4em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //24 //delete ptrNodoEliminar;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //delete ptrNodoEliminar;
        '<span class="palabra-reservada">delete</span> ptrNodoEliminar<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_24_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_explicacion_24_' + cont_eliminar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //25 //cout<<"El (int) dato "<<busqueda<<" no se encuentra en la lista.";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"El (int) dato "<<busqueda<<" no se encuentra en la lista.";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"El (int) dato "</span><span class="simbolo">&#60;&#60;</span>busqueda<span class="simbolo">&#60;&#60;</span><span class="impresion">" no se encuentra en la lista.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_25_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //26 //cout<<"La lista esta vacía.\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"La lista esta vacía.\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"La lista esta vacía.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_26_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //27 //getch();
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_eliminar_nodo_informacion_ejecutar_27_' + cont_eliminar+ '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_2_" + cont_eliminar).style.display = "block";

    //1 //void eliminar_informacionX(){
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_1_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void eliminar_informacionX()",
            "explicacion": "Función que eliminar el primer nodo que encuentra en la lista simplemente ligada cuyo valor en alguno de los miembros del nodo sea igual al valor buscado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

        $('#modal_explicacion').modal('show');

    }

    //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_2_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_2_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key != null && obj_ptrNodoFinal.nodo_conectado.key != null){

            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_3_" + cont_eliminar).style.display = "block";

        }else{

            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_26_" + cont_eliminar).style.display = "block";

        }

    }
    //2
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_2_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que la lista no esté vacía. ",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //3 //nodo *ptrNodoActual = ptrNodoInicio;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_3_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_3_" + cont_eliminar).style.display = "none";

        obj_ptrNodoActual.declarada = true;
        obj_ptrNodoActual.nodo_conectado.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_4_" + cont_eliminar).style.display = "block";

    }
    //3
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_3_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se declara una nueva variable de tipo puntero, la cual servirá para ir apuntando a la dirección de cada nodo de la lista y así recorrer la lista simplemente ligada, aparte de indicar la dirección de memoria del primer nodo encontrado cuyo valor en su miembro dato sea igual al valor buscado para ser eliminado de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //4 //nodo *ptrNodoAnterior = NULL;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_4_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_4_" + cont_eliminar).style.display = "none";

        obj_ptrNodoAnterior.declarada = true;
        obj_ptrNodoAnterior.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_5_" + cont_eliminar).style.display = "block";

    }
    //4
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_4_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se declara una nueva variable de tipo puntero, la cual servirá para poder acceder a la dirección de memoria del nodo anterior al nodo que va a ser eliminado.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //5 //bool encontrado = true;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_5_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_5_" + cont_eliminar).style.display = "none";

        obj_var_encontrado.declarada = true;
        obj_var_encontrado.valor = true;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_6_" + cont_eliminar).style.display = "block";

    }
    //5
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_5_" + cont_eliminar).onclick = function() {


        let objExplicacion = {
            "titulo": "",
            "explicacion": "Variable tipo bool que indicara si el nodo cuyo valor dato sea igual al buscado se encuentra en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");
    }

    //6 //int busqueda;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_6_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_6_" + cont_eliminar).style.display = "none";

        obj_var_busqueda.declarada = true;
        obj_var_busqueda.valor = 0;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_8_" + cont_eliminar).style.display = "block";

    }
    //6
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_6_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Variable tipo int que guardará el valor del dato a buscar en la lista simplemente ligada, para encontrar el nodo a eliminar.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //7 //cout<<"Ingrese el (int) dato a buscar:\n";

    //8 //cin>>busqueda;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_8_" + cont_eliminar).onclick = function() {

        $('#modal_dato_busqueda').modal('show');

        document.getElementById("btn_modal_dato_busqueda_aceptar").onclick = function() {

            $('#modal_dato_busqueda').modal('hide');

            obj_var_busqueda.valor = document.getElementById("input_dato_busqueda").value;

            document.getElementById("input_dato_busqueda").value = "";

            if(validar_numero(obj_var_busqueda.valor)){

                document.getElementById("btn_eliminar_nodo_informacion_ejecutar_8_" + cont_eliminar).style.display = "none";

                actualizar();

                document.getElementById("btn_eliminar_nodo_informacion_ejecutar_9_" + cont_eliminar).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    //8
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_8_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se lee el valor del dato a buscar.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //9 //while(ptrNodoActual->dato != busqueda && encontrado){
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_9_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_9_" + cont_eliminar).style.display = "none";

        if(objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor != obj_var_busqueda.valor && obj_var_encontrado.valor){
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_10_" + cont_eliminar).style.display = "block";
        }else{
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_14_" + cont_eliminar).style.display = "block";
        }

    }
    //9
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_9_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Ciclo While con el que se recorrerá la lista mientras el valor guardado en el miembro dato del nodo al que apunta ptrNodoActual sea diferente al valor buscado y encontrado sea verdadero.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //10 //if (ptrNodoActual->ptrNodoSiguiente != NULL){
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_10_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_10_" + cont_eliminar).style.display = "none";

        if(objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key != obj_ptrNodoInicio.nodo_conectado.key){
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_11_" + cont_eliminar).style.display = "block";
        }else{
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_13_" + cont_eliminar).style.display = "block";
        }

    }
    //10
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_10_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si ptrNodoActual no ha llegado al último nodo de la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //11 //ptrNodoAnterior = ptrNodoActual;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_11_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_11_" + cont_eliminar).style.display = "none";

        obj_ptrNodoAnterior.nodo_conectado.key = obj_ptrNodoActual.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_12_" + cont_eliminar).style.display = "block";

    }
    //11
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_11_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Al puntero ptrNodoAnterior se le asigna la dirección de memoria a la que apunta actualmente ptrNodoActual.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //12 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_12_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_12_" + cont_eliminar).style.display = "none";

        obj_ptrNodoActual.nodo_conectado.key = objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_9_" + cont_eliminar).style.display = "block";

    }
    //12
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_12_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Al puntero ptrNodoActual se le asigna la dirección de memoria del siguiente nodo.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}else{

    //13 //encontrado = false;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_13_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_13_" + cont_eliminar).style.display = "none";

        obj_var_encontrado.valor = false;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_9_" + cont_eliminar).style.display = "block";

    }

    //}

    //}

    //14 //if (encontrado){
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_14_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_14_" + cont_eliminar).style.display = "none";

        if(obj_var_encontrado.valor){
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_15_" + cont_eliminar).style.display = "block";
        }else{
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_25_" + cont_eliminar).style.display = "block";
        }

    }
    //14
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_14_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si se encontró un nodo cuyo valor en su miembro dato es igual al valor buscado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //15 //nodo *ptrNodoEliminar = ptrNodoActual;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_15_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_15_" + cont_eliminar).style.display = "none";

        obj_ptrNodoEliminar.declarada = true;
        obj_ptrNodoEliminar.nodo_conectado.key = obj_ptrNodoActual.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_16_" + cont_eliminar).style.display = "block";

    }
    //15
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_15_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se declara una variable tipo puntero que apuntara a la dirección de memoria del nodo a eliminar. Se inicializa el puntero con la dirección de memoria a la que apunta el puntero ptrNodoActual, ya que dicho puntero apunta a la dirección de memoria del nodo cuyo valor en su miembro dato es igual al valor buscado.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //16 //if(ptrNodoEliminar == ptrNodoInicio && ptrNodoEliminar == ptrNodoFinal){
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_16_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_16_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoEliminar.nodo_conectado.key == obj_ptrNodoInicio.nodo_conectado.key && obj_ptrNodoEliminar.nodo_conectado.key == obj_ptrNodoFinal.nodo_conectado.key){
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_17_" + cont_eliminar).style.display = "block";
        }else{
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_19_" + cont_eliminar).style.display = "block";
        }

    }
    //16
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_16_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si el nodo a eliminar es el único nodo en la lista. Ya que, al eliminar el nodo, los apuntadores ptrNodoInicio y ptrNodoFinal deben apuntar a NULL al no haber nodos en la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //17 //ptrNodoInicio = NULL;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_17_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_17_" + cont_eliminar).style.display = "none";

        obj_ptrNodoInicio.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_18_" + cont_eliminar).style.display = "block";

    }

    //18 //ptrNodoFinal = NULL;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_18_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_18_" + cont_eliminar).style.display = "none";

        obj_ptrNodoFinal.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_24_" + cont_eliminar).style.display = "block";

    }

    //}else{

    //19 //if(ptrNodoEliminar == ptrNodoInicio){
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_19_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_19_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoEliminar.nodo_conectado.key == obj_ptrNodoInicio.nodo_conectado.key){
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_20_" + cont_eliminar).style.display = "block";
        }else{
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_21_" + cont_eliminar).style.display = "block";
        }

    }
    //19
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_19_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que el nodo a eliminar sea el primer nodo de la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //20 //ptrNodoInicio = ptrNodoEliminar->ptrNodoSiguiente;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_20_" + cont_eliminar).onclick = function() {
        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_20_" + cont_eliminar).style.display = "none";
        obj_ptrNodoInicio.nodo_conectado.key = objetos[obj_ptrNodoEliminar.nodo_conectado.key].ptrLigaSig.key;
        actualizar();
        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_28_" + cont_eliminar).style.display = "block";
    }
    //20
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_20_" + cont_eliminar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El segundo nodo de la lista simplemente ligada pasara a ser el primer nodo, ya que se está eliminando el que es actualmente el primer nodo de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //28 //ptrNodoFinal->ptrNodoSiguiente = ptrNodoInicio
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_28_" + cont_eliminar).onclick = function() {
        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_28_" + cont_eliminar).style.display = "none";
        objetos[obj_ptrNodoFinal.nodo_conectado.key].ptrLigaSig.key = obj_ptrNodoInicio.nodo_conectado.key;
        actualizar();
        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_24_" + cont_eliminar).style.display = "block";
    }
    //28
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_28_" + cont_eliminar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "El segundo nodo de la lista simplemente ligada pasara a ser el primer nodo, ya que se está eliminando el que es actualmente el primer nodo de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //}else{

    //21 //if(ptrNodoFinal == ptrNodoEliminar){
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_21_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_21_" + cont_eliminar).style.display = "none";

        if(obj_ptrNodoFinal.nodo_conectado.key == obj_ptrNodoEliminar.nodo_conectado.key){
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_22_" + cont_eliminar).style.display = "block";
        }else{
            document.getElementById("btn_eliminar_nodo_informacion_ejecutar_23_" + cont_eliminar).style.display = "block";
        }


    }
    //21
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_21_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que el nodo a eliminar sea el último de la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //22 //ptrNodoFinal = ptrNodoAnterior;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_22_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_22_" + cont_eliminar).style.display = "none";

        obj_ptrNodoFinal.nodo_conectado.key = obj_ptrNodoAnterior.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_23_" + cont_eliminar).style.display = "block";


    }
    //22
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_22_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El penúltimo nodo pasa a ser el ultimo nodo de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a dirección de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}

    //23 //ptrNodoAnterior->ptrNodoSiguiente = ptrNodoEliminar->ptrNodoSiguiente;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_23_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_23_" + cont_eliminar).style.display = "none";

        objetos[obj_ptrNodoAnterior.nodo_conectado.key].ptrLigaSig.key = objetos[obj_ptrNodoEliminar.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_24_" + cont_eliminar).style.display = "block";

    }
    //23
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_23_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "El miembro ptrNodoSiguiente del nodo que está antes del nodo que va a ser eliminado, debe de apuntar al nodo que sigue del nodo al que va a ser eliminado.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}

    //}

    //24 //delete ptrNodoEliminar;
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_24_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_24_" + cont_eliminar).style.display = "none";

        delete objetos[obj_ptrNodoEliminar.nodo_conectado.key];

        obj_ptrNodoAnterior.nodo_conectado.key = null;

        obj_ptrNodoActual.nodo_conectado.key = null;

        obj_ptrNodoEliminar.nodo_conectado.key = null;

        actualizar();

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_27_" + cont_eliminar).style.display = "block";

    }
    //24
    document.getElementById("btn_eliminar_nodo_informacion_explicacion_24_" + cont_eliminar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se elimina el nodo cuya dirección de memoria es apuntada por el puntero ptrNodoEliminar.",
            "imagen_titulo": "Plan de programación 5 - Sintaxis operador delete",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_5_operador_delete.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}else{

    //25 //cout<<"El (int) dato "<<busqueda<<" no se encuentra en la lista.\n";
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_25_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_25_" + cont_eliminar).style.display = "none";

        alert("El (int) dato " + obj_var_busqueda.valor + " no se encuentra en la lista.");

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_27_" + cont_eliminar).style.display = "block";

    }

    //}

    //}else{

    //26 //cout<<"La lista esta vacía.\n";
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_26_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_26_" + cont_eliminar).style.display = "none";

        alert("La lista esta vacía.");

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_27_" + cont_eliminar).style.display = "block";

    }

    //}

    //27 //getch();
    document.getElementById("btn_eliminar_nodo_informacion_ejecutar_27_" + cont_eliminar).onclick = function() {

        document.getElementById("btn_eliminar_nodo_informacion_ejecutar_27_" + cont_eliminar).style.display = "none";

        //fin de la función

        obj_ptrNodoAnterior.declarada = false;
        obj_ptrNodoAnterior.nodo_conectado.key = null;

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        obj_ptrNodoEliminar.declarada = false;
        obj_ptrNodoEliminar.nodo_conectado.key = null;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = true;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        actualizar();

        cont_eliminar += 1;

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    //}

}

/*FUNCIONES IMPRIMIR LISTA*/

console.log("funciones imprimir lista");

var cont_imprimir = 1;

/*Modal que muestra opciones de imprimir lista*/
function modal_funciones_imprimir_lista(){

    document.getElementById("btn_imprimir_lista").style.display = "block";

    $('#modal_funciones_imprimir_lista').modal('show');

}

function crear_tabla_imprimir_lista(){

    bloquear_funciones();

    let tabla = 
        '<table id="tabla_imprimir_lista_' + cont_imprimir + '">' +
        '<tbody id="tbody_tabla_imprimir_lista_' + cont_imprimir + '">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //1 //void imprimir_lista(){	
        '<span class="palabra-reservada">void</span> imprimir_lista<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_1_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">!=</span> NULL <span class="simbolo">&&</span> ptrNodoFinal <span class="simbolo">!=</span> NULL<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_2_' + cont_imprimir + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_2_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //3 //nodo *ptrNodoActual = ptrNodoInicio;
        'nodo <span class="simbolo">*</span>ptrNodoActual <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_3_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_3_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //4 //do {
        '<span class="palabra-reservada">do</span> <span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +

        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +

        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //5 //cout<<"Direccion de memoria del nodo: "<<ptrNodoActual<<"\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Dirección de memoria del nodo: "</span><span class="simbolo">&#60;&#60;</span>ptrNodoActual<span class="simbolo">&#60;&#60;</span><span class="impresion">"&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_5_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_5_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //6 //cout<<"Valor de (int dato): "<<ptrNodoActual->dato<<"\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Valor de (int dato): "</span><span class="simbolo">&#60;&#60;</span>ptrNodoActual<span class="simbolo">-&#62;</span>dato<span class="simbolo">&#60;&#60;</span><span class="impresion">"&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_6_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_6_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //7 //cout<<"valor de (nodo *ptrNodoSiguiente): "<<ptrNodoActual->ptrNodoSiguiente<<"\n\n";
        'cout HOla<span class="simbolo">&#60;&#60;</span><span class="impresion">"valor de (nodo *ptrNodoSiguiente): "</span><span class="simbolo">&#60;&#60;</span>ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo"></span><span class="simbolo">&#60;&#60;</span><span class="impresion">"&#92;n&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_7_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_7_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //11 //cout<<"valor de (nodo *ptrNodoAnterior): "<<ptrNodoActual->ptrNodoAnterior<<"\n\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"valor de (nodo *ptrNodoAnterior): "</span><span class="simbolo">&#60;&#60;</span>ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoAnterior<span class="simbolo"></span><span class="simbolo">&#60;&#60;</span><span class="impresion">"&#92;n&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_11_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_11_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //8 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        'ptrNodoActual <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_8_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_8_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //} while(ptrNodoActual != ptrNodoInicio);
        '<span class="simbolo">}</span> <span class="palabra-reservada">while</span><span class="simbolo">(</span>ptrNodoActual <span class="simbolo">!=</span> ptrNodoInicio<span class="simbolo">);</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_4_' + cont_imprimir + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_explicacion_4_' + cont_imprimir + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //9 //cout<<"La lista esta vacia\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"La lista esta vacía.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_9_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //10 //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_imprimir_lista_ejecutar_10_' + cont_imprimir + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span class="simbolo">}</span>' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_imprimir_lista_ejecutar_2_" + cont_imprimir).style.display = "block";

    //1 //void imprimir_lista(){
    document.getElementById("btn_imprimir_lista_explicacion_1_" + cont_imprimir).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void imprimir_lista()",
            "explicacion": "Función que imprime el valor de los miembros de todos los nodos de la lista simplemente ligada.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
    document.getElementById("btn_imprimir_lista_ejecutar_2_" + cont_imprimir).onclick = function() {

        document.getElementById("btn_imprimir_lista_ejecutar_2_" + cont_imprimir).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key != null && obj_ptrNodoFinal.nodo_conectado.key != null){
            document.getElementById("btn_imprimir_lista_ejecutar_3_" + cont_imprimir).style.display = "block";
        }else{
            document.getElementById("btn_imprimir_lista_ejecutar_9_" + cont_imprimir).style.display = "block";
        }

    }
    document.getElementById("btn_imprimir_lista_explicacion_2_" + cont_imprimir).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que la lista no esté vacía.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //3 //nodo *ptrNodoActual = ptrNodoInicio;
    document.getElementById("btn_imprimir_lista_ejecutar_3_" + cont_imprimir).onclick = function() {

        document.getElementById("btn_imprimir_lista_ejecutar_3_" + cont_imprimir).style.display = "none";

        obj_ptrNodoActual.declarada = true;

        obj_ptrNodoActual.nodo_conectado.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_imprimir_lista_ejecutar_5_" + cont_imprimir).style.display = "block";

    }
    document.getElementById("btn_imprimir_lista_explicacion_3_" + cont_imprimir).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de una nueva variable tipo puntero con la que se ira recorriendo la lista y cuyo valor inicial es igual a la dirección de memoria del nodo que esta al inicio de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //4 //while (ptrNodoActual != ptrNodoInicio);
    document.getElementById("btn_imprimir_lista_ejecutar_4_" + cont_imprimir).onclick = function() {

        document.getElementById("btn_imprimir_lista_ejecutar_4_" + cont_imprimir).style.display = "none";

        if(obj_ptrNodoActual.nodo_conectado.key != obj_ptrNodoInicio.nodo_conectado.key){
            document.getElementById("btn_imprimir_lista_ejecutar_5_" + cont_imprimir).style.display = "block";
        }else{
            document.getElementById("btn_imprimir_lista_ejecutar_10_" + cont_imprimir).style.display = "block";
        }

    }
    document.getElementById("btn_imprimir_lista_explicacion_4_" + cont_imprimir).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Ciclo while con el que se recorrerá la lista mientras no se haya llegado al final de la lista (ptrNodoActual != NULL).",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //5 //cout<<"Direccion de memoria del nodo: "<<ptrNodoActual<<"\n";
    document.getElementById("btn_imprimir_lista_ejecutar_5_" + cont_imprimir).onclick = function() {

        document.getElementById("btn_imprimir_lista_ejecutar_5_" + cont_imprimir).style.display = "none";

        alert('Dirección de memoria del nodo: ' + objetos[obj_ptrNodoActual.nodo_conectado.key].key);

        document.getElementById("btn_imprimir_lista_ejecutar_6_" + cont_imprimir).style.display = "block";

    }
    document.getElementById("btn_imprimir_lista_explicacion_5_" + cont_imprimir).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se imprime en consola la dirección de memoria a la que apunta el puntero ptrNodoActual, debido a que el puntero ptrNodoActual apunta a la dirección de memoria del primer nodo encontrado cuyo valor en su miembro dato es igual al valor buscado.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a direccion de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //6 //cout<<"Valor de (int dato): "<<ptrNodoActual->dato<<"\n";
    document.getElementById("btn_imprimir_lista_ejecutar_6_" + cont_imprimir).onclick = function() {

        document.getElementById("btn_imprimir_lista_ejecutar_6_" + cont_imprimir).style.display = "none";

        alert('Valor de (int dato): ' + objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor);

        document.getElementById("btn_imprimir_lista_ejecutar_7_" + cont_imprimir).style.display = "block";

    }
    document.getElementById("btn_imprimir_lista_explicacion_6_" + cont_imprimir).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se imprime en consola el valor del miembro dato del nodo al que apunta ptrNodoActual.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }
	
    //7 //cout<<"valor de (nodo *ptrNodoSiguiente): "<<ptrNodoActual->ptrNodoSiguiente<<"\n\n";
    document.getElementById("btn_imprimir_lista_ejecutar_7_" + cont_imprimir).onclick = function() {
        document.getElementById("btn_imprimir_lista_ejecutar_7_" + cont_imprimir).style.display = "none";
        alert('Valor de (nodo *ptrNodoSiguiente): ' + objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key);
        document.getElementById("btn_imprimir_lista_ejecutar_11_" + cont_imprimir).style.display = "block";
    }
    document.getElementById("btn_imprimir_lista_explicacion_7_" + cont_imprimir).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se imprime en consola el valor del miembro ptrNodoSiguiente del nodo al que apunta ptrNodoActual, el cual corresponde a la dirección de memoria del siguiente nodo de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    // 11//cout<<"valor de (nodo *ptrNodoAnterior): "<<ptrNodoActual->ptrNodoAnterior<<"\n\n";
    document.getElementById("btn_imprimir_lista_ejecutar_11_" + cont_imprimir).onclick = function() {
        document.getElementById("btn_imprimir_lista_ejecutar_11_" + cont_imprimir).style.display = "none";
        alert('Valor de (nodo *ptrNodoAnterior): ' + objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaAnt.key);
        document.getElementById("btn_imprimir_lista_ejecutar_8_" + cont_imprimir).style.display = "block";
    }
    document.getElementById("btn_imprimir_lista_explicacion_11_" + cont_imprimir).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se imprime en consola el valor del miembro ptrNodoAnterior del nodo al que apunta ptrNodoActual, el cual corresponde a la dirección de memoria del nodo anterior de la lista doblemente ligada circular.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };
        crear_explicacion(objExplicacion, "block");
    }

    //8 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
    document.getElementById("btn_imprimir_lista_ejecutar_8_" + cont_imprimir).onclick = function() {

        document.getElementById("btn_imprimir_lista_ejecutar_8_" + cont_imprimir).style.display = "none";


        obj_ptrNodoActual.nodo_conectado.key = objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_imprimir_lista_ejecutar_4_" + cont_imprimir).style.display = "block";

    }
    document.getElementById("btn_imprimir_lista_explicacion_8_" + cont_imprimir).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se le asigna al puntero ptrNodoActual la dirección de memoria del siguiente nodo de la lista simplemente ligada por medio del miembro ptrNodoSiguiente del nodo al que apunta actualmente ptrNodoActual.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}

    //}else{

    //9 //cout<<"La lista esta vacia\n";
    document.getElementById("btn_imprimir_lista_ejecutar_9_" + cont_imprimir).onclick = function() {

        document.getElementById("btn_imprimir_lista_ejecutar_9_" + cont_imprimir).style.display = "none";

        alert("la lista esta vacía.");

        document.getElementById("btn_imprimir_lista_ejecutar_10_" + cont_imprimir).style.display = "block";

    }

    //}

    //10 //getch();
    document.getElementById("btn_imprimir_lista_ejecutar_10_" + cont_imprimir).onclick = function() {


        document.getElementById("btn_imprimir_lista_ejecutar_10_" + cont_imprimir).style.display = "none";

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        actualizar();

        cont_imprimir+=1;

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    //}

}

/*FUNCIONES BUSCAR NODO*/

console.log("funciones buscar");

var cont_buscar = 1;

/*Modal que muestra opciones de buscar en la lista*/
function modal_funciones_buscar_en_lista(){

    document.getElementById("btn_buscar_en_lista").style.display = "block";

    $('#modal_funciones_buscar').modal('show');

}

/*FUNCIONES BUSCAR EN LA LISTA*/
function crear_tabla_buscar_en_la_lista(){

    bloquear_funciones();

    let tabla = 
        '<table id="tabla_buscar_en_lista_' + cont_buscar + '">' +
        '<tbody id="tbody_tabla_buscar_en_lista_' + cont_buscar + '">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        //1 //void buscar(){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void buscar(){
        '<span class="palabra-reservada">void</span> buscar<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_1_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">!=</span> NULL <span class="simbolo">&#38;&#38;</span> ptrNodoFinal <span class="simbolo">!=</span> NULL<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_2_' + cont_buscar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_2_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //3 //nodo *ptrNodoActual = ptrNodoInicio;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //nodo *ptrNodoActual = ptrNodoInicio;
        'nodo <span class="simbolo">*</span>ptrNodoActual <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_3_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_3_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //4 //int busqueda;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //int busqueda;
        '<span class="palabra-reservada">int</span> busqueda <span class="simbolo">=</span> <span class="numero">0</span><span class="simbolo">;</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_4_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_4_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //5 //cout<<"Ingrese el valor de (int dato) a buscar:\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"Ingrese el valor de (int dato) a buscar:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el valor de (int dato) a buscar:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //6 //cin>>busqueda;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cin>>busqueda;
        'cin<span class="simbolo">&#62;&#62;</span>busqueda<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_6_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +


        //17 //bool encontrado = true;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //bool encontrado = true;
        '<span class="palabra-reservada">bool</span> encontrado <span class="simbolo">=</span> <span class="palabra-reservada">true</span><span class="simbolo">;</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_17_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_17_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //7 //while(encontrado && ptrNodoActual->dato != busqueda){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //while(encontrado && ptrNodoActual->dato != busqueda){
        '<span class="palabra-reservada">while</span><span class="simbolo">(</span> encontrado <span class="simbolo">&#38;&#38;</span> ptrNodoActual<span class="simbolo">-&#62;</span>dato <span class="simbolo">!=</span> busqueda<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_7_' + cont_buscar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_7_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //18 //if(ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //if(ptrNodoActual-> ptrNodoSiguiente != ptrNodoInicio)
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">!=</span> ptrNodoInicio<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_18_' + cont_buscar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_18_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //8 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        'ptrNodoActual <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_8_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_8_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +


        //7 //} else {
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //} else {
        '<span class="simbolo">}</span> <span class="palabra-reservada">else</span> <span class="simbolo">{</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //19 //encontrado = false;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //encontrado = false;
        'encontrado <span class="simbolo">=</span> <span class="palabra-reservada">false</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_19_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_19_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //9 //if(!encontrado){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //if(!encontrado){
        '<span class="palabra-reservada">if</span><span class="simbolo">(!</span>encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_9_' + cont_buscar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_9_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //10 //cout<<"El nodo con valor de dato "<<busqueda<<", no se encuentra en la lista";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"El nodo con valor de dato "<<busqueda<<", no se encuentra en la lista";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"El nodo con valor de dato "</span><span class="simbolo">&#60;&#60;</span>busqueda<span class="simbolo">&#60;&#60;</span><span class="impresion">", no se encuentra en la lista.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_10_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_10_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //11 //cout<<"Información del nodo encontrado:\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"Información del nodo encontrado:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Información del nodo encontrado:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_11_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //12 //cout<<"Direccion de memoria del nodo: "<<ptrNodoActual<<"\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"Direccion de memoria del nodo: "<<ptrNodoActual<<"\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Direccion de memoria del nodo: "</span><span class="simbolo">&#60;&#60;</span>ptrNodoActual<span class="simbolo">&#60;&#60;</span><span class="impresion">"&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_12_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_12_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //13 //cout<<"Valor de (int dato): "<<ptrNodoActual->dato<<"\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"Valor de (int dato): "<<ptrNodoActual->dato<<"\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Valor de (int dato): "</span><span class="simbolo">&#60;&#60;</span>ptrNodoActual<span class="simbolo">-&#62;</span>dato<span class="simbolo">&#60;&#60;</span><span class="impresion">"&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_13_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_13_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //14 //cout<<"valor de (nodo *ptrNodoSiguiente): "<<ptrNodoActual->ptrNodoSiguiente<<"\n\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"valor de (nodo *ptrNodoSiguiente): "<<ptrNodoActual->ptrNodoSiguiente<<"\n\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"valor de (nodo *ptrNodoSiguiente): "</span><span class="simbolo">&#60;&#60;</span>ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">&#60;&#60;</span><span class="impresion">"&#92;n&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_14_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_explicacion_14_' + cont_buscar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //15 //cout<<"La lista esta vacía.\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"La lista esta vacía.\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"La lista esta vacía.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_15_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //16 //getch();
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_buscar_en_lista_ejecutar_16_' + cont_buscar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        //}
        '<span class="simbolo">}</span>' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_buscar_en_lista_ejecutar_2_" + cont_buscar).style.display = "block";

    //1 //void buscar(){
    document.getElementById("btn_buscar_en_lista_explicacion_1_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void buscar()",
            "explicacion": "Función que busca e imprime el primer nodo de la lista simplemente ligada cuyo valor en alguno de sus miembros sea igual al valor buscado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
    document.getElementById("btn_buscar_en_lista_ejecutar_2_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_2_" + cont_buscar).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key != null && obj_ptrNodoFinal.nodo_conectado.key != null){
            document.getElementById("btn_buscar_en_lista_ejecutar_3_" + cont_buscar).style.display = "block";
        }else{
            document.getElementById("btn_buscar_en_lista_ejecutar_15_" + cont_buscar).style.display = "block";
        }

    }
    document.getElementById("btn_buscar_en_lista_explicacion_2_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que la lista no esté vacía.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //3 //nodo *ptrNodoActual = ptrNodoInicio;
    document.getElementById("btn_buscar_en_lista_ejecutar_3_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_3_" + cont_buscar).style.display = "none";

        obj_ptrNodoActual.declarada = true;
        obj_ptrNodoActual.nodo_conectado.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_buscar_en_lista_ejecutar_4_" + cont_buscar).style.display = "block";

    }
    document.getElementById("btn_buscar_en_lista_explicacion_3_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de una nueva variable tipo puntero con la que se ira recorriendo la lista y cuyo valor inicial es igual a la dirección de memoria del nodo que esta al inicio de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //4 //int busqueda;
    document.getElementById("btn_buscar_en_lista_ejecutar_4_" + cont_buscar).onclick = function() {
        document.getElementById("btn_buscar_en_lista_ejecutar_4_" + cont_buscar).style.display = "none";
        obj_var_busqueda.declarada = true;
        obj_var_busqueda.valor = 0;
        actualizar();
        document.getElementById("btn_buscar_en_lista_ejecutar_6_" + cont_buscar).style.display = "block";
    }
    document.getElementById("btn_buscar_en_lista_explicacion_4_" + cont_buscar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de variable tipo int que guardara el número a buscar en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //5 //cout<<"Ingrese el valor de (int dato) a buscar:\n";

    //6 //cin>>busqueda;
    document.getElementById("btn_buscar_en_lista_ejecutar_6_" + cont_buscar).onclick = function() {

        $('#modal_dato_busqueda').modal('show');

        document.getElementById("btn_modal_dato_busqueda_aceptar").onclick = function() {

            $('#modal_dato_busqueda').modal('hide');

            obj_var_busqueda.valor = document.getElementById("input_dato_busqueda").value;

            document.getElementById("input_dato_busqueda").value = "";

            if(validar_numero(obj_var_busqueda.valor)){

                document.getElementById("btn_buscar_en_lista_ejecutar_6_" + cont_buscar).style.display = "none";

                actualizar();

                document.getElementById("btn_buscar_en_lista_ejecutar_17_" + cont_buscar).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }

    //17 //bool encontrada = true;
    document.getElementById("btn_buscar_en_lista_ejecutar_17_" + cont_buscar).onclick = function() {
        document.getElementById("btn_buscar_en_lista_ejecutar_17_" + cont_buscar).style.display = "none";

        obj_var_encontrado.declarada = true;
        obj_var_encontrado.valor = true;

        actualizar();
        document.getElementById("btn_buscar_en_lista_ejecutar_7_" + cont_buscar).style.display = "block";
    }
    document.getElementById("btn_buscar_en_lista_explicacion_17_" + cont_buscar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de variable tipo int que guardara el número a buscar en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //7 //while(encontrado && ptrNodoActual->dato != busqueda){
    document.getElementById("btn_buscar_en_lista_ejecutar_7_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_7_" + cont_buscar).style.display = "none";

        if(obj_var_encontrado.valor && objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor != obj_var_busqueda.valor){
            document.getElementById("btn_buscar_en_lista_ejecutar_18_" + cont_buscar).style.display = "block";
        }else{
            document.getElementById("btn_buscar_en_lista_ejecutar_9_" + cont_buscar).style.display = "block";
        }

    }
    document.getElementById("btn_buscar_en_lista_explicacion_7_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Ciclo while con el que se recorrerá la lista mientras se cumplan las siguientes condiciones: que no se haya llegado al final de la lista (ptrNodoActual != NULL) y el valor del miembro dato del nodo al que apunta el puntero ptrNodoActual no sea el valor buscado (ptrNodoActual->dato != búsqueda).",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //18 //if (ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
    document.getElementById("btn_buscar_en_lista_ejecutar_18_" + cont_buscar).onclick = function() {
        document.getElementById("btn_buscar_en_lista_ejecutar_18_" + cont_buscar).style.display = "none";
        if(objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key != obj_ptrNodoInicio.nodo_conectado.key){
            document.getElementById("btn_buscar_en_lista_ejecutar_8_" + cont_buscar).style.display = "block";
        }else{
            document.getElementById("btn_buscar_en_lista_ejecutar_19_" + cont_buscar).style.display = "block";
        }
    }
    document.getElementById("btn_buscar_en_lista_explicacion_18_" + cont_buscar).onclick = function() {
        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se verifica si ptrNodoActual no está apuntando al último nodo de la lista simplemente ligada. En caso de ser verdad, se sigue con el recorrido de la lista simplemente ligada, en caso de ser negativo, el puntero ptrNodoActual se encuentra en el último nodo de la lista por lo que la variable encontrado pasara a false.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //8 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
    document.getElementById("btn_buscar_en_lista_ejecutar_8_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_8_" + cont_buscar).style.display = "none";

        obj_ptrNodoActual.nodo_conectado.key = objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_buscar_en_lista_ejecutar_7_" + cont_buscar).style.display = "block";

    }
    document.getElementById("btn_buscar_en_lista_explicacion_8_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se le asigna al puntero ptrNodoActual la dirección de memoria del siguiente nodo de la lista simplemente ligada por medio del miembro ptrNodoSiguiente del nodo al que apunta actualmente ptrNodoActual.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }	


    //19 //encontrada = false;
    document.getElementById("btn_buscar_en_lista_ejecutar_19_" + cont_buscar).onclick = function() {
        document.getElementById("btn_buscar_en_lista_ejecutar_19_" + cont_buscar).style.display = "none";
        obj_var_encontrado.valor = false;
        actualizar();
        document.getElementById("btn_buscar_en_lista_ejecutar_7_" + cont_buscar).style.display = "block";
    }
    document.getElementById("btn_buscar_en_lista_explicacion_19_" + cont_buscar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de variable tipo int que guardara el número a buscar en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //}

    //9 //if(!encontrado){
    document.getElementById("btn_buscar_en_lista_ejecutar_9_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_9_" + cont_buscar).style.display = "none";

        if(!obj_var_encontrado.valor){
            document.getElementById("btn_buscar_en_lista_ejecutar_10_" + cont_buscar).style.display = "block";
        }else{
            document.getElementById("btn_buscar_en_lista_ejecutar_11_" + cont_buscar).style.display = "block";
        }


    }
    document.getElementById("btn_buscar_en_lista_explicacion_9_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si el puntero ptrNodoActual llego al final de la lista, si ptrNodoActual apunta a NULL.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }		

    //10 //cout<<"El nodo con valor de dato "<<busqueda<<", no se encuentra en la lista";
    document.getElementById("btn_buscar_en_lista_ejecutar_10_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_10_" + cont_buscar).style.display = "none";

        alert("El nodo con valor de dato " + obj_var_busqueda.valor + ", no se encuentra en la lista")

        document.getElementById("btn_buscar_en_lista_ejecutar_16_" + cont_buscar).style.display = "block";

    }
    document.getElementById("btn_buscar_en_lista_explicacion_10_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "ptrNodoActual apunta NULL por lo que se llegó al final de la lista y no se encontró un nodo cuyo miembro dato tenga el valor buscado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //}else{

    //11 //cout<<"Información del nodo encontrado:\n";
    document.getElementById("btn_buscar_en_lista_ejecutar_11_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_11_" + cont_buscar).style.display = "none";

        alert('Información del nodo encontrado:');

        document.getElementById("btn_buscar_en_lista_ejecutar_12_" + cont_buscar).style.display = "block";

    }

    //12 //cout<<"Direccion de memoria del nodo: "<<ptrNodoActual<<"\n";
    document.getElementById("btn_buscar_en_lista_ejecutar_12_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_12_" + cont_buscar).style.display = "none";

        alert('Dirección de memoria del nodo: '+ obj_ptrNodoActual.nodo_conectado.key);

        document.getElementById("btn_buscar_en_lista_ejecutar_13_" + cont_buscar).style.display = "block";

    }
    document.getElementById("btn_buscar_en_lista_explicacion_12_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se imprime en consola la dirección de memoria a la que apunta el puntero ptrNodoActual, debido a que el puntero ptrNodoActual apunta a la dirección de memoria del primer nodo encontrado cuyo valor en su miembro dato es igual al valor buscado.",
            "imagen_titulo": "Plan de programación 7 - Sintaxis acceso a direccion de memoria a la que apunta un puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_7_acceso_direccion_memoria_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }	

    //13 //cout<<"Valor de (int dato): "<<ptrNodoActual->dato<<"\n";
    document.getElementById("btn_buscar_en_lista_ejecutar_13_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_13_" + cont_buscar).style.display = "none";

        alert('Valor de (int dato): '+ objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor);

        document.getElementById("btn_buscar_en_lista_ejecutar_14_" + cont_buscar).style.display = "block";

    }
    document.getElementById("btn_buscar_en_lista_explicacion_13_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se imprime en consola el valor del miembro dato del nodo al que apunta ptrNodoActual.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }	

    //14 //cout<<"Valor de (nodo *ptrNodoSiguiente): "<<ptrNodoActual->ptrNodoSiguiente<<"\n\n";
    document.getElementById("btn_buscar_en_lista_ejecutar_14_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_14_" + cont_buscar).style.display = "none";

        alert('Valor de (nodo *ptrNodoSiguiente): '+ objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key);

        document.getElementById("btn_buscar_en_lista_ejecutar_16_" + cont_buscar).style.display = "block";

    }
    document.getElementById("btn_buscar_en_lista_explicacion_14_" + cont_buscar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se imprime en consola el valor del miembro ptrNodoSiguiente del nodo al que apunta ptrNodoActual, el cual corresponde a la dirección de memoria del siguiente nodo de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }	

    //}

    //}else{

    //15 //cout<<"La lista esta vacía.\n";
    document.getElementById("btn_buscar_en_lista_ejecutar_15_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_15_" + cont_buscar).style.display = "none";

        alert("La lista esta vacía.");

        document.getElementById("btn_buscar_en_lista_ejecutar_16_" + cont_buscar).style.display = "block";

    }

    //}

    //16 //getch();
    document.getElementById("btn_buscar_en_lista_ejecutar_16_" + cont_buscar).onclick = function() {

        document.getElementById("btn_buscar_en_lista_ejecutar_16_" + cont_buscar).style.display = "none";

        //fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = false;

        actualizar();

        cont_buscar += 1;

        desbloquear_funciones();

        mostrar_alerta_funcion_terminada();

    }

    //}

}

/*FUNCIONES MODIFICAR NODO*/

console.log("funciones modificar");

var cont_modificar = 1;

/*Modal que muestra opciones de modificar en la lista*/
function modal_funciones_modificar_nodo(){

    document.getElementById("btn_modificar_nodo").style.display = "block";

    $('#modal_funciones_modificar_nodo').modal('show');

}

/*FUNCIONES MODIFICAR NODO*/
function crear_tabla_modificar_nodo(){

    bloquear_funciones();

    let tabla = 
        '<table id="tabla_modificar_' + cont_modificar + '">' +
        '<tbody id="tbody_tabla_modificar_' + cont_modificar + '">' +
        '<tr>' +
        '<th>Paso actual</th>' +
        '<th>Código</th>' +
        '<th>Ejecutar código</th>' +
        '<th>Explicación código</th>' +
        '</tr>' +

        //1 //void modificar(){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span>' +
        //void modificar(){
        '<span class="palabra-reservada">void</span> modificar<span class="simbolo">()</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_1_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span>ptrNodoInicio <span class="simbolo">!=</span> NULL <span class="simbolo">&#38;&#38;</span> ptrNodoFinal <span class="simbolo">!=</span> NULL<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_2_' + cont_modificar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_2_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //3 //nodo *ptrNodoActual = ptrNodoInicio;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //nodo *ptrNodoActual = ptrNodoInicio;
        'nodo <span class="simbolo">*</span>ptrNodoActual <span class="simbolo">=</span> ptrNodoInicio<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_3_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_3_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //4 //int busqueda;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //int busqueda;
        '<span class="palabra-reservada">int</span> busqueda <span class="simbolo">=</span> <span class="numero">0</span><span class="simbolo">;</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_4_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_4_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //5 //cout<<"Ingrese el dato a modificar:\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"Ingrese el dato a modificar:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el dato a modificar:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //6 //cin>>busqueda;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cin>>busqueda;
        'cin<span class="simbolo">&#62;&#62;</span>busqueda<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_6_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	


        //15 //bool encontrado = true;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //bool encontrado = true;
        '<span class="palabra-reservada">bool</span> encontrado <span class="simbolo">=</span> <span class="palabra-reservada">true</span><span class="simbolo">;</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_15_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_15_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //7 //while(encontrado && ptrNodoActual->dato != busqueda){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //while(encontrado && ptrNodoActual->dato != busqueda){
        '<span class="palabra-reservada">while</span><span class="simbolo">(</span> encontrado <span class="simbolo">&#38;&#38;</span> ptrNodoActual<span class="simbolo">-&#62;</span>dato <span class="simbolo">!=</span> busqueda<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_7_' + cont_modificar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_7_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +


        //16 //if(ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //if(ptrNodoActual-> ptrNodoSiguiente != ptrNodoInicio)
        '<span class="palabra-reservada">if</span><span class="simbolo">(</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente <span class="simbolo">!=</span> ptrNodoInicio<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_16_' + cont_modificar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_16_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //8 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
        'ptrNodoActual <span class="simbolo">=</span> ptrNodoActual<span class="simbolo">-&#62;</span>ptrNodoSiguiente<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_8_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_8_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	


        //7 //} else {
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //} else {
        '<span class="simbolo">}</span> <span class="palabra-reservada">else</span> <span class="simbolo">{</span>'+
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +

        //17 //encontrado = false;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //encontrado = false;
        'encontrado <span class="simbolo">=</span> <span class="palabra-reservada">false</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_17_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_17_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //9 //if(!encontrado){
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //if(!encontrado){
        '<span class="palabra-reservada">if</span><span class="simbolo">(!</span>encontrado<span class="simbolo">)</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_9_' + cont_modificar + '" type="button" class="btn btn-warning btn-deshabilitar">Evaluar condición</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_9_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +

        //10 //cout<<"El nodo con valor "<<busqueda<<", no se encuentra en la lista";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"El nodo con valor "<<busqueda<<", no se encuentra en la lista";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"El nodo con valor "</span><span class="simbolo">&#60;&#60;</span>busqueda<span class="simbolo">&#60;&#60;</span><span class="impresion">", no se encuentra en la lista.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_10_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_10_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	    

        //11 //cout<<"Ingrese el nuevo valor de (int dato) del nodo:\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cout<<"Ingrese el nuevo valor de (int dato) del nodo:\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"Ingrese el nuevo valor de (int dato) del nodo:&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //12 //cin>>ptrNodoActual->dato;
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 3em;">' +
        //cin>>ptrNodoActual->dato;
        'cin<span class="simbolo">&#62;&#62;</span>ptrNodoActual<span class="simbolo">-&#62;</span>dato<span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_12_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_explicacion_12_' + cont_modificar + '" type="button" class="btn btn-info">explicación</button>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}else{
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}else{
        '<span class="simbolo">}</span><span class="palabra-reservada">else</span><span class="simbolo">{</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //13 //cout<<"La lista esta vacía.\n";
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 2em;">' +
        //cout<<"La lista esta vacía.\n";
        'cout<span class="simbolo">&#60;&#60;</span><span class="impresion">"La lista esta vacía.&#92;n"</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_13_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //}
        '<span class="simbolo">}</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //14 //getch();
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<span style="padding-left: 1em;">' +
        //getch();
        'getch<span class="simbolo">()</span><span class="simbolo">;</span>' +
        '</span>' +
        '</td>' +
        '<td>' +
        '<button id="btn_modificar_nodo_ejecutar_14_' + cont_modificar + '" type="button" class="btn btn-success btn-deshabilitar">ejecutar</button>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '</tr>' +	

        //}
        '<tr>' +
        '<td></td>' +
        '<td>' +
        //}
        '<span class="simbolo">}</span>' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    let fragment = create(tabla);
    agregar_tabla(fragment);

    document.getElementById("btn_modificar_nodo_ejecutar_2_" + cont_modificar).style.display = "block";

    //1 //void modificar(){
    document.getElementById("btn_modificar_nodo_explicacion_1_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "Función void modificar()",
            "explicacion": "Función que busca el primer nodo en la lista simplemente ligada cuyo valor en alguno de sus miembros sea igual al valor buscado para ser modificado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }	

    //2 //if(ptrNodoInicio != NULL && ptrNodoFinal != NULL){
    document.getElementById("btn_modificar_nodo_ejecutar_2_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_2_" + cont_modificar).style.display = "none";

        if(obj_ptrNodoInicio.nodo_conectado.key != null && obj_ptrNodoFinal.nodo_conectado.key != null){
            document.getElementById("btn_modificar_nodo_ejecutar_3_" + cont_modificar).style.display = "block";
        }else{
            document.getElementById("btn_modificar_nodo_ejecutar_13_" + cont_modificar).style.display = "block";
        }

    }
    document.getElementById("btn_modificar_nodo_explicacion_2_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica que la lista no esté vacía.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //3 //nodo *ptrNodoActual = ptrNodoInicio;
    document.getElementById("btn_modificar_nodo_ejecutar_3_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_3_" + cont_modificar).style.display = "none";

        obj_ptrNodoActual.declarada = true;
        obj_ptrNodoActual.nodo_conectado.key = obj_ptrNodoInicio.nodo_conectado.key;

        actualizar();

        document.getElementById("btn_modificar_nodo_ejecutar_4_" + cont_modificar).style.display = "block";

    }
    document.getElementById("btn_modificar_nodo_explicacion_3_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de una nueva variable tipo puntero con la que se ira recorriendo la lista y cuyo valor inicial es igual a la dirección de memoria del nodo que esta al inicio de la lista simplemente ligada.",
            "imagen_titulo": "Plan de programación 1 - Sintaxis declaración variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_1_declaracion_puntero.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //4 //int busqueda;
    document.getElementById("btn_modificar_nodo_ejecutar_4_" + cont_modificar).onclick = function() {
        document.getElementById("btn_modificar_nodo_ejecutar_4_" + cont_modificar).style.display = "none";
        obj_var_busqueda.declarada = true;
        obj_var_busqueda.valor = 0;
        actualizar();
        document.getElementById("btn_modificar_nodo_ejecutar_6_" + cont_modificar).style.display = "block";
    }
    document.getElementById("btn_modificar_nodo_explicacion_4_" + cont_modificar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de variable tipo int que guardara el número a buscar en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }


    //15 //bool encontrada = true;
    document.getElementById("btn_modificar_nodo_ejecutar_15_" + cont_modificar).onclick = function() {
        document.getElementById("btn_modificar_nodo_ejecutar_15_" + cont_modificar).style.display = "none";
        obj_var_encontrado.declarada = true;
        obj_var_encontrado.valor = true;
        actualizar();
        document.getElementById("btn_modificar_nodo_ejecutar_7_" + cont_modificar).style.display = "block";
    }
    document.getElementById("btn_modificar_nodo_explicacion_15_" + cont_modificar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de variable tipo int que guardara el número a buscar en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //5 //cout<<"Ingrese el dato a modificar:\n";

    //6 //cin>>busqueda;
    document.getElementById("btn_modificar_nodo_ejecutar_6_" + cont_modificar).onclick = function() {

        $('#modal_dato_busqueda').modal('show');

        document.getElementById("btn_modal_dato_busqueda_aceptar").onclick = function() {

            $('#modal_dato_busqueda').modal('hide');

            obj_var_busqueda.valor = document.getElementById("input_dato_busqueda").value;

            document.getElementById("input_dato_busqueda").value = "";

            if(validar_numero(obj_var_busqueda.valor)){

                document.getElementById("btn_modificar_nodo_ejecutar_6_" + cont_modificar).style.display = "none";

                actualizar();

                document.getElementById("btn_modificar_nodo_ejecutar_15_" + cont_modificar).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }

    //7 //while(encontrado && ptrNodoActual->dato != busqueda){
    document.getElementById("btn_modificar_nodo_ejecutar_7_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_7_" + cont_modificar).style.display = "none";

        if(obj_var_encontrado.valor && objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor != obj_var_busqueda.valor){
            document.getElementById("btn_modificar_nodo_ejecutar_16_" + cont_modificar).style.display = "block";
        }else{
            document.getElementById("btn_modificar_nodo_ejecutar_9_" + cont_modificar).style.display = "block";
        }

    }
    document.getElementById("btn_modificar_nodo_explicacion_7_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Ciclo while con el que se recorrerá la lista mientras se cumplan las siguientes condiciones: que no se haya llegado al final de la lista (ptrNodoActual != NULL) y el valor del miembro dato del nodo al que apunta el puntero ptrNodoActual no sea el valor buscado (ptrNodoActual->dato != búsqueda).",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }


    //16 //if (ptrNodoActual->ptrNodoSiguiente != ptrNodoInicio){
    document.getElementById("btn_modificar_nodo_ejecutar_16_" + cont_modificar).onclick = function() {
        document.getElementById("btn_modificar_nodo_ejecutar_16_" + cont_modificar).style.display = "none";
        if(objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key != obj_ptrNodoInicio.nodo_conectado.key){
            document.getElementById("btn_modificar_nodo_ejecutar_8_" + cont_modificar).style.display = "block";
        }else{
            document.getElementById("btn_modificar_nodo_ejecutar_17_" + cont_modificar).style.display = "block";
        }
    }
    document.getElementById("btn_modificar_nodo_explicacion_16_" + cont_modificar).onclick = function() {
        let objExplicacion = {
            "titulo": "Función void insertar_despues_de()",
            "explicacion": "Se verifica si ptrNodoActual no está apuntando al último nodo de la lista simplemente ligada. En caso de ser verdad, se sigue con el recorrido de la lista simplemente ligada, en caso de ser negativo, el puntero ptrNodoActual se encuentra en el último nodo de la lista por lo que la variable encontrado pasara a false.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //8 //ptrNodoActual = ptrNodoActual->ptrNodoSiguiente;
    document.getElementById("btn_modificar_nodo_ejecutar_8_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_8_" + cont_modificar).style.display = "none";

        obj_ptrNodoActual.nodo_conectado.key = objetos[obj_ptrNodoActual.nodo_conectado.key].ptrLigaSig.key;

        actualizar();

        document.getElementById("btn_modificar_nodo_ejecutar_7_" + cont_modificar).style.display = "block";

    }
    document.getElementById("btn_modificar_nodo_explicacion_8_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se le asigna al puntero ptrNodoActual la dirección de memoria del siguiente nodo de la lista simplemente ligada por medio del miembro ptrNodoSiguiente del nodo al que apunta actualmente ptrNodoActual.",
            "imagen_titulo": "Plan de programación 6 - Acceder a un miembro de la estructura por medio de una variable tipo puntero.",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}

    //17 //encontrada = false;
    document.getElementById("btn_modificar_nodo_ejecutar_17_" + cont_modificar).onclick = function() {
        document.getElementById("btn_modificar_nodo_ejecutar_17_" + cont_modificar).style.display = "none";
        obj_var_encontrado.valor = false;
        actualizar();
        document.getElementById("btn_modificar_nodo_ejecutar_7_" + cont_modificar).style.display = "block";
    }
    document.getElementById("btn_modificar_nodo_explicacion_17_" + cont_modificar).onclick = function() {
        let objExplicacion = {
            "titulo": "",
            "explicacion": "Declaración de variable tipo int que guardara el número a buscar en la lista.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };
        crear_explicacion(objExplicacion, "none");
    }

    //9 //if(!encontrado){
    document.getElementById("btn_modificar_nodo_ejecutar_9_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_9_" + cont_modificar).style.display = "none";

        if(!obj_var_encontrado.valor){
            document.getElementById("btn_modificar_nodo_ejecutar_10_" + cont_modificar).style.display = "block";
        }else{
            document.getElementById("btn_modificar_nodo_ejecutar_12_" + cont_modificar).style.display = "block";
        }

    }
    document.getElementById("btn_modificar_nodo_explicacion_9_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se verifica si el puntero ptrNodoActual llego al final de la lista, si ptrNodoActual apunta a NULL.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //10 //cout<<"El nodo con valor "<<busqueda<<", no se encuentra en la lista";
    document.getElementById("btn_modificar_nodo_ejecutar_10_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_10_" + cont_modificar).style.display = "none";

        alert("El nodo con valor de dato " + obj_var_busqueda.valor + ", no se encuentra en la lista")

        document.getElementById("btn_modificar_nodo_ejecutar_14_" + cont_modificar).style.display = "block";

    }
    document.getElementById("btn_modificar_nodo_explicacion_10_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "ptrNodoActual apunta NULL por lo que se llegó al final de la lista y no se encontró un nodo cuyo miembro dato tenga el valor buscado.",
            "imagen_titulo": "",
            "imagen_ruta": "",
        };

        crear_explicacion(objExplicacion, "none");

    }

    //}else{

    //11 //cout<<"Ingrese el nuevo valor de (int dato) del nodo:\n";

    //12 //cin>>ptrNodoActual->dato;
    document.getElementById("btn_modificar_nodo_ejecutar_12_" + cont_modificar).onclick = function() {

        $('#modal_dato_nodo_modificar').modal('show');

        document.getElementById("btn_modal_dato_nodo_modificar_aceptar").onclick = function() {

            $('#modal_dato_nodo_modificar').modal('hide');

            var nuevo_dato_valor = document.getElementById("input_dato_valor_modificar").value;

            document.getElementById("input_dato_valor_modificar").value = "";

            if(validar_numero(nuevo_dato_valor)){

                document.getElementById("btn_modificar_nodo_ejecutar_12_" + cont_modificar).style.display = "none";

                objetos[obj_ptrNodoActual.nodo_conectado.key].dato.valor = nuevo_dato_valor;

                actualizar();

                document.getElementById("btn_modificar_nodo_ejecutar_14_" + cont_modificar).style.display = "block";

            }else{

                agregar_advertensia("Ingrese un valor de tipo Entero (Integer)");

            }

        }

    }
    document.getElementById("btn_modificar_nodo_explicacion_12_" + cont_modificar).onclick = function() {

        let objExplicacion = {
            "titulo": "",
            "explicacion": "Se encontró un nodo en el cual, su miembro dato es igual al valor buscado y se procederá con la modificación del valor del miembro dato del nodo.",
            "imagen_titulo": "Plan de programación 6 - Sintaxis acceso a un miembro de una estructura haciendo uso de una variable tipo puntero",
            "imagen_ruta": "/imgs/listas_ligadas/listas_simplemente_ligadas/planes_programacion/plan_6_acceso_miembro_estructura.PNG",
        };

        crear_explicacion(objExplicacion, "block");

    }

    //}

    //}else{

    //13 //cout<<"La lista esta vacía.\n";
    document.getElementById("btn_modificar_nodo_ejecutar_13_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_13_" + cont_modificar).style.display = "none";

        alert("La lista esta vacía.");

        document.getElementById("btn_modificar_nodo_ejecutar_14_" + cont_modificar).style.display = "block";

    }

    //}

    //14 //getch();
    document.getElementById("btn_modificar_nodo_ejecutar_14_" + cont_modificar).onclick = function() {

        document.getElementById("btn_modificar_nodo_ejecutar_14_" + cont_modificar).style.display = "none";

        // fin de la función

        obj_ptrNodoActual.declarada = false;
        obj_ptrNodoActual.nodo_conectado.key = null;

        obj_var_busqueda.declarada = false;
        obj_var_busqueda.valor = 0;

        obj_var_encontrado.declarada = false;
        obj_var_encontrado.valor = false;

        actualizar();

        cont_modificar += 1;

        desbloquear_funciones();

    }

    //}

}
