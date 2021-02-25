<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getWeatherInDB($id)
    {
        $city = City::find($id);

        $response = Http::get('http://api.openweathermap.org/data/2.5/find?lat='.$city->latitude.'&lon='.$city->longitude.'&appid=074f9d187e09e88f1e5e76f928ba49d8');
        
        return $response["list"];
    
    }

        /**
     * get the weather using your own Lat/Long 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getWeatherWithRequest(Request $request)
    {
        $lat = $request->latitude;
        $long = $request->longitude;

        $response = Http::get('http://api.openweathermap.org/data/2.5/find?lat='.$lat.'&lon='.$long.'&appid=074f9d187e09e88f1e5e76f928ba49d8');
        
        return $response["list"];
    }

}
