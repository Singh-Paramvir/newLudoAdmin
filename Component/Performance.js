import React, { useEffect, useState,useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Arrow from "../public/arrow.svg";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from 'react-router-dom';


let moon;
let id;
let percentage;
const MyRefferal = () => {
  const firstRef = useRef();
  const firstRef1 = useRef();
  const [selectedUserId, setSelectedUserId] = useState(null); 
  const [referrals, setReferrals] = useState([]); // Initialize as an empty array
  const router = useRouter();
  const [todayMatchCount, setTodayMatchCount] = useState(0);
  const [totalMatchCount, setTotalMatchCount] = useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);

  const handleViewClick = (id, mobileNumber) => {
    console.log(id, "inside");
    // Redirect to the view page and pass the 'id' as a query parameter
    router.push({
      pathname: '/userhis',
      query: {
        id: id, // Use the 'id' parameter passed to the function
        mobileNumber: mobileNumber, // Use the 'mobileNumber' parameter passed to the function
      },
    });
  };


    
  async function myReferrals() {
    try {

      let buttonValue = localStorage.getItem('buttonValue')
      const data ={
        buttonValue
      }
      const token = localStorage.getItem("token");
      setLoading(true);
      let res = await axios.post("/api/perfor", { token: token,data });
      const response = res.data;
      console.log(response.data.data.data, "to get the data from api");
      setReferrals(response.data.data.data);
      setTodayMatchCount(response.data.data.data1[0].total);
      setTotalMatchCount(response.data.data.data2[0].total);
    } catch (err) {
      console.log(err);
    }finally {
      setLoading(false);
    }
  }
  async function apiFunction(e) {
    try{
      setModalOpen(!modalOpen)
      moon = e
      console.log(moon, "userId");
      
    }catch(err){
      console.log(err,"api error here")
    }
  }
 

  useEffect(() => {
    myReferrals();
  }, []);

  return (

    
    
    <div>

          {/* Loading indicator */}
 {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            backgroundColor: " #15a384", // Green background color
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <p style={{ color: "#fff" }}>Loading...</p>
        </div>
      )}


      <div className="row justify-content-center"></div>
      <div style={{ marginBottom: "10px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "1px" }}>
              <h4 style={{ margin: 0, color: "#007bff" }}>Total Matches: {todayMatchCount}</h4>
            </div>
            <div style={{ marginBottom: "10px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "1px" }}>
              <h4 style={{ margin: 0, color: "#007bff" }}>Today's Matches: {totalMatchCount}</h4>
            </div>
           
     
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
               
               USER PERFORMANCE 
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
                      Balance
                    </th>
                    <th id="fuds" scope="col">
                      SegmentType
                    </th>
                    <th id="fuds" scope="col">
                      TodatMatch
                    </th>
                    <th id="fuds" scope="col">
                      WinMatch
                    </th>
                    <th id="fuds" scope="col">
                      LoseMatch
                    </th>
                    <th id="fuds" scope="col">
                      ViewHistory
                    </th>
                   
                   
                  </tr>
                </thead>

                <tbody>
{referrals.length > 0 ? (
  referrals.map((referral, index) => (
    <tr key={referral.id}>
      <td>{index + 1}</td>
      <td>{referral.mobileNumber}</td>
      <td>{referral.balance}</td>
      <td>{referral.segmentType}</td>
      <td>{referral.totalMatches}</td>    
      <td>{referral.totalWins}</td>  
      <td>{referral.totalLoses}</td> 
      <td>   <Button color="primary" type="button" onClick={() => handleViewClick(referral.id, referral.mobileNumber)}>
                View
              </Button></td>     
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
