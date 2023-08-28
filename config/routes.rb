Rails.application.routes.draw do
  namespace :api do
    resources :cart_items
    resources :carts
    resources :products, only: [:index, :show]
    resources :users, only: [:update, :destroy]

    post '/checkout', to: "checkout#create"
    get "/me", to: "users#me"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    # post "/create_stripe_product", to: "products#create_stripe_product"
    # post "/create_stripe_price", to: "products#create_stripe_price"
  end

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end


