<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VariablesTiposDeDatosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        return view('variables-y-tipos-de-datos.index', []);
        
    }

}
