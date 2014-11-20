class SecretsController < ApplicationController

  def new
    @secret = Secret.new
  end

  def create
    @secret = Secret.new(secret_params)
    if @secret.save
      redirect_to secret_path(@secret.id)
    end
  end

  def show
    @secret = Secret.find(params[:id])
  end 

  private

  def secret_params
    params.require(:secret).permit(:address, :message, :longitude, :latitude)
  end

end
