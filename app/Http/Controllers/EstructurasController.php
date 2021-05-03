<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EstructurasController extends Controller
{

	public function index(){

		
		
	}

    public function estructuras(){



    	return view('estructuras.estructuras.index', []);
        
    }

    public function apuntadores_a_estructuras(){



    	return view('estructuras.apuntadores-a-estructuras.index', []);
        
    }

}
