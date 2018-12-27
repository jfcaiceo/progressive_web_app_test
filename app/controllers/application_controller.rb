class ApplicationController < ActionController::Base
  def main
    render layout: 'application'
  end

  def offline
    render layout: 'offline'
  end
end
