class User < ActiveRecord::Base
  validates :username, 
    uniqueness: { :case_sensitive => false }, 
    :presence => {:message => "Your alias is used to identify you on the site."}
  validates :email, 
    uniqueness: { :case_sensitive => false }, 
    :allow_nil => true
  has_secure_password

end
