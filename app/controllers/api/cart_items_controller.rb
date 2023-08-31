module Api
    class CartItemsController < ApplicationController

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
            cart_item = CartItem.find(params[:id])
            new_quantity = params[:quanity]
            if new_quantity.to_i.zero?
                cart_item.destroy
            else
                cart_item.update!(quantity: new_quantity)
            end
            render json: cart_item
        end

        def destroy
            cart_item = CartItem.find(params[:id])
            cart_item.destroy
            head :no_content
        end

    end
end
