class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.text :description
      t.string :stripe_id
      t.string :title
      t.string :image
      t.integer :price

      t.timestamps
    end
  end
end
