class Api::SkateRoutesController < ApplicationController
  def index
    @skate_routes = SkateRoute.all
  end

  def show
    @skate_route = SkateRoute.find(params[:id])
  end

  def create
    @skate_route = SkateRoute.new(skate_route_params)

    if @skate_route.save
      render 'api/skate_routes/show'
    else
      render json: @skate_route.errors.full_messages, status: 401
    end
  end

  private

  def skate_route_params
    params.require(:skate_route).permit(
      :author_id, :markers, :title, :description, :completion_time
    ).transform_keys!(&:underscore)
  end
end
