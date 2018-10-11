class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, :birth_date, :country, :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :gender, inclusion: ['f', 'm']

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
