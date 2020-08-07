class RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all
  end

  def show
    @review = Review.new #=> an instance created for the form !
    @restaurant = Restaurant.find(params[:id])
  end
end
