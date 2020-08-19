import React from 'react';
import './Back.scss';

export default function Back({imag_back}) {
  return(
    <div className="back">
      {
        imag_back.map((imag, i) => {
          return <div className="back_imag" key={i}><img alt="" src={imag}/></div>
        })
      }
    </div>
  );
}