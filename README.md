"# LIRI" 

This assignment is LIRI. It is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data from OMDB API.

1. clone this project to the local.

2. Install the following commands if requires:

npm install fs

npm install request --save

npm install axios

3. Use the following commands one by one to see the action:

node liriapp.js movie-info

or

node liriapp.js movie-info [any movie name of your choice]

node liriapp.js movie-info gladiator

node liriapp.js movie-info the+usual+suspect

Please note: for movie names with space between words, please add a plus(+) sign replacing the space.
