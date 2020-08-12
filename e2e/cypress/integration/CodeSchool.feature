Feature: Code School UI
  @code-school

@focus
Scenario: LOGGED IN create course
    Given I navigate to platform url
    And I wait "1000" ms
    And I navigate to login page
    And I login with test user with author permissions
    And I wait "1000" ms
    And I navigate to dashboard page
    And I wait "1000" ms
    And I navigate to courses page
    And I wait "1000" ms
    And I navigate to AddNew page
    And I fill the values of the new course
      | Course Title | Ruby on rails |
      | Duration | 20 weeks |
      | Number of chapters | 10 |
      | Student rating | 4 |
      | What you will learn | Best language for backend, Best language for backend, Best language for backend |
      | Pre-requisites | You should have a basic understanding of Computer Programming terminologies, A basic understanding of any of the programming languages is a plus |
    Then In Learning path I select "backend"
    Then In Level I select "beginner"
#    And I click on Publish
    Then I click button "Update Description"
    And I navigate to dashboard page
    And I wait "1000" ms
    And I navigate to courses page
    And I wait "1000" ms







#    And I open date picker
#    And I select start date first day of the week on the date picker
#    And I select same week last day of the week on the date picker
#    And I enter the number of guests "3"
#    And I wait "1000" ms
#    Then I click button "Search Now"
#    And I can see "More filters"
#    And I wait "1000" ms
#    Then I click "1" result in the results page
#    And I can see "Reserve"
#    And I can see "Location"
#    And I can see "Contact host"
#    And I can see "More places to stay"

  Scenario: LOGGED IN Dahshboard send message
    Given I navigate to dahsboard
    And I open messages tab



#  Scenario: NOT LOGGED IN - add to favourites
#    Given I navigate to platform url
#    And I open date picker
#    And I select start date first day of the week on the date picker
#    And I select same week last day of the week on the date picker
#    And I enter the number of guests "3"
#    Then I click button "Search Now"
#    And I add first "2" items from the list to favourites
#    Then I refresh page
#    Then The number of favourites on the results page should be "2"
#
#    Scenario: LOGGED IN - check booking dates
#    Given I navigate to platform url
#    And I navigate to login page
#    And I login with test user with registered permissions
#    And I wait "1000" ms
#    And I open date picker
#    And I select start date first day of the week on the date picker
#    And I select same week last day of the week on the date picker
#    And I wait "1000" ms
#    And I enter the number of guests "3"
#    And I wait "1000" ms
#    Then I click button "Search Now"
#    And I can see "More filters"
#    And I wait "1000" ms
#    Then I click "1" result in the results page
#    And I can see "Reserve"
#    And I can see "Location"
#    And I can see "Contact host"
#    And I can see "More places to stay"

#Scenario: LOGGED IN - create new Ad
#  Given I navigate to platform url
#  And I navigate to login page
#    And I wait "2000" ms
#  And I login with test user with registered permissions
#    And I wait "2000" ms
#  Then I navigate to user profile page
#  And I click the Properties list tab
#    And I wait "1000" ms
#  Then I click button "Create New"
#    And I wait "5000" ms
#  And I can see "Title"
#  And I can see "Type of the property"
#  And I can see "Number of Rooms"
#  And I can see "Number of Bedrooms"
#  And I can see "Number of Bathrooms"
#  And I can see "Price per night"
#  And I can see "Currency"
#  And I can see "Max Number Of Guests"
#  And I can see "Location description"
#  And I can see "Full description"
#  And I fill add description data
#   | Title | Best flat in Hyderabad |
#  | Number of Rooms | 3 |
#  | Number of Bedrooms | 2 |
#  | Number of Bathrooms | 2 |
#  | Price per night | 199 |
#  | Currency | EUR |
#  | Max Number Of Guests | 6 |
#  | Location description | Best location in Hyderabad |
#  | Full description | Please book ASAP as almost fully booked |
# And I click button "Update Description"
# Then I refresh the page
# And I wait "3000" ms
#  And I check the values of the description
#  | Title | Best flat in Hyderabad |
#  | Number of Rooms | 3 |
#  | Number of Bedrooms | 2 |
#  | Number of Bathrooms | 2 |
#  | Price per night | 199 |
#  | Currency | EUR |
#  | Max Number Of Guests | 6 |
#  | Location description | Best location in Hyderabad |
#  | Full description | Please book ASAP as almost fully booked |

