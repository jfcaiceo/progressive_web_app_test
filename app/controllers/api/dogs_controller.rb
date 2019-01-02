# frozen_string_literal: true

module Api
  class DogsController < ::ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      page = (params[:page] || 1).to_i
      per = 30
      @dogs = Dog.limit(per).offset(per * (page - 1))
    end

    def create
      if Dog.create(dog_params)
        head :ok
      else
        head 422
      end
    end

    private

    def dog_params
      params.require(:dog).permit(:name, :photo)
    end
  end
end
