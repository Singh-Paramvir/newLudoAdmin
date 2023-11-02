import React, { useEffect, useState,useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Arrow from "../public/arrow.svg";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let moon;


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
      let res = await axios.post("/api/myrefferals", { token: token });
      const response = res.data;
      console.log(response.data, "to get the data from api");
      setReferrals(response.data.data); // Update to access data property correctly
    } catch (err) {
      console.log(err);
    }
  }
// model 
async function apiFunction(e) {
  try{
    setModalOpen(!modalOpen)
    moon = e
    console.log(moon, "userId");
    
  }catch(err){
    console.log(err,"api error here")
  }
}


// delete user handler
const handleAddChips3 = async (e) => {
  try {
   
    const data = {
     id : moon
    };
    console.log(data, "moon hererererererere ");
    const token = localStorage.getItem("token");
    

    // api call
    let res = await axios.post("/api/deleteuser", { token: token, data });
    const response = res.data;
    console.log(response, "response data");

    // Close the modal
    setModalOpen(false);
    console.log("model closed");

   // Refresh the page after showing the toast message
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (e) {
    console.log(e);
  }
};


  useEffect(() => {
    myReferrals();
  }, []);

  return (
    
    <div>
       {/* // delete user model */}
       <Modal toggle={() => setdeleteModelOpen(!modalOpen)} isOpen={modalOpen}>
  <div className="modal-header d-flex justify-content-between align-items-center m-0">
    <h5 className="modal-title">Do You Want To Delete User</h5>
    <button
      aria-label="Close"
      className="close"
      type="button"
      onClick={() => setModalOpen(!modalOpen)}
    >
      <span aria-hidden={true}>×</span>
    </button>
  </div>
  <ModalBody>
   
  </ModalBody>
  <ModalFooter>
    <Button
      color="secondary"
      type="button"
      onClick={() => setModalOpen(!modalOpen)}
    >
      Close
    </Button>
    <Button
    color="primary"
    type="button"
    onClick={handleAddChips3} // Call handleAddChips function when the "Save Changes" button is clicked
  >
    Delete User
  </Button>
  </ModalFooter>
</Modal>



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
                My Referrals
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
                      ReferBy
                    </th>
                    <th id="fuds" scope="col">
                      Balance
                    </th>
                    <th id="fuds" scope="col">
                      MobileNumber
                    </th>
                    <th id="fuds" scope="col">
                    RefferedCode
                    </th>
                    <th id="fuds" scope="col">
                      Delete User
                    </th>
                  </tr>
                </thead>

                <tbody>
{referrals.length > 0 ? (
  referrals.map((referral, index) => (
    <tr key={referral._id}>
      <td>{index + 1}</td>
      <td>{referral.firstName}</td>
      <td>{referral.refferedBy}</td>
      <td>{referral.balance}</td>
      <td>{referral.mobileNumber}</td>
      <td>{referral.refferedCode}</td>
                        <td>
                          <Button
                            color="danger" // Use the danger color for the "Cut Chips" button
                            type="button"
                            onClick={() => apiFunction(referral.id)}
                          >
                            Delete
                          </Button>
                        </td>
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
