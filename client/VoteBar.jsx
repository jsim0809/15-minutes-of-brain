import React from 'react';

const VoteBar = ({ handleUpvoteClick, handleDownvoteClick, handleReportClick }) => (
  <h4 className="container my-2">
    <div className="row">
    <i className="fas fa-ban col" onClick={handleReportClick}></i>
    <i className="fas fa-thumbs-down col" onClick={handleDownvoteClick}></i>
    <i className="fas fa-thumbs-up col" onClick={handleUpvoteClick}></i>
    </div>
  </h4>
);

export default VoteBar;