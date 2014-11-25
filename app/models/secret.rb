class Secret < ActiveRecord::Base
  validates :address, presence: true
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?
  validates :message, presence: true
  validate :soundcloud_url_must_be_track
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

  def get_track_id
    client = SoundCloud.new(:client_id => ENV['SOUNDCLOUD_API_KEY'])
    track = client.get('/resolve', :url => self.song)
    track.id
  end

  def soundcloud_url_must_be_track
    if self.song && self.song != ""
      begin 
        self.song.get_track_id
      rescue
        errors.add(:song, "Your soundcloud url must be a valid track url.")
      end
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
