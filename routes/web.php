<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Middleware\PermisosRutas;

Auth::routes();

//pagina principal
Route::get('/', 'MainController@index');

Route::group(['middleware' => ['auth','roles:1,2,3']], function(){

	//lista simplemente ligada
	Route::get('listas-simplemente-ligadas/index', 'ListasSimplementeLigadasController@index');
	//PRINCIPAL lista simplemente ligada
	Route::resource('listas-simplemente-ligadas','ListasSimplementeLigadasController');

	//Listas doblemente ligadas
	Route::get('listas-doblemente-ligadas/index', 'ListasDoblementeLigadasController@index');

	//Listas simplemente ligadas circulares
	Route::get('listas-simplemente-ligadas-circulares/index', 'ListasSimplementeLigadasCircularesController@index');

});
