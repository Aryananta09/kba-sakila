<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    //
    public function index()
    {

        $results = DB::table('payment as p')
        ->join('rental as r', 'p.rental_id', '=', 'r.rental_id')
        ->select(
            DB::raw('SUM(p.amount) as revenue'),
            DB::raw('COUNT(r.rental_id) as orders'),
            DB::raw('ROUND(SUM(p.amount) / COUNT(r.rental_id), 2) as revenue_per_order')
        )
        ->first();

        // Menjalankan query yang mirip dengan query SQL yang kamu berikan
        $rentalCategory = DB::table('rental as r')
            ->join('inventory as i', 'r.inventory_id', '=', 'i.inventory_id')
            ->join('film_category as fc', 'i.film_id', '=', 'fc.film_id')
            ->join('category as c', 'fc.category_id', '=', 'c.category_id')
            ->select(
                'c.name as category_name',
                DB::raw('COUNT(r.rental_id) as rental_count'),
                DB::raw('ROUND((COUNT(r.rental_id) * 100.0 / (SELECT COUNT(*) FROM rental)), 2) as percentage')
            )
            ->groupBy('c.name')
            ->get();
        
        // Menjalankan query untuk mengambil pembayaran berdasarkan store dan bulan
        $payments = DB::table('payment as p')
            ->join('staff as s', 'p.staff_id', '=', 's.staff_id')
            ->join('store as sto', 's.staff_id', '=', 'sto.manager_staff_id')
            ->select(
                DB::raw('MONTH(p.payment_date) as payment_month'),
                DB::raw('SUM(p.amount) as total_payment')
    )
            ->groupBy(DB::raw('MONTH(p.payment_date)'))
            ->get();

         $rentalCountry = DB::table('rental as r')
            ->join('inventory as i', 'r.inventory_id', '=', 'i.inventory_id')
            ->join('store as s', 'i.store_id', '=', 's.store_id')
            ->join('address as a', 's.address_id', '=', 'a.address_id')
            ->join('city as c', 'a.city_id', '=', 'c.city_id')
            ->join('country as c2', 'c.country_id', '=', 'c2.country_id')
            ->select(
                'c2.country',
                DB::raw('COUNT(r.rental_id) AS rental_count'),
                DB::raw('ROUND((COUNT(r.rental_id) * 100.0 / (SELECT COUNT(*) FROM rental)), 2) AS percentage')
            )
            ->groupBy('c2.country')
            ->get();

        $revenueStore = DB::table('payment as p')
            ->join('staff as st', 'p.staff_id', '=', 'st.staff_id')
            ->join('store as s', 'st.staff_id', '=', 's.manager_staff_id')
            ->select(
                's.store_id',
                DB::raw('MONTH(p.payment_date) as month'),
                DB::raw('SUM(p.amount) as total_amount')
            )
            ->groupBy('s.store_id', DB::raw('MONTH(p.payment_date)'))
            ->get();

            $rentalActor = DB::table('rental as r')
            ->join('inventory as i', 'r.inventory_id', '=', 'i.inventory_id')
            ->join('film_actor as fa', 'i.film_id', '=', 'fa.film_id')
            ->join('actor as a', 'fa.actor_id', '=', 'a.actor_id')
            ->select(
                DB::raw("CONCAT(a.first_name, ' ', a.last_name) AS full_name"),
                DB::raw("COUNT(r.rental_id) AS total_rental")
                
            )
            ->groupBy('a.actor_id', 'a.first_name', 'a.last_name') // Tambahkan kolom ke GROUP BY
            ->orderBy('total_rental', 'desc')
            ->limit(10)
            ->get();


        // return response()->view('index')->with($rentalData);
        return view('index', [ 'results' => $results,'payments' => $payments, 'rentalCategory' => $rentalCategory, 'rentalCountry' => $rentalCountry, 'revenueStore' => $revenueStore, 'rentalActor' => $rentalActor]);
    }

}
