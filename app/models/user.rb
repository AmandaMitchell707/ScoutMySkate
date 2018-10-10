class User < ApplicationRecord
  validates :email, :session_token, :password_digest, unique: true
  validates :password, length { minimum: 6, allow_nil: true }

  attr_reader :password

end
