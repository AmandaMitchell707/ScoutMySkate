class UpdateSkateRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :skate_routes, :markers
    remove_column :skate_routes, :description
    remove_column :skate_routes, :title
    remove_column :skate_routes, :completion_time

    add_column :skate_routes, :polyline, :text, null: false
    add_column :skate_routes, :distance, :float, null: false
    add_column :skate_routes, :elevation, :float, null: false
    add_column :skate_routes, :name, :string, null: false
    add_column :skate_routes, :city, :string, null: false
  end
end
