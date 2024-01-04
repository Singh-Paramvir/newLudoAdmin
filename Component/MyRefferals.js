import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Arrow from "../public/arrow.svg";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
let moon;


const MyRefferal = () => {
  const [referrals, setReferrals] = useState([]);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [todayMatchCount, setTodayMatchCount] = useState(0);
  const [totalMatchCount, setTotalMatchCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const myReferrals = async () => {
    try {
      const token = localStorage.getItem("token");
      const bv = localStorage.getItem("buttonValue");
      const data = {
        buttonValue: bv,
      };

      setLoading(true);

      const res = await axios.post("/api/myrefferals", { token: token, data });
      const response = res.data;

      if (response.data.data.data2 && response.data.data.data2.length > 0) {
        setTotalMatchCount(response.data.data.data2[0].total);
      } else {
        console.error("Data2 array is empty or undefined");
      }

      if (response.data.data.data1 && response.data.data.data1.length > 0) {
        setTodayMatchCount(response.data.data.data1[0].total);
      } else {
        console.error("Data1 array is empty or undefined");
      }

      if (response.data.data.addSlote) {
        setReferrals(response.data.data.addSlote);
      } else {
        console.error("addSlote data is empty or undefined");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
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
      
 {/* Loading indicator */}
 {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            backgroundColor: "#15a384", // Green background color
            padding: "20px",
            borderRadius: "10px",
          }}
         
        >
          <p style={{ color: "#fff" }}>Loading...</p>
        </div>
      )}
<div className="row justify-content-center"></div>
      <div style={{ marginBottom: "10px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "1px" }}>
              <h4 style={{ margin: 0, color: "#007bff" }}>Total Users: {todayMatchCount}</h4>
            </div>
            <div style={{ marginBottom: "10px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "1px" }}>
              <h4 style={{ margin: 0, color: "#007bff" }}>Today's Users: {totalMatchCount}</h4>
            </div>


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
                All Users
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
                      Balance
                    </th>
                    <th id="fuds" scope="col">
                      MobileNumber
                    </th>
                    <th id="fuds" scope="col">
                      RewardAdd
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
      <td>{referral.balance}</td>
      <td>{referral.mobileNumber}</td>
      <td>{referral.EAWatch !== null ? referral.EAWatch : 0}</td>

   
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
