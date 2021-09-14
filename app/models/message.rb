class Message < ApplicationRecord

    belongs_to :user
    validates :body, Presence:true
end
