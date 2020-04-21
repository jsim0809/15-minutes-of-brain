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
      // video: null,
      video: 'Nwzgfgw6zf4',
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
    if (tab === 'Home' || tab === "15 Minutes of Brain") {
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


// {
//   "kind": "youtube#videoCategoryListResponse",
//   "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/MqBtVULJMauAy-vczgPfoNYzL3Q\"",
//   "items": [
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/Xy1mB4_yLrHy_BmKmPBggty2mZQ\"",
//     "id": "1",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Film & Animation",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/UZ1oLIIz2dxIhO45ZTFR3a3NyTA\"",
//     "id": "2",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Autos & Vehicles",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/nqRIq97-xe5XRZTxbknKFVe5Lmg\"",
//     "id": "10",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Music",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/HwXKamM1Q20q9BN-oBJavSGkfDI\"",
//     "id": "15",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Pets & Animals",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/9GQMSRjrZdHeb1OEM1XVQ9zbGec\"",
//     "id": "17",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Sports",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/FJwVpGCVZ1yiJrqZbpqe68Sy_OE\"",
//     "id": "18",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Short Movies",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/M-3iD9dwK7YJCafRf_DkLN8CouA\"",
//     "id": "19",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Travel & Events",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/WmA0qYEfjWsAoyJFSw2zinhn2wM\"",
//     "id": "20",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Gaming",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/EapFaGYG7K0StIXVf8aba249tdM\"",
//     "id": "21",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Videoblogging",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/xId8RX7vRN8rqkbYZbNIytUQDRo\"",
//     "id": "22",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "People & Blogs",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/G9LHzQmx44rX2S5yaga_Aqtwz8M\"",
//     "id": "23",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Comedy",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/UVB9oxX2Bvqa_w_y3vXSLVK5E_s\"",
//     "id": "24",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Entertainment",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/QiLK0ZIrFoORdk_g2l_XR_ECjDc\"",
//     "id": "25",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "News & Politics",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/r6Ck6Z0_L0rG37VJQR200SGNA_w\"",
//     "id": "26",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Howto & Style",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/EoYkczo9I3RCf96RveKTOgOPkUM\"",
//     "id": "27",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Education",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/w5HjcTD82G_XA3xBctS30zS-JpQ\"",
//     "id": "28",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Science & Technology",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/SalkJoBWq_smSEqiAx_qyri6Wa8\"",
//     "id": "29",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Nonprofits & Activism",
//      "assignable": true
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/lL7uWDr_071CHxifjYG1tJrp4Uo\"",
//     "id": "30",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Movies",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/WnuVfjO-PyFLO7NTRQIbrGE62nk\"",
//     "id": "31",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Anime/Animation",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/ctpH2hGA_UZ3volJT_FTlOg9M00\"",
//     "id": "32",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Action/Adventure",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/L0kR3-g1BAo5UD1PLVbQ7LkkDtQ\"",
//     "id": "33",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Classics",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/pUZOAC_s9sfiwar639qr_wAB-aI\"",
//     "id": "34",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Comedy",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/Xb5JLhtyNRN3AQq021Ds-OV50Jk\"",
//     "id": "35",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Documentary",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/u8WXzF4HIhtEi805__sqjuA4lEk\"",
//     "id": "36",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Drama",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/D04PP4Gr7wc4IV_O9G66Z4A8KWQ\"",
//     "id": "37",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Family",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/i5-_AceGXQCEEMWU0V8CcQm_vLQ\"",
//     "id": "38",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Foreign",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/rtlxd0zOixA9QHdIZB26-St5qgQ\"",
//     "id": "39",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Horror",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/N1TrDFLRppxZgBowCJfJCvh0Dpg\"",
//     "id": "40",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Sci-Fi/Fantasy",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/7UMGi6zRySqXopr_rv4sZq6Za2E\"",
//     "id": "41",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Thriller",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/RScXhi324h8usyIetreAVb-uKeM\"",
//     "id": "42",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Shorts",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/0n9MJVCDLpA8q7aiGVrFsuFsd0A\"",
//     "id": "43",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Shows",
//      "assignable": false
//     }
//    },
//    {
//     "kind": "youtube#videoCategory",
//     "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/x5NxSf5fz8hn4loSN4rvhwzD_pY\"",
//     "id": "44",
//     "snippet": {
//      "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
//      "title": "Trailers",
//      "assignable": false
//     }
//    }
//   ]
//  }
