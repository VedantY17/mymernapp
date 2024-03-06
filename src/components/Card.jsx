import React from "react";

export default function Card(props) {

  return (
    <div>
      <div className="card mt-3" style={{ width: "16rem", maxHeight: "500px" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
          style={{ height:"220px", objectFit:"fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.phoneName}</h5>
          <p className="card-text">{props.modelName}</p>
          <h6 className="d-inline">Storage: {props.storage}</h6>
          <h6 className="d-inline ml-4">Price: {props.price}</h6>
          <div className="container w-100">
            <select className="mt-2 h-100 rounded">
              {Array.from(Array(6), (e, i) => { 
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <div className="d-inline fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
