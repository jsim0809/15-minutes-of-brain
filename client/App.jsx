import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';

const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'Home',
      video: null,
      upvoted: false,
      downvoted: false,
      reported: false,
    }
    
    this.handleMenuBarClick = this.handleMenuBarClick.bind(this);
    this.handleBrainMeClick = this.handleBrainMeClick.bind(this);
    this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
    this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }
  
  handleMenuBarClick(event) {
    this.setState({
      tab: event.target.innerHTML
    })
  }
  
  handleBrainMeClick() {
    // // Test video
    // this.setState({
    //   video: 'Nwzgfgw6zf4',
    // });

    // Fetch random video
    $.ajax({
      type: 'GET',
      url: '/api/video',
      success: (response) => {
        this.setState({
          video: response,
          upvoted: false,
          downvoted: false,
          reported: false,
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleUpvoteClick() {
    const { video } = this.state;
    // Store & upvote video
    $.ajax({
      type: 'PATCH',
      url: '/api/upvote',
      data: { video },
      success: (response) => {
        this.setState({
          upvoted: true,
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleDownvoteClick() {
    const { video } = this.state;
    // Store & downvote video
    $.ajax({
      type: 'PATCH',
      url: '/api/downvote',
      data: { video },
      success: (response) => {
        this.setState({
          downvoted: true,
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleReportClick() {
    const { video } = this.state;
    // Store & report video
    $.ajax({
      type: 'PATCH',
      url: '/api/report',
      data: { video },
      success: (response) => {
        this.setState({
          reported: true,
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    const { tab, video, upvoted, downvoted, reported } = this.state;

    // Set the body varilable to whichever tab is selected to render.
    let body = null;
    if (tab === 'Home' || tab === "Brain15") {
      body = <Home video={video}
        upvoted={upvoted}
        downvoted={downvoted}
        reported={reported}
        handleBrainMeClick={this.handleBrainMeClick}
        handleUpvoteClick={this.handleUpvoteClick}
        handleDownvoteClick={this.handleDownvoteClick}
        handleReportClick={this.handleReportClick}
      />;
    } else if (tab === 'About') {
      body = <About />;
    }

    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header tab={tab} video={video} handleMenuBarClick={this.handleMenuBarClick} />
        {body}
        <Footer />
      </div>
    );
  }
}

export default App;