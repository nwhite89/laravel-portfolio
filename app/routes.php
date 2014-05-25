<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function() {
	return View::make('hello');
});

Route::get('/api/instagram', function() {
    $instagrams = DB::table('td_instagram_cache')
        ->take(6)
        ->get();

    return Response::json($instagrams);
});

Route::get('/api/projects', function () {
    $projects = DB::table('td_development')
        ->orderBy('date', 'DESC')
        ->where('published', '!=','1')
        ->get();

    return Response::json($projects);
});
