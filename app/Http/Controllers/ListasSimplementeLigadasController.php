<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListasSimplementeLigadasController extends Controller
{

    public function index(){

    	return view('listas-ligadas.listas-simplemente-ligadas.index', []);
        
    }

}
