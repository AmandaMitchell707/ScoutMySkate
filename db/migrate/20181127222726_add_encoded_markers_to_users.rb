class AddEncodedMarkersToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :skate_routes, :encoded_markers, :text
  end
end
