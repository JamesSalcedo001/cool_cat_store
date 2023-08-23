class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :stripe_id, :title, :image, :price
end
