Rails.application.routes.draw do
  resources :events do
    collection { post :import }
  end
  root to: 'events#index'
  get 'get_dataset', to: 'events#get_dataset'
end
