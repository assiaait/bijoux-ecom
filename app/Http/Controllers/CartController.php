<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addtocart(Request $request){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $product_id = $request->product_id;
            $product_qty = $request->product_qty;
            
            $productCheck = Product::where('id',$product_id)->first();
            if ($productCheck) {
                if (Cart::where('product_id', $product_id)->where('user_id', $user_id)->exists()) {
                    return response()->json([
                        'status' => 409,
                        'message' => $productCheck ->name.'Already Added to cart'
                    ]);
                }else {
                    $cartitem = new Cart;
                    $cartitem->user_id = $user_id;
                    $cartitem->product_id = $product_id;
                    $cartitem->product_qty = $product_qty;
                    $cartitem->save();

                    return response()->json([
                        'status' => 201,
                        'message' => 'Added to cart in cart'
                    ]);
                }
                
            }else {
                
                return response()->json([
                    'status' => 404,
                    'message' => 'Product Not Found'
                ]);
            }
            
        }else {
            return response()->json([
                'status' => 200,
                'message' => 'Login to Add to cart'
            ]);
        }
    }

    public function viewcart(){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartitems = Cart::where('user_id',$user_id)->get();

            return response()->json([
                'status' => 200,
                'cart' =>  $cartitems,
            ]);
        }else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to Add to view cart'
            ]);
        }
    }

    public function updatequantity($cart_id, $scope){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartitems = Cart::where('id',$cart_id )->where('user_id', $user_id)->first();
            if ($scope == "inc") {
                $cartitems->product_qty += 1;
            }else if ($scope == "dec") {
                $cartitems->product_qty -= 1;
            }
            $cartitems->update();
            return response()->json([
                'status' => 200,
                'message' => 'quantity updated'
            ]);
        }else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to continue'
            ]);
        }
    }

    public function deleteCartitem($cart_id){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartitems = Cart::where('id',$cart_id )->where('user_id', $user_id)->first();

            if ($cartitems) {
                $cartitems->delete();
                return response()->json([
                    'status' => 200,
                    'message' => 'Cart item Removed successfully'
                ]);
            }else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Cart item Not Found'
                ]);
            }
        }else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to continue'
            ]);
        }
    }
}
