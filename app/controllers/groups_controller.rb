class GroupsController < ApplicationController
  def new
    @group = Group.new
    @group_users << current_user
  end

  def create
  end

  def edit
  end

  def update
  end
end
