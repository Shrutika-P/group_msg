class SessionsController < ApplicationController
  before_action :logged_in_redirect, only: %i[new create]
  # the start method
  def new; end

  # create
  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      puts "/n/n/n/n User_id : #{user.id} /n/n/"

      session[:user_id] = user.id
      flash[:success] = ' You are successfully logged in '
      redirect_to root_path
    else
      flash.now[:error] = 'Invalid Credintials'
      render 'new'
    end
  end

  # For logging out the current user
  def destroy
    session[:user_id] = nil
    flash[:success] = 'You have successfully logged out'
    redirect_to login_path
  end

  private

  def logged_in_redirect
    if logged_in?
      flash[:error] = 'you are already logged in'
      redirect_to root_path
    end
  end
end
