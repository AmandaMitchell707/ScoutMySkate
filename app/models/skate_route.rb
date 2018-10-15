class SkateRoute < ApplicationRecord
  validates :author_id, :markers, :title, presence:true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
