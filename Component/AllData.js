import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "reactstrap";
import Arrow from "../public/arrow.svg";
import { green } from "@material-ui/core/colors";

const MyRefferal = () => {
  const [referrals, setReferrals] = useState({});
  const [loading, setLoading] = useState(true);
  const emailRef = useRef();
  const router = useRouter();

  const myReferrals = async () => {
    try {
      const token = localStorage.getItem("token");
      const bv = localStorage.getItem("buttonValue");
      const data = {
        buttonValue: bv,
        date:""
      };

      setLoading(true);

      const res = await axios.post("/api/allData", { token: token, data });
      const response = res.data;
      console.log(response, "res here");

      // Set referrals to response.data.data
      setReferrals(response.data.data);

      console.log(response.data.data, "get wala");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  async function onSubmitHandler(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const date = emailRef.current.value;
    const data = {
      date
    };

    console.log(data, "data here");
    const res = await axios.post("/api/allData", { token: token, data });
    const response = res.data;
    console.log(response, "res here");

    // Set referrals to response.data.data
    setReferrals(response.data.data);
    
    

  }

  useEffect(() => {
    myReferrals();
  }, []);

  return (
    <div>


<div className="row" style={{ marginBottom: '-60px',marginLeft:'585px' }}>
  <div className="col">
    {/* <h6 className="item-text">date to sort:</h6> */}
  </div>
  <div className="col text-right">
    <input
      ref={emailRef}
      style={{ width: '150px', padding: '5px', fontSize: '14px', backgroundColor: '#15a384', color: 'white', borderRadius: '5px' }}
      type="date"
      name="date"
      placeholder="select date"
      required
    />
    <button
      type="button"
      onClick={onSubmitHandler}
      style={{ marginLeft: '10px', backgroundColor: '#15a384', color: 'white', padding: '5px 10px', borderRadius: '5px' }}
    >
      Continue
    </button>
  </div>
</div>


      {/* ... (loading indicator) */}
      <div className="row justify-content-center"></div>

      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec" id="ref-code">
              <h3 className="heading-text pink-text mt-2">
                {/* ... (other JSX) */}
              </h3>





<h3 className="heading-text pink-text mt-2">
                <span
                  className="arrows-icon"
                  id="left-rfset"
                  style={{
                    position: "relative",
                    left: "-44%",
                    cursor: "pointer",
                  }}
                >
                  <img src={Arrow.src} onClick={() => router.back()} />
                </span>
                Ludo Assets
              </h3>
              <table className="table funds-table mt-3" id="funds-color">
                <thead>
                  <tr>
                    <th id="fuds" scope="col">
                      Sr. No.
                    </th>
                    <th id="fuds" scope="col">
                      Today Users
                    </th>
                   
                    <th id="fuds" scope="col">
                      Daily Reward Total
                    </th>
                    <th id="fuds" scope="col">
                      GameZope Total
                    </th>
                    <th id="fuds" scope="col">
                      Total Match Slot 1
                    </th>
                    <th id="fuds" scope="col">
                      Total Match Slot 2
                    </th>
                    <th id="fuds" scope="col">
                      Total Match Slot 3
                    </th>
                    <th id="fuds" scope="col">
                      Total Match 
                    </th>
                    <th id="fuds" scope="col">
                      Date 
                    </th>
                  </tr>
                </thead>

                <tbody>
          {Array.isArray(referrals) && referrals.length > 0 ? (
            referrals.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.todayUsers}</td>
                <td>{item.dailyRewardTotal}</td>
                <td>{item.gamezopeTotal}</td>
                <td>{item.totalMatchS1}</td>
                <td>{item.totalMatchS2}</td>
                <td>{item.totalMatchS3}</td>
                <td>{item.totalMatch}</td>
                <td>{item.createdAt ? item.createdAt.substring(0, 10) : ''}</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No data available</td>
            </tr>
          )}
        </tbody>
              </table>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyRefferal;
