import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import FAQ from './FAQ.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'home',
      video: null,
      showThumbs: false,
    }
  }

  render() {
    const { tab, video, showThumbs } = this.state;

    // Set the body varilable to whichever tab is selected to render.
    let body = null;
    if (tab === 'home'){
      body = <Home video={video} showThumbs={showThumbs} />;
    } else if (tab === 'faq') {
      body = <FAQ />;
    }

    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header tab={tab} />
        {body}
        <Footer />
      </div>
    );
  }
}

export default App;