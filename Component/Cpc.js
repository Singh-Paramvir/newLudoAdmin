import React, { useEffect, useState,useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Arrow from "../public/arrow.svg";

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let moon;
let id;
let percentage;
const MyRefferal = () => {
  const router = useRouter();
  const [newPercentage, setNewPercentage] = useState(""); // State for the new percentage input
  const [referrals, setReferrals] = useState([]); // Initialize as an empty array

  const handleInputChange = (event) => {
    setNewPercentage(event.target.value);
  };

  async function handleAddNewPercentage  ()  {
    // Handle logic to add new percentage (you can extend this function)
    console.log("Adding new percentage:", newPercentage);
    const data ={
      days:newPercentage
    }
    const token = localStorage.getItem("token");
    let res = await axios.post("/api/cpc", { token: token,data });
      const response = res.data;
      console.log(response.data, "to get the data from api");
     setReferrals(response.data.data); 
  };




  
 
 




  useEffect(() => {
    handleAddNewPercentage()
  }, []);

  return (
    
    <div>
   <input
    className="textinput mt-3"
    type="number"
    name="newPercentage"
    placeholder="Enter Days"
    value={newPercentage}
    onChange={handleInputChange}
    style={{ width: '150px', height: '30px', marginRight: '10px' }}
  />
  <button
    className="btn btn-primary"
    type="button"
    onClick={handleAddNewPercentage}
  >
    Submit
  </button>
   
     
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec" id="ref-code">
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
               
                CONTINUE PLAY USER DATA
              </h3>

              <table className="table funds-table mt-3" id="funds-color">
                <thead>
                  <tr>
                    <th id="fuds" scope="col">
                      Sr. No.
                    </th>
                    <th id="fuds" scope="col">
                      Email
                    </th>
                    <th id="fuds" scope="col">
                      Total Match
                    </th>
                    <th id="fuds" scope="col">
                      Win Match
                    </th>
                    <th id="fuds" scope="col">
                      Lose Match
                    </th>
                    <th id="fuds" scope="col">
                      Winning Ration
                    </th>
                   
                  </tr>
                </thead>

                <tbody>
{referrals.length > 0 ? (
  referrals.map((referral, index) => (
    <tr key={referral._id}>
      <td>{index + 1}</td>
      <td>{referral.mobileNumber}</td>
      <td>{referral.totalMatches}</td>
      <td>{referral.totalWins}</td>
      <td>{referral.totalLosses}</td>
      <td>{referral.winningRatio}</td>              
    </tr>
    
  ))
) : (
  <tr>
    <td colSpan="4">No data found</td>
  </tr>
)}
</tbody>
              </table>
            </form>
          </div>
        </div>
      </section>
    </div>
    // model
    
  );
};

export default MyRefferal;
