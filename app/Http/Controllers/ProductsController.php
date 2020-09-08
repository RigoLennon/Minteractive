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

    /*
    public function view(Request $id)
{
    $user_id = $id->input('id');
    $users = DB::table('users')
                ->select('users.*','role_user.fieldName','roles.fieldName')
                ->leftjoin('role_user', 'users.id', '=', 'role_user.user_id')
                ->leftjoin('roles', 'roles.id', '=', 'role_user.role_id')
                ->where('users.id', '=', $user_id)->get();
    return view('/admin/view_user', ['users' => $users]);
}

$users = DB::table('users')
            ->join('contacts', 'users.id', '=', 'contacts.user_id')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'contacts.phone', 'orders.price')
            ->get();

    */

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
