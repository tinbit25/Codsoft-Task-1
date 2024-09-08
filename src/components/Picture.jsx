import React from 'react';
import ppicture from "../assets/img/New Picture (2).png"; 



const Picture = () => {
  return (
    <div className="custom-background  flex items-center justify-center">
  <div className=" whole text-center p-4 playwrite-cu-unique ">
  <h1 className=" matemasie-regular text-5xl font-bold mb-4">“To make a difference in helping others, simply being human is enough.”

</h1>
    <img
      src={ppicture}
      alt="Biniyam's Photo"
      className="rounded"
      style={{ width: '250px', height: '250px', objectFit: 'cover',marginLeft:'550px' }} 
    />
    <h1 className="text-2xl font-semibold mb-2 mt-5">D/R BINIAM</h1>
    <h1 className="text-xl">The Founder of Mekedoniya</h1>
  </div>
</div>

  );
};

export default Picture;
