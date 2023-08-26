Rails.application.routes.draw do
  # resources :cart_items
  # resources :carts
  # resources :products
  # resources :users

  namespace :api do
    post '/checkout', to: "checkout#create"
    post "/create_stripe_product", to: "products#create_stripe_product"
    post "/create_stripe_price", to: "products#create_stripe_price"
  end

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end


