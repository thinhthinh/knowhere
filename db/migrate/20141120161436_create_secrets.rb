class CreateSecrets < ActiveRecord::Migration
  def change
    create_table :secrets do |t|
      t.text :address
      t.text :message
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
