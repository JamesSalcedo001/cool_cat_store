class CartSerializer < ActiveModel::Serializer
  attributes :id
  
  belongs_to :user
  has_many :cart_items
end
