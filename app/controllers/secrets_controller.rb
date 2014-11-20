class SecretsController < ApplicationController

  def index
    @secrets = Secret.all
    @nearby_secrets = Secret.find_secrets(session[:latitude], session[:longitude])
  end

  def show
    @secret = Secret.find(params[:id])
  end 

  def new
    @secret = Secret.new
  end

  def create
    @secret = Secret.new(secret_params)
    if @secret.save
      redirect_to secret_path(@secret.id)
    end
  end

  def welcome
    @latitude = session[:latitude]
    @longitude = session[:longitude]
  end


  private

  def secret_params
    params.require(:secret).permit(:address, :message, :longitude, :latitude)
  end

end
