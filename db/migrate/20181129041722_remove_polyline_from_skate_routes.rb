class RemovePolylineFromSkateRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :skate_routes, :polyline
  end
end
