require "application_system_test_case"

class EventsTest < ApplicationSystemTestCase
  setup do
    @event = events(:one)
  end

  test "visiting the index" do
    visit events_url
    assert_selector "h1", text: "Events"
  end

  test "creating a Event" do
    visit events_url
    click_on "New Event"

    fill_in "Author", with: @event.author
    fill_in "Composer", with: @event.composer
    fill_in "Date", with: @event.date
    fill_in "Double", with: @event.double
    fill_in "Dow", with: @event.dow
    fill_in "Genre", with: @event.genre
    fill_in "Month", with: @event.month
    fill_in "Receipts", with: @event.receipts
    fill_in "Title", with: @event.title
    fill_in "Zinz", with: @event.zinz
    click_on "Create Event"

    assert_text "Event was successfully created"
    click_on "Back"
  end

  test "updating a Event" do
    visit events_url
    click_on "Edit", match: :first

    fill_in "Author", with: @event.author
    fill_in "Composer", with: @event.composer
    fill_in "Date", with: @event.date
    fill_in "Double", with: @event.double
    fill_in "Dow", with: @event.dow
    fill_in "Genre", with: @event.genre
    fill_in "Month", with: @event.month
    fill_in "Receipts", with: @event.receipts
    fill_in "Title", with: @event.title
    fill_in "Zinz", with: @event.zinz
    click_on "Update Event"

    assert_text "Event was successfully updated"
    click_on "Back"
  end

  test "destroying a Event" do
    visit events_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Event was successfully destroyed"
  end
end
