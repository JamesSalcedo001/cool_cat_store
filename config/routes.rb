Rails.application.routes.draw do
  # resources :cart_items
  # resources :carts
  # resources :products
  # resources :users

  
  get '/api/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
