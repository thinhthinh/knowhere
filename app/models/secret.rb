class Secret < ActiveRecord::Base
  validates :address, presence: true
  validates :message, presence: true
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?
  belongs_to :user
  has_many :upvotes

  def self.find_secrets(latitude, longitude, range)
    Secret.near([latitude, longitude], range, :units => :km)  
  end  

  def vote_count
    self.upvotes.size
  end
  
  def update_votes(user)
    user_upvoted?(user) ? remove_vote(user) : upvote(user)
  end

  def user_upvoted?(user)
    self.upvotes.any? do |upvote|
      upvote.user_id == user.id
    end
  end

  private

  def upvote(user)
    self.upvotes.create(user_id: user.id)
  end

  def remove_vote(user)
    self.upvotes.find_by(user_id: user.id).destroy
  end
  
end
