// CheckoutForm.jsx
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js n'a pas encore été chargé.
            // Assurez-vous de désactiver la soumission du formulaire jusqu'à ce que Stripe.js soit chargé.
            return;
        }

        setIsProcessing(true);

        const response = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Assurez-vous de changer cela pour votre page de confirmation de paiement
            },
            redirect: 'if_required'
        });

        if (response.error && response.error.type === "card_error" || response.error && response.error.type === "validation_error") {
            setMessage(response.error.message);
        } else if(response.paymentIntent.id) {
            // Affichez un message de succès ou redirigez l'utilisateur
        }

        setIsProcessing(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button disabled={isProcessing || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isProcessing ? "Processing ... " : "Pay now"}
                </span>
            </button>
            {/* Affichez les messages d'erreur ou de succès */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}
