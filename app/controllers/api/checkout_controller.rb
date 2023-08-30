module Api
  class CheckoutController < ApplicationController

      def create

        user_cart = @current_user.cart

        items = user_cart.cart_items.map do |item|
          {
            price: item.product.stripe_id,
            quantity: item.quantity
          }
        end

        return render json: { error: "Empty Cart"}, status: :unprocessable_entity if items.empty? 


          session = Stripe::Checkout::Session.create(
              line_items: items,
              mode: 'payment',
              # success_url: "http://localhost:4000/success",
              # cancel_url: "http://localhost:4000/cancel",
              success_url: "#{ENV['DEPLOYED_URL']}/success",
              cancel_url: "#{ENV['DEPLOYED_URL']}/cancel",
            )
         render json: { id: session.id }
      end

  end
end