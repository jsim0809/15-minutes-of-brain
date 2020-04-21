const { Pool } = require('pg');
const keys = require('../secret.keys.js');

const pool = new Pool({
  host: keys.POSTGRES_HOST,
  user: keys.POSTGRES_USER,
  password: keys.POSTGRES_PW,
  database: 'brain15',
  port: 5432,
  idleTimeoutMillis: 0,
});

pool.connect()

module.exports.getAllVideos = (callback) => {
  pool.query(`SELECT * FROM videos;`)
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
};

// Upvote, downvote, or report
module.exports.upvote = (videoId, callback) => {
  pool.query(`INSERT INTO videos (id, upvotes) VALUES ('${videoId}', 1) 
    ON CONFLICT (id) DO UPDATE SET upvotes = videos.upvotes + 1;`)
    .then(() => {
      callback(null);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.downvote = (videoId, callback) => {
  pool.query(`INSERT INTO videos (id, downvotes) VALUES ('${videoId}', 1) 
    ON CONFLICT (id) DO UPDATE SET downvotes = videos.downvotes + 1;`)
    .then(() => {
      callback(null);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.report = (videoId, callback) => {
  pool.query(`INSERT INTO videos (id, reports) VALUES ('${videoId}', 1) 
    ON CONFLICT (id) DO UPDATE SET reports = videos.reports + 1;`)
    .then(() => {
      callback(null);
    })
    .catch((err) => {
      callback(err);
    });
};
