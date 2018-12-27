# frozen_string_literal: true

module Api
  class CatsController < ::ApplicationController
    def index
      page = (params[:page] || 1).to_i
      per = 15
      @cats = Cat.limit(per).offset(per * (page - 1))
    end
  end
end
