import React from 'react';
import Rankings from './Rankings';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Spa Franchise Comparison</h1>
      <h2 className="text-center">Learn about the <strong>best spa franchises</strong></h2>
      <h3 className="text-center">What spa franchise suits you?</h3>
      <Rankings />
      {/* Other components can go here */}
    </div>
  );
}

export default Home;
