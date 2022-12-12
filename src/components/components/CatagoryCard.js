import React from "react";
import { Link } from "react-router-dom";

function CatagoryCard({ cat }) {
  // console.log(cat);
  return (
    
      <div className="card bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10 ">
          <img
            style={{ width: 200, height: 200 }}
            src={cat.image ? cat.image : "https://placeimg.com/400/225/arch"}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          
          <h2 className="card-title">{cat.name}</h2>
          <p>{cat.description}</p>
          <div className="card-actions">
          <Link to={`/catagories/${cat.name}`} className="btn btn-primary">Start Exam</Link>
          </div>
        </div>
      </div>
    
  );
}

export default CatagoryCard;