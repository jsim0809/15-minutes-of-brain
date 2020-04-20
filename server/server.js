const express = require ('express');
const cors = require('cors');
const jsdom = require('jsdom');
const $ = require('jquery')(new jsdom.JSDOM().window);
const keys = require('../secret.keys.js');
const db = require('../database/database.js');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

// Fetches list of 100 from Youtube and selects one at random
app.get('/api/video', (req, res) => {
  //  Fetch 500 'Education' videos
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: keys.YOUTUBE_API_KEY,
      part: 'snippet',
      maxResults: 50,
      type: 'video',
      videoEmbeddable: true,
      videoCategoryId: '27',
      videoDuration: 'medium',
      relevanceLanguage: 'en',
      order: 'rating',
    },
    success: (response1) => {
      // Fetch 500 'Science and Technology' videos
      $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
          key: keys.YOUTUBE_API_KEY,
          part: 'snippet',
          maxResults: 50,
          type: 'video',
          videoEmbeddable: true,
          videoCategoryId: '28',
          videoDuration: 'medium',
          relevanceLanguage: 'en',
          order: 'rating',
        },
        success: (response2) => {
          const videoList = response1.items.concat(response2.items);
          const video = videoList[Math.floor(Math.random() * videoList.length)].id.videoId
          res.send(video);
        },
        error: (err) => {
          console.log('Youtube API request error: ', err);
          res.sendStatus(500);
        }
      });
    },
    error: (err) => {
      console.log('Youtube API request error: ', err);
      res.sendStatus(500);
    }
  });
})

// TODO: Route to add upvote or downvote
// app.post

app.patch('/api/upvote', (req, res) => {
  db.upvote(req.body.video, (err) => {
    if (err) {
      console.log(err)
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.patch('/api/downvote', (req, res) => {
  db.downvote(req.body.video, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.patch('/api/report', (req, res) => {
  db.report(req.body.video, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});


app.listen(PORT, () => {
  console.log(`15 Minutes of Brain: listening on port ${PORT}.`);
});