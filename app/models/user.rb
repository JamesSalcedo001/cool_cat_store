class User < ApplicationRecord
    has_secure_password
    has_one :cart, dependent: :destroy
    validates :username, presence: true, uniqueness: true

    validates :password, presence: true, on: :create

    after_create :new_cart

    private 

    def new_cart
        self.create_cart unless self.cart
    end

end
