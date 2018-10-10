class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :date
      t.string :dow
      t.string :month
      t.string :title
      t.string :genre
      t.integer :receipts
      t.boolean :zinz
      t.boolean :double
      t.string :composer
      t.string :author

      t.timestamps
    end
  end
end
