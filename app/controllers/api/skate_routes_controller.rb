class Api::SkateRoutesController < ApplicationController
  def index
    @skate_routes = SkateRoute.where(author_id: current_user.id)
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

  def destroy
    @skate_route = SkateRoute.find(params[:id])
    @skate_route.destroy
    render json: {}
  end

  private

  def skate_route_params
    params.require(:skate_route).permit(
      :author_id, :distance, :name, :city, :encoded_markers
    ).transform_keys!(&:underscore)
  end
end
