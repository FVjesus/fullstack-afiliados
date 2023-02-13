<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Seller;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MainController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $file = $request->file('file')->get();

        foreach (explode("\n", $file) as $key => $line) {

            if (mb_substr($line, 0, 1) == "") {
                break;
            }

            $product = Product::where('name', mb_substr($line, 26, 30))->first();
            if ($product == null) {
                $product = Product::create(['name' => mb_substr($line, 26, 30)]);
            }

            $seller = Seller::where('name', mb_substr($line, 66, 20))->first();

            if ($seller == null) {
                $seller = Seller::create(['name' => mb_substr($line, 66, 20)]);
            }

            $transaction = new Transaction;
            $transaction->type = mb_substr($line, 0, 1);
            $transaction->date = date("y-m-d  H:i:s", strtotime(mb_substr($line, 1, 25)));
            $transaction->value = mb_substr($line, 56, 10);
            $transaction->product_id = $product->id;
            $transaction->seller_id = $seller->id;

            if (!$transaction->save()) {
                abort(500, 'Cloud not create transaction');
            }
        }

        return \response()->json([
            "message" => 'Parsing completed'
        ]);
    }
}
