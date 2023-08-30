class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  validates :quantity, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  before_save :remove_if_zero

  def remove_if_zero
    self.destroy if quantity.zero?
  end


end
