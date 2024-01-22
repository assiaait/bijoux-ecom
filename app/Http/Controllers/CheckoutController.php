<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CheckoutController extends Controller
{
    public function placeorder(Request $request)
    {
        if (auth('sanctum')->check()) {
            $validator = Validator::make($request->all(), [
                'firstname' => 'required|max:191',
                'lastname' => 'required|max:191',
                'companyname' => 'required|max:191',
                'streetaddress' => 'required|max:191',
                'streetaddressoptional' => 'required|max:191',
                'city' => 'required|max:191',
                'state_contry' => 'required|max:191',
                'zip' => 'required|max:191',
                'phone' => 'required|max:191',
                'email' => 'required|max:191',
                'ordernotes' => 'required|max:191',
            ]);
            if ($validator->fails()) {
                return response()->json([
                        'status' => 422,
                        'errors' => $validator->messages(),
                    ]);
            }else {

                $user_id = auth('sanctum')->user()->id;
                $order = new Order;
                $order->user_id = $user_id;
                $order->firstname = $request->firstname;
                $order->lastname = $request->lastname;
                $order->companyname = $request->companyname;
                $order->streetaddress = $request->streetaddress;
                $order->streetaddressoptional = $request->streetaddressoptional;
                $order->city = $request->city;
                $order->state_contry = $request->state_contry;
                $order->zip = $request->zip;
                $order->phone = $request->phone;
                $order->email = $request->email;
                $order->ordernotes = $request->ordernotes;
                $order->shipping_type = "free";
                $order->payment_mode = "COD";
                $order->total_amount = 0;
                $order->save();

                $cart = Cart::where('user_id', $user_id)->get();

                $orderitems = [];
                foreach ($cart as $item) {
                    $orderitems[] = [
                        'product_id'=>$item->product_id,
                        'qty'=>$item->product_qty,
                        'price'=>$item->product->price,
                        'price'=>$item->product->price,
                    ];

                    $item->product->update([
                        'stock'=>$item->product->stock - $item->product_qty
                    ]);
                }

                $order->orderitems()->createMany($orderitems);
                Cart::destroy($cart);
                return response()->json([
                    'status' => 200,
                    'message' => "Order placed successfully",
                ]);
            }

        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to continue'
            ]);
        }
    }
}
