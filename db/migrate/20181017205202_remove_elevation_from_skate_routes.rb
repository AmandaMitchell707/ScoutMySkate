class RemoveElevationFromSkateRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :skate_routes, :elevation
  end
end
