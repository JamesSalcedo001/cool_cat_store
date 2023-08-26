module Api
    class ProductsController < ApplicationController

        def create_stripe_product
            product = Stripe::Product.create(stripe_product_params.to_h)
            render json: product.to_h
        end

        def create_stripe_price
            price = Stripe::Price.create(stripe_price_params.to_h)
            render json: price.to_h
        end



        private 

        def stripe_product_params
            params.permit(:name, :description, images: [])
        end

        def stripe_price_params
            params.permit(:unit_amount, :currency, :product)
        end
    end
end