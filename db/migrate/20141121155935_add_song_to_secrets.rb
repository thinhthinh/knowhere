class AddSongToSecrets < ActiveRecord::Migration
  def change
    add_column :secrets, :song, :string
  end
end
