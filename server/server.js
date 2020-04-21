const express = require('express');
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
  db.getAllVideos((err, dbResponse) => {
    if (err) {
      console.log('Database query error: ', err);
      res.sendStatus(500);
    } else {
      const videoList = [];
      dbResponse.rows.forEach((video) => {
        if ((video.reports / (video.upvotes + video.downvotes + 1)) < 0.05) {
          for (let i = 0; i < (video.upvotes - video.downvotes); i++) {
            videoList.push(video.id)
          }
        }
      });
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
        },
        success: (response1) => {
          // Fetch 500 'Science and Technology' videos
          response1.items.forEach((video) => {
            videoList.push(video.id.videoId);
          });
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
            },
            success: (response2) => {
              response2.items.forEach((video) => {
                videoList.push(video.id.videoId);
              });
              console.log('videoList: ', videoList);
              const video = videoList[Math.floor(Math.random() * videoList.length)];
              res.send(video);
            },
            error: (err) => {
              console.log("Couldn't load Science & Technology videos: ", err);
              console.log('videoList: ', videoList);
              const video = videoList[Math.floor(Math.random() * videoList.length)];
              res.send(video);
            }
          });
        },
        error: (err) => {
          console.log("Couldn't load Education videos: ", err);
          console.log('videoList: ', videoList);
          const video = videoList[Math.floor(Math.random() * videoList.length)];
          res.send(video);
        }
      });
    }
  });
});

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
  console.log(`Brain15 is listening on port ${PORT}.`);
});