class CurrentLocation < ActiveRecord::Base
  reverse_geocoded_by :latitude, :longitude, :address
  after_validation :reverse_geocode
  
end
