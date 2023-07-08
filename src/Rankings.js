import React from 'react';
import Ranking from './Ranking';
import './Rankings.css'; 

const Rankings = () => {
  const rankingsData = [
    {
      name: "1. Spavia",
      website: "https://spaviafranchise.com/",
      score: "5 / 5",
      overview: "Spavia provides consumers high quality, custom and affordable spa services in a relaxing atmosphere. Spavia provides customers with spa treatments like massages, facials, waxing and body treatments. Through the offering of memberships, the concept is based upon continuity of services to promote personal wellness. Spavia is changing the perception of spas. The spa experience is no longer a costly luxury - Spavia is for anyone who wants to frequently relax, recenter and renew. Spavia's future franchise plans include growth in neighborhood locations nationwide.",
      openLocations: 53,
      providedServices: "Massage, Facial, Body Treatments",
      amenities: "Robe, Sandals, Retreat Room, Showers",
      totalInvestment: "$431,288 to $784,088",
      initialFranchiseFee: "$59,500",
      technologyFee: "$644 /month",
      fundAdvertisingFee: "1%",
      ceoExperience: "18 years",
    },
    {
      name: "2. Elements Massage",
      website: "https://elementsfranchise.com/",
      score: "4.84 / 5",
      overview: "Elements Massage was born with a focus on connecting massage therapists and clients in a way that gives the client the most effective, personalized massage and allows the massage therapist to provide a massage that matches their strength. An appealing aspect for the franchisee is the focused business model that has resulted in double-digit revenue growth for over a decade. Unlike other competitive businesses in the space, the brand doesn't offer facials or other services beyond massage therapy, and studios maximize volume within 1,300 to 2,000 square feet of studio space. Available services include Swedish massage, deep tissue massage, sports massage, trigger point massage, and stretch massage. All Elements therapists are certified with additional specialty services including Herbal Ritual™, AromaRitual® therapy, Himalayan salt stone massage, integrative reflexology, hot stone massage, prenatal massage and cupping therapy.",
      openLocations: 246,
      providedServices: "Massage",
      amenities: "None",
      totalInvestment: "$357,783 to $552,125",
      initialFranchiseFee: "$40,000",
      technologyFee: "$600 / month",
      fundAdvertisingFee: "2%",
      ceoExperience: "3 years",
    },
    {
      name: "3. Massage Luxe",
      website: "https://massageluxe.com/franchise-opportunities/",
      score: "4.53 / 5",
      overview: "MassageLuXe® is one of the fastest growing companies in the massage industry with over 100 franchise units signed and in development. We deliver the highest quality, professional massage, facial and waxing services in the industry within an environment that is both luxurious and relaxing to all of our guests.",
      openLocations: 75,
      providedServices: "Massage, Facial",
      amenities: "None",
      totalInvestment: "$387,800 to $732,900",
      initialFranchiseFee: "$42,500",
      technologyFee: "$535 / month",
      fundAdvertisingFee: "2.5%",
      ceoExperience: "7 years",
    },
    {
        name: "4. Woodhouse",
        website: "https://www.ownawoodhouse.com/",
        score: "4.38 / 5",
        overview: "Founded in Victoria, Texas in 2001, Woodhouse provides each guest with a tranquil, transformational environment that's both memorable and healthful. From beginning to end, dedicated spa teams ensure that each visit enhances the guest's well-being.",
        openLocations: 75,
        providedServices: "Massage, Facial, Body Treatments",
        amenities: "Robe, Sandals, Retreat Room",
        totalInvestment: "$1,476,769 to $3,209,902",
        initialFranchiseFee: "$55,000",
        technologyFee: "$475 / month",
        fundAdvertisingFee: "1.75%",
        ceoExperience: "4 years",
      },
      {
        name: "5. Hand & Stone",
        website: "https://www.handandstonefranchise.com/",
        score: "4.06 / 5",
        overview: "Welcome to Hand & Stone, where we help driven and motivated entrepreneurs pursue a balanced lifestyle with our supportive and fulfilling franchise opportunity. If you want to build a healthy future for yourself while enhancing the well-being of others, our skincare and massage franchise may be a great fit for you. Our award-winning franchise leads the industry in product quality, customer service, and franchisee satisfaction. With three distinct service offerings, we rise above our competitors and stand out as the preferred choice for customers seeking a relaxed, rejuvenating escape.",
        openLocations: 501,
        providedServices: "Massage, Facial",
        amenities: "None",
        totalInvestment: "$526,791 to $691,311",
        initialFranchiseFee: "$49,500",
        technologyFee: "$616 / month",
        fundAdvertisingFee: "1%",
        ceoExperience: "2 years",
      },
      {
        name: "6. Massage Envy",
        website: "https://www.massageenvy.com/about-us/own-a-franchise",
        score: "3.28 / 5",
        overview: "Massage Envy has embraced franchising since its inception and is embarking on a mission to make every individual the best version of themselves. Massage Envy believes total body care is an integral part of everyone's well-being journey. Massage Envy, based in Scottsdale, Arizona, is a provider of therapeutic massage and skincare services.",
        openLocations: 1083,
        providedServices: "Massage, Facial",
        amenities: "None",
        totalInvestment: "$614,850 to $927,000",
        initialFranchiseFee: "$45,000",
        technologyFee: "$1,198 / month",
        fundAdvertisingFee: "2%",
        ceoExperience: "4 years",
      },
      {
        name: "7. Massage Heights",
        website: "https://www.massageheightsfranchise.com/",
        score: "2.97 / 5",
        overview: "Massage Heights is a passion brand, a lifestyle brand, a spa franchise brand that truly helps people live their best lives by encouraging them to become better versions of themselves. And for franchise owners, it can be a very lucrative brand based on the membership base revenue model, which generates a steady stream of revenue through multiple offerings.",
        openLocations: 105,
        providedServices: "Massage, Facial",
        amenities: "None",
        totalInvestment: "$477,200 and $554,200",
        initialFranchiseFee: "$49,500",
        technologyFee: "$550 / month",
        fundAdvertisingFee: "3%",
        ceoExperience: "2 years",
      },
      {
        name: "8. The Now",
        website: "https://thenowmassage.com/own-a-boutique/",
        score: "2.81 / 5",
        overview: "The NOW Massage is reimagining the day spa experience to give self-care seekers an escape to restore and renew away from the stresses caused by everyday life. At the NOW self-care is a necessity, not a luxury. The massage boutique serves as a relaxing oasis for an affordable, refreshing and soul-cleansing experience that is accessible through online bookings. The NOW’s clean, nature-inspired aesthetic and signature scent of Jasmine Coconut transports guests to that vacation state of mind. The menu includes three different massage options promoting relaxation, tension relief and cleansing of the mind, body and spirit. Along with customizable enhancements like herbal heat therapy, scalp renewal and deep tissue, the NOW Massage is LA’s go to for an elevated wellness experience.",
        openLocations: 9,
        providedServices: "Massage",
        amenities: "None",
        totalInvestment: "$414,850 to $767,600",
        initialFranchiseFee: "$60,000",
        technologyFee: "$1,250 / month",
        fundAdvertisingFee: "2%",
        ceoExperience: "3 years",
      },
      
    
    
    // Rest of the franchises data...
  ];

  return (
    <div className="rankings-container">
      <h2 className="centered">Here are the rankings for the top spa franchises in the US</h2>
      {rankingsData.map((data, index) => (
        <Ranking 
          key={index} 
          name={data.name} 
          website={data.website}
          score={data.score}
          overview={data.overview}
          openLocations={data.openLocations}
          providedServices={data.providedServices}
          amenities={data.amenities}
          totalInvestment={data.totalInvestment}
          initialFranchiseFee={data.initialFranchiseFee}
          technologyFee={data.technologyFee}
          fundAdvertisingFee={data.fundAdvertisingFee}
          ceoExperience={data.ceoExperience}
        />
      ))}
      <div className="end-message">* Rankings were calculated based on each of the provided metrics and ammenities from the 2023 Franchise Disclosure Documents * </div> 
    </div>
  );
}
export default Rankings;
