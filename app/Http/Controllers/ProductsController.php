<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function index(){
        return Product::orderBy('id', 'DESC')->get();
    }

    public function show(Product $product){
        /*$product = DB::table('products')
            ->join('product_categories', 'products.cat_id', '=', 'product_categories.id')
            ->select('products.*', 'product_categories.cat_name')
            //->orderBy('prodid', 'DESC')
            ->get();*/
        return $product = DB::table('products')
        ->join('product_categories', 'products.cat_id', '=', 'product_categories.id')
        ->select('products.*', 'product_categories.cat_name')
        //->orderBy('prodid', 'DESC')
        ->get();
    }

    public function store(Request $request){
        $this->validate($request,[
            'name' => 'required|unique:products|max:255',
            'description'=> 'required',
            'price' => 'required|integer',
            'file' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        return response()->json($product,201);
    }

    public function update(Request $request, Product $product){
        $product->update($request->all());

        return response()->json($product, 200);
    }

    public function delete(Product $product){
        $product->delete();

        return response()->json(null, 204);
    }
}
