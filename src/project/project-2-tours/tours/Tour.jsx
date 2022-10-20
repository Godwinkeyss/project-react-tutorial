import React from 'react';
import Tourist from '../Tourist';
import './tour.css'
const Tour = ({tours, removeTour}) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {
        tours.map((tour)=>{
          return <Tourist key={tour.id} {...tour} removeTour={removeTour}></Tourist>
        })
      }
    </div>
  </section>
};

export default Tour;
