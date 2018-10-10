class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    if @user && @user.update(user_params)
      render :show
    elsif !@user
      render json: ['User not found.'], status: 400
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def destroy
    @user = User.find(params[:id])

    if @user
      @user.destroy
      render json: {}
    else
      render ['User not found.']
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name, :last_name, :email, :birth_date, :gender, :country, :password
    )
  end
end
