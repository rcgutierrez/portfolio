import React from 'react';
import kollaboscope from '../Images/kollaboscope.png'
import nommad from '../Images/nommad.png'
import tempvest from '../Images/tempvest.png'

const projects = [
  [
    "Tempvest",
    <a href="https://github.com/rcgutierrez/TempVest/tree/master/tempvest" target="_blank" rel="noopener noreferrer"><img src={tempvest} alt="Tempvest Front Page" /></a>,
    "Live in an area where the weather vastly varies throughout the day and want to know how you should dress accordingly? Tempvest gives you a layout of clothing options for what you'll need when weather conditions change or the temperature differs a significant amount.",
    "I would like to improve this project by correcting the algorithm for deleting superfluous outfit 'cards' at lower temperatures.",
    "https://temp-vest.firebaseapp.com/"
  ],
  [
    "Kollaboscope",
    <a href="https://github.com/rcgutierrez/project-01" target="_blank" rel="noopener noreferrer"><img src={kollaboscope} alt="Kollaboscope Front Page" /></a>,
    "Kollaboscope aims to facilliate building playlist collaboratively in a public setting; it's the jukebox for the 21st century. Users go to a 'room', designated from the URL path, and add songs from Youtube. These songs are then played back in order added.",
    "This project is in the process of being refactored into a React.js app and its backend has moved databases. We hope to build up its functionality to include the ability to add music from other streaming services.",
    false
  ],
  [
    "Nommad",
    <a href="https://github.com/rcgutierrez/nommad/tree/master/nommad" target="_blank" rel="noopener noreferrer"><img src={nommad} alt="Nommad Front Page" /></a>,
    "You can use Nommad to find food trucks near you as fast as possible. The axios call to Yelp filters to only return food trucks, easing your search by eliminating the need to enter in the extra parameters in other search sites.",
    "Cosmetic changes will be made to the markers that appear when the food truck icons are pressed, as well as tying the restarant tiles ",
    "https://nommad-app.firebaseapp.com/"
  ]
]

export default projects;
