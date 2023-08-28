class Product < ApplicationRecord
    has_many :cart_items, dependent: :destroy
    has_many :carts, through: :cart_items

    validates :title, presence: true
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :stripe_id, presence: true
end
