Hi everyone!
As you already know, this is my last project and I really wanted to end this course with a bang. I've really learned a lot during this time, through theory and practice. I've discovered my passion for front-end developing and I tried my best to incorporate that into my final project. Seeing my "creation" come to life and testing it when finished has given me a sense of satisfaction that not many other things had given me before. Sure, there were some frustrating moments during the projects where I felt completely lost but they were easily overshadowed by the sense of pride that you get by ultimately completing them.
So, onto my capstone. I really wanted to create something that showed my passion for geography and different cultures but also could have some practical use in the web development field, so the idea of a travelling agency website came into my mind, but getting data would have been very difficult and it could have seemed like another "e-commerce"-y website. So I scrapped the idea.
Then I researched a little more and I found those kind of advertising-travelling websites, and they really clicked with me. They got rid of the "e-commerce" parts and replaced them with a "make-your-itinerary" part - something structurally similar to a "Notes" application - letting users make a list of the places they would like to visit, the experiences they'd like to be part of, ect ect...
I also wanted my website to feel as realistic as possible, as if it was something already on the internet without anyone questioning it. So I had to choose a country among the many existing. One that wasn't too big, was easily traversable, that would attract many tourists but that wasn't so well-known as some others, to both be inviting to a tourist and also to be a little fun to research about. My choice ended up being Fiji. I actually really enjoyed researching their culture, their way of living and traditions (other than imagining myself on their dreamy beaches while I was stuck at home during this COVID infested winter...), so I did my best to include anything interesting that I could find onto my website, in order to make this fictional travel experience as engaging as possible.
But I had to also think about how to strucure my website and make it feel like a travelling website. So I implemented things tourists would want to search for while travelling - like flights, hotels, activities, events and traditional food (typically in this exact order). I speak from experience when I say that it would always be a pain finding flights and managing all the activities I would like to do on vacation, especially if I was the only person organizing. Ultimately, it didn't feel fun anymore but something more like a job: I think that putting everything I need to see on the same page and having an easy way to check on them would make a lot of lives easier. The ease of swapping anything you don't want anymore on the list makes everything so painless that you don't have to stress about changing your mind.
After that brainstorming session, I was fully convinced that it was what I wanted to do. 
So, I started sketching on paper some mock-ups for the index page and what content I would display in my website. I researched anything I could about Fiji's traditions, offerings, culture to come up with the activities, events and food. Then I realized how difficult hotels and flights were to implement, as any existing booking website doesn't let anyone use their data. I also compiled some interesting FAQs into a page as I was so fascinated by them. Needless to say, most of my webpages went through multiple revisions (I restructured "index.html" 4 times because it wasn't satisfied with the result). Eventually, I started liking my design, but I was still stuck on the hotels and flights (arguably the most important part for a tourist to check), so I decided to go check real-life hotels and flights to Fiji. After realizing there wasn't really anything I could do about it, I started to implement the hotel-listings myself, selecting them from a famous hotel booking website in order to feel more real. As for the flights, I had to restrict them just to the direct ones to Fiji, as it would have been too difficult to manage flights with sometimes multiple layovers. 
After the looks were done, I had to tweak them to be mobile-friendly. Fortunately it didn't take as much time as the different design revisions, as I planned a little ahead to make my life a little easier.
Then came time to work with Javascript. I wanted to rely more on it because I felt I wasn't as comfortable as I wanted to be, besides being very important for Front End Development. It would make my website much more alive and greatly interactive if used correctly. What I absolutely wanted to add was some kind of search bar, a filter option for hotels and changing images for activities. Then I started to have more fun as I became more experienced and started to add some more functions to my website. When it finally came to manage JSON, I knew it was time to add the main Django functionalities - which my project isn't as relying on as Javascript's, but still weren't as easy to code as I hoped them to be.
Ultimately, I - technically - finally completed my website. Testing sure took a while, as I was stuck on two huge bugs, one of which was browser specific, that led me to restructure most Models and views.py functions.
And finally, I am here, basically three months later. Managing my studies and developing at the same time was quite demanding but I took the hang of it. I am finally at the point that when I watch my website I can ultimately say "I am satisfied".
(Hope this documentation wasn't too long, I just wanted to show you how passionate I am about it. Hope I gave enough explanations as of why I decided to make this website)

Why I believe my project satisfies the distinctiveness and complexity requirements:
* Great emphasis on web structure and design
* Easy-to-understand User Interface
* Focused on a realistic User Experience
* Multiple options for interactivity
* Research on covered topics
* Optimized for the best mobile experience
* Heavy reliance on JavaScript functions and usage of 6 Django Models

What's contained in each file:
* **`fiji`** - directory (main application)
    * **`static/fiji`** - directories (contains static files)
        * **`styles.css`** - stylesheet: gives my html classes some a more aesthetically-pleasing look to them
        * **`activities.js`** - script: rotates arrow toggle, changes image on option, gets option text if adds to wishlist (operates in `activities.html`)
        * **`flights.js`** - script: enables/disables wishlist button, enables/disables flight-return input, selects flight dates based on your input, displays direct-fly airports in search bar (operates in `flights.html`)
        * **`hotels.js`** - script: filters hotels based on checkbox input (operates in `hotels.html`)
        * **`index.js`** - script: changes image on slideshow, autocompletes destination search bar, sends user to requested page, changes map on category selection, stops user from being redirected outside (operates in `index.html`)
        * **`search.js`** - script: enhanced autocomplete search bar, sends user to requested page (operates in `search.html`)
        * **`wishlist.js`** - script: deletes list item, displays message if list is empty (operates in `wishlist.html`)
        * **`cities.jpg`** - image: cities map generated in Google My Maps and modified in PhotoShop (displayed in `index.html`)
        * **`culture.jpg`** - image: culture activities map generated in Google My Maps and modified in PhotoShop (displayed in `index.html`)
        * **`fireworks.jpg`** - image: background of events modified in PhotoShop (displayed in `events.html`)
        * **`nature.jpg`** - image: nature activities map generated in Google My Maps and modified in PhotoShop (displayed in `index.html`)
        * **`sport.jpg`** - image: sport activities map generated in Google My Maps and modified in PhotoShop (displayed in `index.html`)
    * **`templates/fiji`** - directories (contains html files)
        * **`aboutus.html`** - template: little description about me
        * **`activities.html`** - template: selection of some of the most interesting activities, distributed in three general sub-groups (Sport, Nature and Culture), accompanied by a title, description and photo of the activity
        * **`events.html`** - template: main holidays and festivals you might need to know when coming to Fiji
        * **`flights.html`** - template: find direct flights to Nadi airport, select your arrival and return, your flight class and how many people will come
        * **`food.html`** - template: list of traditional Fijian food that tourists may be inclined to try
        * **`help.html`** - template: compilation of real information and commonly asked questions for when travelling to Fiji
        * **`hotels.html`** - template: hotel listings that display their location and a brief description of their offering (all of these places really exist, but since I couldn’t find any way to show their data without being redirected to their real-life website, I decided to recreate all the listings myself)
        * **`index.html`** - template: aerial view of one of the hundreds of beautiful Fijian islands, brief video with a little description; separeted by a band made out of tulou (a common pattern in pacific tattooes and clothes, especially in Fiji and Tonga) we find find the main attractions of my website; then a search bar that finds hotels and activities, accompanied by an image and a map that displays where certain activities are. On desktop on the left of the page there’s a live weather feed. At the bottom, there are a couple links, (some of them redirect to real-life websites! But don’t worry, before leaving you will be asked if you meant to leave) and a disclaimer (stating that I won’t put my website on the internet, other than publicing it on GitHub, because it could be misleading, other than saying that it isn’t the official Fiji Travel website)
        * **`layout.html`** - template: extension, white navigation bar that redirects to my main webpages
        * **`login.html`** - template: form to complete to login
        * **`register.html`** - template: form to complete to create a new account and login 
        * **`search.html`** - template: bigger (more mobile-friendly) and more powerful search bar compared to the index one
        * **`wishlist.html`** - template: recap of what your vacation to Fiji will be like, all the decisions taken by you, and they can be changed if something isn't so appealing to you anymore
    * **`__init__.py`** - makes “fiji” appear as a package to Python *[empty]*
    * **`admin.py`** - manages superusers *[empty]*
    * **`apps.py`** - configuration file
    * **`models.py`** - contains classes that represent tables in our database (User, Wishflights, Wishhotels, Wishactivities, Wishevents, Wishfood)
    * **`tests.py`** - manages testing *[empty]*
    * **`urls.py`** - defines the mapping between URLs and views 
    * **`views.py`** - returns a web response for every url path (index, register, login_view, logout_view, search, flights, hotels, activities, events, food, wishlist, help, aboutus)
* **`finalproject`** - directory (Django-related files)
    * **`__init__.py`** - makes Python treat “finalproject” as packages *[empty]*
    * **`asgi.py`** - supplies us an application that servers can use to communicate with the code
    * **`settings.py`** - used to configure Django project
    * **`urls.py`** - includes all the url patterns implemented in "fiji" directory
    * **`wsgi.py`** - used to forward requests from the server to backend web application
* **`db.sqlite3`** - database that will store all types of information
* **`manage.py`** - executes Django tasks (mostly running our server)
* **`README.md`** - a writeup describing my project
* **`requirements.txt`** - list of Python packages that need to be installed

How to run my application: 
* Be sure to already have `Python` and `PIP` installed
* In the command prompt, execute the command: `pip install django` (optionally, after the installation is finished, you can verify it by executing the command `django-admin --version`)
* Make sure to be in the right directory
* Optionally, create a superuser by modifying `admin.py` and executing `python manage.py createsuperuser` and completing the given prompts
* Optionally, create tests by modifying `tests.py` and executing `python manage.py test`
* Apply migrations with the command `python manage.py makemigrations` and `python manage.py migrate`
* Run a local server with the command `python manage.py runserver`
* Open your preferred browser and search for local server link
* Register an account and start exploring!

Lastly, before this README file ends, I just wanted to thank everyone at HarvardX who made this possible, from the lecturers Brian and David, to the testers, to the course organizers, to the other students and to the fantastic community on all social media. It's really a chapter of my life coming to an end (yes, it took that long, hahahaha). 
Also please pardon me if there are any mistakes in this file, English isn't my native language.
Said this, bye bye everyone, have a good life!