const express = require ('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

// TODO: Route to fetch Youtube video
// Fetches full list from Youtube, appends votes, and randomizes.


// TODO: Route to add upvote or downvote



app.listen(PORT, () => {
  console.log(`15 Minutes of Brain: listening on port ${PORT}.`);
});