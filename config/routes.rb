Rails.application.routes.draw do
  namespace :api do
    resources :cart_items
    resources :carts, only: [:show]
    resources :products, only: [:index]
    resources :users, only: [:update, :destroy]

    delete "/clear", to: "carts#clear"
    post '/checkout', to: "checkout#create"
    get "/me", to: "users#me"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  
  end

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end


