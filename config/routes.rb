Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
      resources :users do
        resources :routes, only: [:index]
      end

      resource :session, only: [:new, :create, :destroy]
      resources :routes
      # post '/search', to: 'users#search'
    end

end
