import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Rankings from './Rankings';
import Overview from './Overview';
import './App.css';

function App() {
  const rankingsRef = useRef(null);

  const scrollToRankings = () => {
    rankingsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <h1 className="app-title centered space-below">Spa Franchise Comparison</h1>
        <p className="centered text-large">
          Learn about the <span className="bold">best spa franchises</span>
        </p>
        <p className="centered text-medium">What spa franchise suits you?</p>
        <div className="centered text-medium intro-text">
         Discover the spa franchise that aligns with your unique vision and business goals. Perhaps you are drawn to the robust infrastructure, comprehensive offerings, and widespread recognition of a large spa franchise. These franchises often come with comprehensive training programs and proven operational systems that can pave the way for success.


         Alternatively, you may find a smaller, community-driven franchise more appealing. These organizations often foster deeper connections within the local community, providing personalized services tailored to their customers' needs. Small spa franchises often offer a greater degree of flexibility and autonomy, which can be particularly appealing if you're looking to put your personal stamp on your business.


         Remember, there is no 'one size fits all' in the world of spa franchises. The best choice is the one that resonates with your business philosophy, aligns with your financial resources, and best meets the needs of your target market. Whichever path you choose, embarking on a spa franchise venture promises the opportunity to bring relaxation, wellness, and beauty into the lives of your customers.
        </div>

        <div className="centered buttons-container">
          <button onClick={scrollToRankings} className="button">Rankings</button>

        </div>
        <div ref={rankingsRef}>
          <Rankings />
        </div>
        <Overview />
      </div>
    </Router>
  );
}

export default App;
