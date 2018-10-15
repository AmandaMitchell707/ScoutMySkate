class CreateSkateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :skate_routes do |t|
      t.text :markers, null: false
      t.string :title, null: false
      t.text :description
      t.time :completion_time
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :skate_routes, :author_id
  end
end
