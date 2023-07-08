import React from 'react';
import './Overview.css';

const Overview = () => {
  const services = [
    { name: "Massage Envy", massage: true, facial: true, bodytreatments: false},
    { name: "Hand and Stone", massage: true, facial: true, bodytreatments: false },
    { name: "Elements", massage: true, facial: false, bodytreatments: false },
    { name: "Massage Heights", massage: true, facial: true, bodytreatments: false },
    { name: "Woodhouse", massage: true, facial: true, bodytreatments: true },
    { name: "MassageLuxe", massage: true, facial: true, bodytreatments: false },
    { name: "Spavia", massage: true, facial: true, bodytreatments: true },
    { name: "The Now", massage: true, facial: false, bodytreatments: false }
  ];

  const amenities = [
    { name: 'Massage Envy', robeSandals: false, retreatRoom: false, showers: false },
    { name: 'Hand and Stone', robeSandals: false, retreatRoom: false, showers: false },
    { name: 'Elements', robeSandals: false, retreatRoom: false, showers: false },
    { name: 'Massage Heights', robeSandals: false, retreatRoom: false, showers: false },
    { name: 'Woodhouse', robeSandals: true, retreatRoom: true, showers: true },
    { name: 'MassageLuxe', robeSandals: false, retreatRoom: false, showers: false },
    { name: 'Spavia', robeSandals: true, retreatRoom: true, showers: true },
    { name: 'The Now', robeSandals: false, retreatRoom: false, showers: false }
  ];

  return (
    <div className="overview-container">
      <h2 className="centered">Overview</h2>
      <h3>Number of open locations</h3>
      <div style={{height: '50px'}}></div>  {/* This div adds space */}
      <p>As of the end of 2022, per the Franchise Disclosure Document (FDD):</p>
      <p>Massage Envy: 1083</p>
      <p>Hand and Stone: 501</p>
      <p>Elements: 246</p>
      <p>Massage Heights: 105</p>
      <p>Woodhouse: 77</p>
      <p>MassageLuxe: 75</p>
      <p>Spavia: 53</p>
      <p>The Now: 9</p>
      <div style={{height: '50px'}}></div>  {/* This div adds space */}
      <h3>Provided Services</h3>
      <div style={{height: '50px'}}></div>  {/* This div adds space */}
      <div className="grid-container">
        <div className="grid-header">Service</div>
        <div className="grid-header">Massage</div>
        <div className="grid-header">Facial</div>
        <div className="grid-header">Body Treatments</div>
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{service.name}</div>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{service.massage ? '✔️' : '❌'}</div>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{service.facial ? '✔️' : '❌'}</div>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{service.bodytreatments ? '✔️' : '❌'}</div>
          </React.Fragment>
        ))}
      </div>
      <div style={{height: '50px'}}></div>  {/* This div adds space */}
      <h3>Amenities</h3>
      <div style={{height: '50px'}}></div>  {/* This div adds space */}
      <div className="grid-container">
        <div className="grid-header">Location</div>
        <div className="grid-header">Robe and Sandals</div>
        <div className="grid-header">Retreat Room</div>
        <div className="grid-header">Showers</div>
        {amenities.map((amenity, index) => (
          <React.Fragment key={index}>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{amenity.name}</div>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{amenity.robeSandals ? '✔️' : '❌'}</div>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{amenity.retreatRoom ? '✔️' : '❌'}</div>
            <div className={`grid-item ${index % 2 === 0 ? 'grid-row-odd' : 'grid-row-even'}`}>{amenity.showers ? '✔️' : '❌'}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Overview;
