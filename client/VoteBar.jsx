import React from 'react';

const VoteBar = ({
  upvoted,
  downvoted,
  reported,
  handleUpvoteClick,
  handleDownvoteClick,
  handleReportClick
}) => (
    <h4 className="container my-2">
      <div className="row">
        <i className={`fas fa-ban col ${reported ? '' : 'text-muted'}`} 
          onClick={reported || upvoted || downvoted ? '' : handleReportClick}
          data-toggle="tooltip" data-placement="top" title="This video is inappropriate or irrelevant."></i>
        <i className={`fas fa-thumbs-down col ${downvoted ? '' : 'text-muted'}`} 
          onClick={reported || upvoted || downvoted ? '' : handleDownvoteClick}
          data-toggle="tooltip" data-placement="top" title="I don't really like this video."></i>
        <i className={`fas fa-thumbs-up col ${upvoted ? '' : 'text-muted'}`} 
          onClick={reported || upvoted || downvoted ? '' : handleUpvoteClick}
          data-toggle="tooltip" data-placement="top" title="I like this video."></i>
      </div>
    </h4>
  );

export default VoteBar;