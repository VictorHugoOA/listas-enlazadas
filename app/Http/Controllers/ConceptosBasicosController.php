<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConceptosBasicosController extends Controller
{

    public function index(){
        return view('conceptos-basicos.index', []);
    }

    public function identificadores(){
        return view('conceptos-basicos.identificadores.index', []);
    }

    public function tipos_de_datos(){
        return view('conceptos-basicos.tipos-de-datos.index', []);
    }

    public function variables(){
        return view('conceptos-basicos.variables.index', []);
    }

}
