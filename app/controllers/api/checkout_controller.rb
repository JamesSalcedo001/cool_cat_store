module Api
  class CheckoutController < ApplicationController

      def create
          session = Stripe::Checkout::Session.create({
              line_items: [{
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                price: 'price_1NiXnrIBnVrhy9EW9a3soJOj',
                quantity: 1,
              }],
              mode: 'payment',
              # success_url: "http://localhost:4000/success",
              # cancel_url: "http://localhost:4000/cancel",
              success_url: "#{ENV['DEPLOYED_URL']}/success",
              cancel_url: "#{ENV['DEPLOYED_URL']}/cancel",
            })
            redirect_to session.url, allow_other_host: true
      end

  end
end