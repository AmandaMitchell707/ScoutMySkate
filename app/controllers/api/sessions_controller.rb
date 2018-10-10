class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/#{user.id}"
    else
      render json: ["Invalid user credentials"], status: 401
    end
  end


  def destroy
    logout!
    render "api/session/new"
  end
end
