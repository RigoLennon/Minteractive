<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Product;
use Illuminate\Support\Facades\DB;
use Validator;

class ProductsController extends Controller
{
    public function index(){
        //return Product::orderBy('id', 'DESC')->get();
        $products = Product::all();

        return $this->sendResponse($products->toArray(), 'Todos los productos')
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
        /*Product::insert([
            'name' => $request->input('nombre'),
            'description' => $request->input('descripcion'),
            'price' => $request->input('precio'),
            'short_descrip' => $request->input('short_descrip'),
        ]);

        $response['message'] = 'Guardado con exito';
        $response['success'] = true;

        return $response;*/
        
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
