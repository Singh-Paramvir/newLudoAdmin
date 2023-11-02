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

const MyRefferal = () => {
  const firstRef = useRef();
  const firstRef1 = useRef();
  const [selectedUserId, setSelectedUserId] = useState(null); 
  const [referrals, setReferrals] = useState([]); // Initialize as an empty array
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);
 


  async function myReferrals() {
    try {
      const token = localStorage.getItem("token");
      let res = await axios.post("/api/getapproverequest", { token: token });
      const response = res.data;
      console.log(response.data, "to get the data from api");
      setReferrals(response.data.data); // Update to access data property correctly
    } catch (err) {
      console.log(err);
    }
  }
// model 




  useEffect(() => {
    myReferrals();
  }, []);

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
                Approved 
              </h3>

              <table className="table funds-table mt-3" id="funds-color">
                <thead>
                  <tr>
                    <th id="fuds" scope="col">
                      Sr. No.
                    </th>
                    <th id="fuds" scope="col">
                      Name
                    </th>
                    <th id="fuds" scope="col">
                      MobileNumber
                    </th>
                    <th id="fuds" scope="col">
                      Fee
                    </th>
                    <th id="fuds" scope="col">
                      PaymentMethod
                    </th>
                    <th id="fuds" scope="col">
                    TotalAmont
                    </th>
                    <th id="fuds" scope="col">
                    TransactionId
                    </th>
                   
                  </tr>
                </thead>

                <tbody>
{referrals.length > 0 ? (
  referrals.map((referral, index) => (
    <tr key={referral._id}>
      <td>{index + 1}</td>
      <td>{referral.firstName}</td>
      <td>{referral.mobileNumber}</td>
      <td>{referral.money}</td>
      <td>{referral.paymentMethod}</td>
      <td>{referral.totalAmount}</td>
      <td>{referral.transactionId}</td>
                     
    </tr>
    
  ))
) : (
  <tr>
    <td colSpan="4">No referrals found</td>
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
