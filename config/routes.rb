Rails.application.routes.draw do
  resources :events do
    collection { post :import }
  end
end
