class SecretsController < ApplicationController

  def index
    @secrets = Secret.all
    @nearby_secrets = Secret.find_secrets(session[:latitude], session[:longitude], 1)
    @area_secrets = Secret.find_secrets(session[:latitude], session[:longitude], 10)
    @hash = Gmaps4rails.build_markers(@area_secrets) do |secret, marker|
      marker.lat secret.latitude
      marker.lng secret.longitude
    end
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
