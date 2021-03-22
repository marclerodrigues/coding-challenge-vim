class TweetsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index

  def index
    @tweets = Tweet.recently_created.with_users

    render json: { tweets: @tweets }
  end

  def create
    @tweet = current_user.tweets.build(permitted_params)

    if @tweet.save
      render json: @tweet.attributes.merge(username: current_user.username)
    else
      render json: { errors: @tweet.errors }, status: :unprocessable_entity
    end
  end

  private

  def permitted_params
    params.require(:tweet).permit(:body)
  end
end
