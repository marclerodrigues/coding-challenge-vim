class Tweet < ApplicationRecord
  belongs_to :user

  validates_presence_of :body

  scope :with_users, -> { joins(:user).select(:id, :body, "users.username") }
  scope :recently_created, -> { order(created_at: :desc) }
end
