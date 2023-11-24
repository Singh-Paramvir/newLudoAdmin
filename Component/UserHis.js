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
let mobileNum;
const MyRefferal = () => {

  
  const router = useRouter();
  const { id: queryId, mobileNumber } = router.query;
  const [referrals, setReferrals] = useState([]);

  const firstRef = useRef();
  const firstRef1 = useRef();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [modalOpen, setModalOpen] = React.useState(false);





  useEffect(() => {
    const fetchData = async () => {
      console.log("Received id:", queryId);
      console.log("Received mobileNumber:", mobileNumber);

      // Assign mobileNumber to a variable
      mobileNum = mobileNumber;
      console.log(mobileNum, "here I want");

      const data = {
        id: queryId,
        mobileNumber: mobileNum,
      };

      console.log("Request data:", data);
      const token = localStorage.getItem("token");

      try {
        const response = await axios.post("/api/userHis", { token: token, data });
        console.log("Response data:", response.data);

        const responseData = response.data.data.data;
        setReferrals(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (queryId) {
      fetchData();
    } else {
      console.log("queryId is undefined.");
    }
  }, [queryId, mobileNumber]);
  
  console.log('Referrals:', referrals); 
  
  // console.log('Referrals:', referrals);
  return (
    
    <div>
     
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
                UserHistory 
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
                      UserId
                    </th>
                    <th id="fuds" scope="col">
                      Win
                    </th>
                    <th id="fuds" scope="col">
                      Lose
                    </th>
                    <th id="fuds" scope="col">
                      Players
                    </th>
                    <th id="fuds" scope="col">
                    Position
                    </th>
                    <th id="fuds" scope="col">
                    date
                    </th>
                   
                  </tr>
                </thead>

                <tbody>
  {referrals.length > 0 ? (
    referrals.map((referral, index) => (
      <tr key={referral._id}>
        <td>{index + 1}</td>
        <td>{mobileNum}</td>
        <td>{referral.userId}</td>
        <td>{referral.win}</td>
        <td>{referral.lose}</td>
        <td>{referral.players}</td>
        <td>{referral.position}</td>
        <td>{new Date(referral.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })}</td>
        {console.log('Rendering row:', referral)} {/* Add this line */}
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
