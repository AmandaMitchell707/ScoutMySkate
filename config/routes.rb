Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
      resources :users, except: [:destroy] do
        resources :skate_routes, only: [:index]
      end

      resource :session, only: [:new, :create, :destroy]
      resources :skate_routes
      # post '/search', to: 'users#search'
    end

end
