<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductsController extends Controller
{
    public function index(){
        return Product::all();
    }

    public function show(Product $product){
        return $product;
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
