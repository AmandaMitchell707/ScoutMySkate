class SkateRoute < ApplicationRecord
  validates :polyline, :distance, :name, :city, :encoded_markers, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
