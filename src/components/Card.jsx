import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some important text</p>
          <div className="container w-100">
            <select className="m-2 h-100 rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
