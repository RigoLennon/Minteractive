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
        $product_id = $product->id;
        $products = DB::table('products')
            ->join('product_categories', 'products.cat_id', '=', 'product_categories.id')
            ->select('products.*', 'product_categories.cat_name')
            ->where('products.id', '=', $product_id)
            ->get();
        return $products;
    }

    public function store(Request $request){
        /*$this->validate($request,[
            'name' => 'required|unique:products|max:255',
            'description'=> 'required',
            'price' => 'required|integer',
        ]);*/

        $product = new Product([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'price' => $request->get('price'),
            'short_descrip' => $request->get('short_descrip'),
        ]);

        $product->save();

        //return response()->json($product,201);
        return response()->json('Se añadio el producto correctamente.');
    }

    public function edit($id){
        $product = Product::find($id);

        return response()->json($product);
    }

    /*public function update(Request $request, Product $product){
        $product->update($request->all());

        return response()->json($product, 200);


    }*/

    public function update(Request $request, $id){
        $product = Product::find($id);
        $product->name = $request->get('name');
        $product->description = $request->get('description');
        $product->price = $request->get('price');
        $product->short_descrip = $request->get('short_descrip');

        return response()->json('Actualizado correctamente.');
    }

    public function destroy($id){
        $product = Product::find($id);
        $product->delete();

        return response()->json('Eliminado correctamente.');
    }

    public function delete(Product $product){
        $product->delete();

        return response()->json(null, 204);
    }
}
