CREATE TABLE videos(
  id          text        NOT NULL,
  upvotes     smallint    DEFAULT 0,
  downvotes   smallint    DEFAULT 0,
  reports     smallint    DEFAULT 0,
  PRIMARY KEY (id)
);

-- CREATE TABLE learners(
--   id          text        NOT NULL,
--   upvoted     text[],
--   downvoted   text[],
--   reported    text[],
--   PRIMARY KEY (id)
-- );