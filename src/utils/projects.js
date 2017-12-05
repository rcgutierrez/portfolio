import React from 'react';
import kollaboscope from '../Images/kollaboscope.png'
import nommad from '../Images/nommad.png'
import tempvest from '../Images/tempvest.png'

const projects = [
  [
    "Tempvest",
    <img src={tempvest} alt="Tempvest Front Page" />,
    "Live in an area where the weather vastly varies throughout the day and want to know how you should dress accordingly? Tempvest gives you a layout of clothing options for what you'll need when weather conditions change or the temperature differs a significant amount.",
    "I would like to improve this project by correcting the algorithm for deleting superfluous outfit 'cards' at lower temperatures."
  ],
  [
    "Kollaboscope",
    <img src={kollaboscope} alt="Kollaboscope Front Page" />,
    "Kollaboscope aims to facilliate building playlist collaboratively in a public setting; it's the jukebox for the 21st century. Users go to a 'room', designated from the URL path, and add songs from Youtube. These songs are then played back in order added.",
    "This group project is in the process of being refactored into a React.js app and its backend has moved databases. We hope to build up its functionality to include the ability to add music from other streaming services."
  ],
  [
    "Nommad",
    <img src={nommad} alt="Nommad Front Page" />,
    "",
    ""
  ]
]

export default projects;
