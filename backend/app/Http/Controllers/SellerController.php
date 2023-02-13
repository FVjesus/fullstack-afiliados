<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\JsonResponse;

class SellerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $sellers = DB::table('sellers')
            ->join('transactions', 'sellers.id', '=', 'transactions.seller_id')
            ->select('sellers.*', DB::raw('SUM(transactions.value) as amount'))
            ->orderBy("sellers.created_at")
            ->groupBy("sellers.id")
            ->get();

        return response()->json(['sellers' => $sellers]);
    }

}
