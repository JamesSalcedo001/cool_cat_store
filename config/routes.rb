Rails.application.routes.draw do
  # resources :cart_items
  # resources :carts
  # resources :products
  # resources :users

  namespace :api do
    post '/checkout', to: "checkout#create"
  end

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
