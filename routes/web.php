<?php

use Illuminate\Support\Facades\Route;


Route::GET('/', function(){
    return view('index');
});

Route::GET('/about', function(){
    return view('about');
});
