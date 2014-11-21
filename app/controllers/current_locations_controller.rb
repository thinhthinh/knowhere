class CurrentLocationsController < ApplicationController
  
  def create
    session[:longitude] = params[:longitude]
    session[:latitude] = params[:latitude]
    redirect_to :back
  end

  def index
  end

end
