<?php

namespace App\Http\Middleware;

use Closure;
use App\User;

class PermisosRutas
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles)
    {
        $userId = \Auth::id();
        $user = User::find($userId);

        $permitido = false;

        for($i = 0; $i < sizeof($roles); $i++){
            if($user->rol_id == $roles[$i]){
                $permitido = true;
            }
        }

        if($permitido){
            return $next($request);
        }else{
            return redirect('/');
        }
    }
}
