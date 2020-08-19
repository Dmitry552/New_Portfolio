import React from 'react';
import './Generally.scss';

export default function Generally({imag_front}) {
  
  return(
    <div className="gen">
      {
        imag_front.map((imag, i) => {
          return <div className="gen_imag" key={i}><img alt="" src={imag}/></div>
        })
      }
    </div>
  );
}