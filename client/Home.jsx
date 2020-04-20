import React from 'react';
import VoteBar from './VoteBar.jsx';

// Parent: App
// Children: VoteBar
const Home = ({ video, handleBrainMeClick }) => (
  <main role="main" className="inner cover">
    <h1 className="cover-heading">Ready to learn?</h1>
    {/* <p class="lead">It's big brain time.</p> */}
    <p className="lead">
      <a href="javascript:void(0)" className="btn btn-lg btn-secondary" onClick={handleBrainMeClick}>Brain me</a>
    </p>
    {video ? <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video}?rel=0`} frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe> : null}
    {video ? <VoteBar /> : null}
  </main>
);

export default Home;
