Feature: Code School UI
  @code-school

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
      | Course Title | _TEST_COURSE_100 |
      | Duration | 10 weeks |
      | Number of chapters | 10 |
      | Student rating | 4 |
      | What you will learn | Best language for backend, Best language for backend, Best language for backend |
      | Pre-requisites | You should have a basic understanding of Computer Programming terminologies, A basic understanding of any of the programming languages is a plus |
    Then In Learning path I select "frontend"
    Then In Level I select "beginner"
    Then I click button "Update Description"
    And I wait "4000" ms
    And I click on AddNewChapter button
    And I wait "2000" ms
    And I click on open Chapter 1
    And I fill the values of the new chapter
      | Chapter Title | _TEST_COURSE_Chapter1 |
      | Number of lessons | 10 |

    And I click button Update Chapter
    And I click on AddLesson button
    And I click on edit button in "chapter-1-edit-lesson-1"
    And I fill the values of the new lesson
      | Lesson Title | _TEST_Lesson_Introduction |
      | Lesson Description | skywalk |
      | Video Link | https://www.youtube.com/embed/upDLs1sn7g4 |
      | Assignment | moonwalk |
    And I click on save button

    And I wait "2000" ms
    And I click on AddLesson button
    And I click on edit button in "chapter-1-edit-lesson-2"

    And I wait "2000" ms
    And I fill the values of the new lesson
      | Lesson Title | _TEST_Lesson_first |
      | Lesson Description | skywalksss |
      | Video Link | https://www.youtube.com/embed/afSbBjAaqeM |
      | Assignment | moonwalkss |
    And I click on save button
    And I wait "1000" ms

    And I click on AddNewChapter button
    And I wait "2000" ms
    And I click on open Chapter 2

    And I fill the values of the new chapter
      | Chapter Title | _TEST_COURSE_Chapter2 |
      | Number of lessons | 20 |

    And I click button Update Chapter
        And I wait "2000" ms
    And I click on AddLesson button
        And I wait "2000" ms
    And I click on edit button in "chapter-2-edit-lesson-1"
       And I wait "2000" ms
    And I fill the values of the new lesson
      | Lesson Title | _TEST_Lesson_1_Intro |
      | Lesson Description | modi work |
      | Video Link | https://www.youtube.com/embed/W6NZfCO5SIk |
      | Assignment | trump work |
    And I click on save button
    And I wait "2000" ms
    And I click on AddLesson button
        And I wait "2000" ms
    And I click on edit button in "chapter-2-edit-lesson-2"

    And I wait "2000" ms

   And I fill the values of the new lesson
      | Lesson Title | _TEST_Lesson_22 |
      | Lesson Description | nepolian work |
      | Video Link | https://www.youtube.com/embed/pU722vRd66A |
      | Assignment | putin work |
    And I click on save button
    And I wait "1000" ms

    And I click on Publish button
    And I wait "1000" ms

   Given I navigate to platform url
    And I wait "1000" ms
    And I navigate to courses
    And I wait "1000" ms
    And I click on Learning path "Frontend developer"
    And I click on new course "_TEST_COURSE_100"

    And I check created course values
      | Course Title | _TEST_COURSE_100 |
      | Duration | 10 weeks |
      | Number of chapters | 10 |

    And I click on chapter "_TEST_COURSE_Chapter1"
    And I check chapter lessons
      | Lesson 1 Title | _TEST_Lesson_Introduction |
      | Lesson 2 Title | _TEST_Lesson_first |

    And I click on chapter "_TEST_COURSE_Chapter1"

    And I click on chapter "_TEST_COURSE_Chapter2"
    And I check chapter lessons
      | Lesson 1 Title | _TEST_Lesson_1_Intro |
      | Lesson 2 Title | _TEST_Lesson_22 |

    And I click on chapter "_TEST_COURSE_Chapter2"

    Then I click button "START COURSE"

     And I check lesson description
       | Chapter 1 Lesson 1 description | skywalk |

     And I check video "chapter-1-watch-lesson-1-video" "https://www.youtube.com/embed/upDLs1sn7g4"

     And I click on lesson "_TEST_Lesson_first"
     And I check lesson description
       | Chapter 1 Lesson 2 description | skywalksss |

     And I check video "chapter-1-watch-lesson-2-video" "https://www.youtube.com/embed/afSbBjAaqeM"

     And I click on lesson "_TEST_Lesson_1_Intro"
     And I check lesson description
       | Chapter 2 Lesson 1 description | modi work |

     And I check video "chapter-2-watch-lesson-1-video" "https://www.youtube.com/embed/W6NZfCO5SIk"
   
     And I click on lesson "_TEST_Lesson_22"
     And I check lesson description
       | Chapter 2 Lesson 2 description | nepolian work |

     And I check video "chapter-2-watch-lesson-2-video" "https://www.youtube.com/embed/pU722vRd66A"

    And I navigate to dashboard page
    And I wait "3000" ms
    And I navigate to courses page
    And I wait "3000" ms
    And I click Edit course button in "_TEST_COURSE_100"
    And I wait "3000" ms
    And I click on Unpublish button
    And I wait "1000" ms
    And I click on Unpublished button
    And I wait "3000" ms
    And I click on delete course "_TEST_COURSE_100"

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

  @focus
  Scenario: LOGGED IN Dahshboard send message
    Given I navigate to platform url
    And I wait "1000" ms
    And I navigate to login page
    And I login with test user with author permissions
    And I wait "1000" ms
    And I navigate to dashboard page
    And I wait "1000" ms
    And I navigate to inbox page
    And I wait "1000" ms
    Then I click button "New Message"
    And I click on new receiver "rajesh ganne"
    And I fill the values of the new message
      | Subject | Regarding Yerrakota |
      | Message | Yerrakota is of the best fort in India  |

    Then I click button "Send"

    And I navigate to dashboard page
    And I wait "1000" ms
    And I navigate to inbox page
    And I wait "3000" ms

    And I check the values of message
      | Subject | Regarding Yerrakota |
      | Message | Yerrakota is of the best fort in India  |

    And I click on delete message "Yerrakota is of the best fort in India"
    And I wait "2000" ms

    And I navigate to dashboard page
    And I wait "1000" ms
    And I navigate to inbox page
    And I wait "1000" ms


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

