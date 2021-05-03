<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListasDoblementeLigadasController extends Controller
{

    public function index(){
            	


    	return view('listas-ligadas.listas-doblemente-ligadas.index', []);
        
    }

}
