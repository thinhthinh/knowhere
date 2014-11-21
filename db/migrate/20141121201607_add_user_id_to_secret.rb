class AddUserIdToSecret < ActiveRecord::Migration
  def change
    add_reference :secrets, :user, index: true
  end
end
