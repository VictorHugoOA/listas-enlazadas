<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApuntadoresController extends Controller
{

    public function index(){

    	return view('apuntadores.index', []);
		
	}

	public function visualizacion(){

    	return view('apuntadores.visualizacion.index', []);
		
	}


}
