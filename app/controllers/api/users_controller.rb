module Api
    class UsersController < ApplicationController
        skip_before_action :authorize, only: :create

        def me
            render json: @current_user, status: :ok
        end

        def create
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        end


        def update 
            @current_user.update!(user_params)
            render json: @current_user, status: :ok
        end

        def destroy
            @current_user.destroy
            session.delete :user_id
            render json: { message: "user deleted" }, status: :ok
        end

        private

        def user_params
            params.permit(:username, :password, :avatar)
        end

    end
end