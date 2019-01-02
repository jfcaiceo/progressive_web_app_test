Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#main'
  get '/offline' => 'application#offline'

  namespace :api, constraints: { format: 'json' } do
    resources :dogs, only: [:index, :create], defaults: { format: :json }
    resources :cats, only: [:index], defaults: { format: :json }
  end
  get '*path', to: 'application#main'
end
