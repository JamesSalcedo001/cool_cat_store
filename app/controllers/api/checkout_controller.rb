module Api
  class CheckoutController < ApplicationController
      Stripe.api_key = 'sk_test_51NRQXgIBnVrhy9EW7lXNFqqoSsM6VCXDN1IH2dcHRPm9ZqLUIro2MmWVACNNYupLgKAjmkg6FKwqGr5c7ak1W5kK00aClNree3'


      def create
          session = Stripe::Checkout::Session.create({
              line_items: [{
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                price: 'price_1NiXnrIBnVrhy9EW9a3soJOj',
                quantity: 1,
              }],
              mode: 'payment',
              success_url: 'http://localhost:4000',
              cancel_url: 'http://localhost:4000',
            })
            redirect_to session.url, allow_other_host: true
      end

  end
end