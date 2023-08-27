class User < ApplicationRecord
    has_secure_password
    has_one :cart, dependent: :destroy
    validaes :username, presence: true, uniqueness: true

    validates :password, presence: true, on: :create


end
