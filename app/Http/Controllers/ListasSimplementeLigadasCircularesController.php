<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListasSimplementeLigadasCircularesController extends Controller
{

    public function index(){
    	
    	return view('listas-ligadas.listas-simplemente-ligadas-circulares.index', []);
        
    }

}
