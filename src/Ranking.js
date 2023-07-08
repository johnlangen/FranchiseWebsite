import React from 'react';
import './Ranking.css';  // import the CSS file

const Ranking = ({ name, website, score, overview, openLocations, providedServices, amenities, totalInvestment, initialFranchiseFee, technologyFee, fundAdvertisingFee, ceoExperience }) => {
    return (
      <div className="ranking-container">  
        <h2 className="ranking-title">{name}</h2>
        <p className="ranking-website"><strong></strong> <a href={website}>{website}</a></p>
        <p className="ranking-score"><strong>Score:</strong> {score}</p>
        <p className="ranking-overview"><strong>Overview:</strong> {overview}</p>
        <p className="ranking-open-locations"><strong>Open Locations:</strong> {openLocations}</p>
        <p className="ranking-provided-services"><strong>Provided Services:</strong> {providedServices}</p>
        <p className="ranking-amenities"><strong>Amenities:</strong> {amenities}</p>
        <p className="ranking-total-investment"><strong>Total Investment:</strong> {totalInvestment}</p>
        <p className="ranking-initial-franchise-fee"><strong>Initial Franchise Fee:</strong> {initialFranchiseFee}</p>
        <p className="ranking-technology-fee"><strong>Technology Fee:</strong> {technologyFee}</p>
        <p className="ranking-fund-advertising-fee"><strong>Fund Advertising Fee:</strong> {fundAdvertisingFee}</p>
        <p className="ranking-ceo-experience"><strong>CEO Experience:</strong> {ceoExperience}</p>
      </div>
    );
}
  
export default Ranking;
