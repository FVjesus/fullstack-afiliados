<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\JsonResponse;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $transactions = DB::table('transactions')
            ->join('products', 'products.id', '=', 'transactions.product_id')
            ->join('sellers', 'sellers.id', '=', 'transactions.seller_id')
            ->select('transactions.*', 'products.name as product', 'sellers.name as seller')
            ->get();

        return response()->json(['transactions' => $transactions]);
    }

}
