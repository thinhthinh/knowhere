class User < ActiveRecord::Base
  validates :username, 
    uniqueness: { :case_sensitive => false }, 
    :presence => {:message => ": You must have an alias."}
  validates :email, 
    uniqueness: { :case_sensitive => false }, 
    :allow_nil => true
  has_secure_password
  has_many :secrets
  has_many :upvotes
end
