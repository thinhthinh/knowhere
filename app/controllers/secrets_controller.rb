class SecretsController < ApplicationController
  before_action :set_secret, only: [:show, :edit, :destroy, :update]

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
    if user_signed_in?
      @secret = Secret.new
    else
      redirect_to login_path, notice: 'Please log in to drop a secret.'
    end
  end

  def create
    @user = User.find(session[:user_id])
    @secret = @user.secrets.build(secret_params)
    if @secret.save
      redirect_to secret_path(@secret.id)
    end
  end

  def welcome
    @latitude = session[:latitude]
    @longitude = session[:longitude]
  end

  def my_secrets
    if user_signed_in?
      @secrets = current_user.secrets
    else
      redirect_to login_path, notice: "Log in to access your secrets."
    end
  end

  def edit
    if !secret_authorized?
      redirect_to root_path, notice: 'You can only edit your own secret.'
    end
  end

  def update
    respond_to do |format|
      if @secret.update(secret_params) && secret_authorized?
        format.html { redirect_to @secret, notice: 'Secret was successfully updated.' }
        format.json { render :show, status: :ok, location: @secret }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    if secret_authorized?
      @secret.destroy
      redirect_to root_path, notice: 'The secret is deleted and gone forever.'
    else
      redirect_to root_path, notice: 'You can only delete secrets you created.'
    end
  end

  private

  def set_secret
    @secret = Secret.find(params[:id])
  end

  def secret_params
    params.require(:secret).permit(:address, :message, :longitude, :latitude)
  end

end
