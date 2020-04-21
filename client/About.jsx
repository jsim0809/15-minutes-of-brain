import React from 'react';

const About = ({ handleBirthdayClick }) => (
  <span>

    <h5 className="text-left">What's this site about?</h5>
    <p className="text-left">Studies show that <a href="https://en.wikipedia.org/wiki/Decision_fatigue"><u>decision fatigue</u></a> is 
            a constant factor in our lives today, particularly in the evenings when we're deciding what to do with our free time. 
            This leads to a lot of wasted hours — we're literally too tired to know what to do.</p>
    <p className="text-left"><span className="font-weight-bolder">Brain15</span> is designed to fill those gaps with growth and learning. 
    Hit the button to bring up a random video from our user-curated database, and enjoy. All videos are between 4 and 20 minutes long.</p>
    <p className="text-left">Watch enough videos, and you might get a <span onClick={handleBirthdayClick}>surprise</span>.</p>
    <p className="text-left">So go on, press the button. It's big brain time.</p>

  </span>
);

export default About;
