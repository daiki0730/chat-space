class UsersController < ApplicationController

  def index
    @group = Group.where('name LIKE(?)', "%#{params[:name]}%").limit(20)
    respond_to do |format|
     format.html
     format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
