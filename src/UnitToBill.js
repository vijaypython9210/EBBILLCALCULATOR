import React, { useState } from "react";

const UnitToBill = () => {
  const [unit, setUnit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    if (unit > 500) {
      if (unit > 0 && unit <= 100) {
        setPrice(0);
      } else if (unit > 100 && unit <= 400) {
        setPrice(0 + (unit - 100) * 4.5);
      } else if (unit > 400 && unit <= 500) {
        setPrice(0 + 1350 + (unit - 400) * 6);
      } else if (unit > 500 && unit <= 600) {
        setPrice(0 + 1350 + 600 + (unit - 500) * 8);
      } else if (unit > 600 && unit <= 800) {
        setPrice(0 + 1350 + 600 + 800 + (unit - 100 - 300 - 100 - 100) * 9);
      } else if (unit > 800 && unit <= 1000) {
        setPrice(
          0 +
            1350 +
            600 +
            800 +
            1800 +
            (unit - 100 - 300 - 100 - 100 - 200) * 10
        );
      } else if (unit > 1000) {
        setPrice(
          0 +
            1350 +
            600 +
            800 +
            1800 +
            2000 +
            (unit - 100 - 300 - 100 - 100 - 200 - 200) * 11
        );
      } else {
        setPrice(0);
      }
    } else if(unit<=500){
      if (unit > 0 && unit <= 100) {
        setPrice(0);
      } else if (unit > 100 && unit <= 200) {
        setPrice(0 + (unit - 100) * 2.25);
      } else if (unit > 200 && unit <= 400) {
        setPrice(0 + 225 + (unit - 100 - 100) * 4.5);
      } else if (unit > 400 && unit <= 500) {
        setPrice(0 + 225 + 900 + (unit - 400) * 6);
      } else {
        setPrice(0);
      }
    }
  };

  return (
    <div>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center main">
        <h2 className="my-5 text-white h2">BILL CALCULATOR</h2>
        <div className="box col-5 p-5">
          <h3>UNIT TO BILL</h3>
          <input
            type="number"
            name="unit"
            id="unit"
            className="form-control col-4 mt-3"
            onChange={(e) => setUnit(e.target.value)}
          />
          <input
            type="submit"
            className="btn btn-primary text-center my-3"
            value="Calculate"
            onClick={handleSubmit}
          />
          <h5>
            Your Bill is:{" "}
            <b>
              {price ? price.toFixed(2) : 0} {price ? "rupees" : "rupee"}
            </b>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default UnitToBill;
