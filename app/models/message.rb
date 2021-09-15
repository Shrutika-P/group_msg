class Message < ApplicationRecord

    belongs_to :user
    validates :body, Presence:true

    scope :custom_display, -> { order(:created_at).last(5) }
end
