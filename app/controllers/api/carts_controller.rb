module Api
    class CartsController < ApplicationController
        def clear
            @current_user.cart.cart_items.destroy_all
            head :no_content
        end
    end
end