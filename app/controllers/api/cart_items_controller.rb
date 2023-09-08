module Api
    class CartItemsController < ApplicationController
        before_action :find_cart_item, only: [:update, :destroy]

        def index
            cart_items = @current_user.cart.cart_items.includes(:product)
            render json: cart_items
        end

        def create
            cart_item = @current_user.cart.cart_items.find_or_initialize_by(product_id: params[:product_id])

            cart_item.quantity = params[:quantity].to_i

            if cart_item.save
                render json: { message: "Added to Cart!"}
            else
                render json: { errors: cart_item.errors.full_messages }, status: 422
            end
        end

        def update
            new_quantity = params[:quantity]
            if new_quantity.to_i.zero?
                @found_cart_item.destroy
            else
                @found_cart_item.update!(quantity: new_quantity)
            end
            render json: @found_cart_item
        end

        def destroy
            @found_cart_item.destroy
            head :no_content
        end



        private

        def find_cart_item
            @found_cart_item = @current_user.cart.cart_items.find(params[:id])
            render json: {error: "Cart item not found"}, status: :not_found unless @found_cart_item
        end

    end
end
