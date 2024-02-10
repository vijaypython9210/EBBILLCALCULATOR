import React, { useState } from "react";

const BillToUnit = () => {
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState(0);
  const handleSubmit = () => {
    const domesticPrice = 0 + 225 + 900 + 600;//1725
    if (price <= domesticPrice) 
    {
        if (price === 0) {
            setUnit(100);
        }
        // >100 && >=200 unit
        else if (price>0 && price <= 225) {
            setUnit(100 + (price / 2.25));
        }

        //<200 && 400<= unit
        else if (price > 225 && price <= 1125) {
            setUnit(100 + 100 + ((price - 225) / 4.50));
        }

        //>400 && >=500 unit
        else if (price > 1125 && price <= 1725) {
            setUnit(100 + 100 + 200 + ((price - 1125) / 6));
        }
    }
    else{
        // <=100 unit
        if (price === 0) {
        setUnit(100);
        }

        // >100 && >=400 unit
        else if (price <= 1350) {
        setUnit(100 + (price / 4.5));
        }

        //>400 && >=500 unit
        else if (price > 1350 && price <= 1950) {
        setUnit(100 + 300 + ((price - 1350) / 6));
        }

        //>500 && >=600 unit
        else if (price > 1950 && price <= 2750) {
        setUnit(100 + 300 + 100 + ((price - 1950) / 8));
        }

        //>600 && >=800 unit
        else if (price > 2750 && price <= 4500) {
        setUnit(100 + 300 + 100 + 100 + ((price - 2750) / 9));
        }

        //>800 && >=1000 unit
        else if (price > 4500 && price < 6500) {
        setUnit(
            100 +
            300 +
            100 +
            100 +
            200 +
            ((price - 225 - 900 - 600 - 1800) / 10)
        );
        }

        //>1000
        else if (price > 6500) {
        setUnit(
            100 + 300 + 100 + 100 + 200 + 200 + ((price - 6500) / 11)
        );
        }
    }
    };
    return (
        <div className="App">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center main">
            <h2 className="my-5 text-white h2">UNIT CALCULATOR</h2>
            <div className="box col-5 p-5">
            <h3>BILL TO UNIT</h3>
            <input
                type="number"
                name="price"
                id="price"
                className="form-control col-4 mt-3 focus-ring-dark"
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="submit"
                className="btn btn-primary text-center my-3"
                value="Calculate"
                onClick={handleSubmit}
            />
            <h5>
                Your unit is:{" "}
                <b>
                {unit ? unit.toFixed(2) : 0} {price ? "unit" : "unit"}
                </b>
            </h5>
            </div>
        </div>
        </div>
    );
};

export default BillToUnit;
