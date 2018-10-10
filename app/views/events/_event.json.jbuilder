json.extract! event, :id, :date, :dow, :month, :title, :genre, :receipts, :zinz, :double, :composer, :author, :created_at, :updated_at
json.url event_url(event, format: :json)
