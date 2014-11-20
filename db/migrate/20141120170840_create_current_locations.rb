class CreateCurrentLocations < ActiveRecord::Migration
  def change
    create_table :current_locations do |t|
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
