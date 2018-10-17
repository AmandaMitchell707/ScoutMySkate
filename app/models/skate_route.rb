class SkateRoute < ApplicationRecord
  validates :polyline, :distance, :elevation, :name, :city, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
