<?php

namespace App\Http\Controllers;

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
                'stateContry' => 'required|max:191',
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
