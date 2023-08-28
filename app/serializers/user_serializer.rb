class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :avatar
  has_one :cart
end
