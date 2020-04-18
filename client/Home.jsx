import React from 'react';

const Home = ({ video, showThumbs }) => (
  <main role="main" className="inner cover">
    <h1 className="cover-heading">It's big brain time.</h1>
    <p className="lead">
      <a href="#" className="btn btn-lg btn-secondary">Brain me</a>
    </p>
    {video ? <div>Video displays here</div> : null}
    {showThumbs ? <div>Thumbs display here</div> : null}
  </main>
);

export default Home;