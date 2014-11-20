class Secret < ActiveRecord::Base
  validates :address, presence: true
  validates :message, presence: true
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?

  def self.find_secrets(latitude, longitude)
    Secret.near([latitude, longitude], 1, :units => :km)  
  end    
  
end
