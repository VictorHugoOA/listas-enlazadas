<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\User;
use App\Bitacora;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        Event::listen('Illuminate\Auth\Events\Login', function() {
            //dd("it worked");

            date_default_timezone_set("America/Mexico_City"); 

            $bitacora_insert = new Bitacora;

            $bitacora_insert->user_id = \Auth::id();

            $bitacora_insert->fecha_login = date("Y-m-d H:i:s");

            $bitacora_insert->fecha_logout = null;

            $bitacora_insert->save();

            \Session::put('session_bitacora', $bitacora_insert);

            /*
                $userId = \Auth::id();
                $user = User::find($userId);
            */
        });

        Event::listen('Illuminate\Auth\Events\Logout', function() {

            date_default_timezone_set("America/Mexico_City");

            $bitacora = \Session::get('session_bitacora');
            
            Bitacora::where('id', $bitacora->id)
                ->update(['fecha_logout' => date("Y-m-d H:i:s")]);

            \Session::forget('session_bitacora');

        });

    }
}
