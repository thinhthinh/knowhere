Rails.application.routes.draw do
 
  root 'secrets#welcome'
  get 'secrets/welcome' => 'secrets#welcome', as: :secrets_welcome
  get 'secrets/test' => 'secrets#test', as: :secrets_test


  get 'login' => 'sessions#new', :as => 'login'
  get 'logout' => 'sessions#destroy', :as => 'logout'
  get 'signup' => 'users#new', :as => 'signup'
  get 'my_secrets' => 'secrets#my_secrets', :as => 'my_secrets'
  get 'all_secrets' => 'maps#all_secrets', :as => "all_secrets"
  get 'nearby_secrets' => 'maps#nearby_secrets', :as => "nearby_secrets"
  get 'area_secrets' => 'maps#area_secrets', :as => "area_secrets"
  post '/secrets/:id/upvote' => 'secrets#upvote', :as => :upvote
  get 'about' => 'application#about'
  
  resources :current_locations, :only => [:create]
  resources :secrets
  resources :users, except: [:index]
  resources :sessions, :only => [:create]

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
