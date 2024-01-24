<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use ErrorException;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    /** Pay order via Stripe */
    public function payByStripe(Request $request)
    {
        try {
            // Set your Stripe Secret Key
            Stripe::setApiKey('sk_test_VePHdqKTYQjKNInc7u56JBrQ');

            // Retrieve JSON from POST body
            $jsonObj = $request->json()->all();

            // Create a PaymentIntent with amount and currency
            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $this->calculateOrderAmount($jsonObj['items']),
                'currency' => 'usd',
                'description' => 'React Store',
                'setup_future_usage' => 'on_session',
            ]);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];

            return response()->json($output);
        } catch (ErrorException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    /** Calculate order total for Stripe */
    public function calculateOrderAmount(array $items): int
    {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        foreach ($items as $item) {
            return $item['amount'] * 100;
        }
    }
}
