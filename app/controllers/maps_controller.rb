class MapsController < ApplicationController

  def all_secrets
    @secrets = Secret.all
    respond_to do |format|
      format.json { render json: @secrets }
    end
  end

  def nearby_secrets
    @nearby_secrets = Secret.find_secrets(session[:latitude], session[:longitude], 1).sort_by{|s| s.vote_count}.reverse
    respond_to do |format|
      format.json { render json: @nearby_secrets }
    end
  end

  def area_secrets
    @area_secrets = Secret.find_secrets(session[:latitude], session[:longitude], 10).sort_by{|s| s.vote_count}.reverse
    respond_to do |format|
      format.json { render json: @area_secrets }
    end
  end

end
