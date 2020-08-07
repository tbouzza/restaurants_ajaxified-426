class RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all

    respond_to do |format|
      format.html
      format.json { render json: { restaurants: @restaurants } }
    end

  end

  def show
    @review = Review.new #=> an instance created for the form !
    @restaurant = Restaurant.find(params[:id])
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
    redirect_to restaurants_path
  end

end
