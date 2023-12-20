import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Arrow from "../public/arrow.svg";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useRef } from "react";
import { id } from "ethers/lib/utils";
// Add state variable to store the selected userId
let Id;
let rupees;
let players;
let time;
let addplayer1;
let addrupee1;
let addtime1
let first;
let second;
let third;
let fourth;

const MyRefferal = () => {

  const [referrals, setReferrals] = useState([]); // Initialize as an empty array
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen1, setModalOpen1] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);
  const firstRef = useRef()
  const firstRef1 = useRef()
  const firstRef2 = useRef()
  const addrupee = useRef()
  const addplayer = useRef()
  const addtime = useRef()
  const first = useRef()
  const second = useRef()
  const third = useRef()
  const fourth = useRef()
    // Function to open the second modal
    const openModal1 = () => {
      console.log("Opening modal");
      setModalOpen1(true);
    };

  async function myReferrals() {
    try {
      const token = localStorage.getItem("token");
      const data1 = localStorage.getItem("buttonValue");
      let data = {
            data:data1
      }
      let res = await axios.post("/api/updateProfile", { token: token,data }); 
      const response = res.data;
      console.log(response.data, "to get the data from api");
      setReferrals(response.data.data); // Update to access data property correctly
    } catch (err) {
      console.log(err);
    }
  }
  // model setup
  async function apiFunction(e) {
    try {
      setModalOpen(!modalOpen)
      Id = e
      

    } catch (err) {
      console.log(err, "api error here")
    }
  }
  async function apiFunction1(e) {
    try {
      setModalOpen2(!modalOpen2)
      Id = e
      console.log(Id,"ffffff");

    } catch (err) {
      console.log(err, "api error here")
    }
  }
  // handle modle onclick
  const handleAddChips = async (e) => {
    try {
      console.log(e, "0-0-0-0-00-");
  
      // Get the id from somewhere (e.g., a variable or a ref)
      const id = Id; // Replace ... with the actual id source
  
      rupees = firstRef1.current.value;
      players = firstRef.current.value;
      time = firstRef2.current.value;
      first = first.current.value;
      second = second.current.value;
      third = third.current.value;
      fourth = fourth.current.value;
  
      // Create an empty data object
      const data = {};
  
      // Add parameters to the data object if they have non-empty values
      if (id !== null) {
        data.id = id;
      }
      if (rupees !== null && rupees !== "") {
        data.rupees = rupees;
      }
      if (players !== null && players !== "") {
        data.players = players;
      }
      if (time !== null && time !== "") {
        data.time = time;
      }
      if (first !== null && first !== "") {
        data.first = first;
      }
      if (second !== null && second !== "") {
        data.second = second;
      }
      if (third !== null && third !== "") {
        data.third = third;
      }
      if (fourth !== null && fourth !== "") {
        data.fourth = fourth;
      }
  
      console.log(data, "moon hererererererere ");
      const token = localStorage.getItem("token");
      console.log(token, "fhfhjfh");
  
      // api call
      let res = await axios.post("/api/updateround", { token: token, data });
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
  // handle add slote

  const addslothandle = async (e) => {
 
   const type = localStorage.getItem("buttonValue");
     addplayer1 = addrupee.current.value;
      addrupee1 = addplayer.current.value;
     addtime1 = addtime.current.value;
     first = first.current.value;
     second = second.current.value;
     third = third.current.value;
     fourth = fourth.current.value;

 const data = {
  type, addplayer1,addrupee1,addtime1,first,second,third,fourth
 }
 console.log(data,"here add slote data");

 const token = localStorage.getItem("token");
 console.log(token, "fhfhjfh");

 // api call
  let res = await axios.post("/api/addSlote", { token: token, data });
  const response = res.data;
  console.log(response, "response data");
 setModalOpen(false);
  setTimeout(() => {
  window.location.reload();
 }, 1000);
     
  }
  // handle delete slotes

const handleDeleteSlot = async (e) => {
  console.log("working delete");
  console.log(Id,"&*&*&&&*&");
  const data = {
    id:Id
  }
   console.log(data,"data here");
  const token = localStorage.getItem("token");
      // console.log(token, "fhfhjfh");
  
      // api call
      let res = await axios.post("/api/deleteslote", { token: token,data });
      const response = res.data;
      console.log(response, "response data");
      setModalOpen(false);
      console.log("model closed");
  
      // Refresh the page after showing the toast message
      setTimeout(() => {
        window.location.reload();
      }, 1000);
}
  

  useEffect(() => {
    myReferrals();
  }, []);

  return (

    <div>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="modal-header d-flex justify-content-between align-items-center m-0">
          <h5 className="modal-title">Change Slote Detail </h5>
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
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Rupees"
            required
            ref={firstRef1}
          />
          <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Player"
            required
            ref={firstRef}
          />
           <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Time"
            required
            ref={firstRef2}
          />
           <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="First"
            required
            ref={first}
          />
            <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Second"
            required
            ref={second}
          />
            <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Third"
            required
            ref={third}
          />
            <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Fourth"
            required
            ref={fourth}
          />

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
            onClick={handleAddChips} // Call handleAddChips function when the "Save Changes" button is clicked
          >
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
      
       {/* Second Modal */}
      
       <Modal toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1}>
       <div className="modal-header d-flex justify-content-between align-items-center m-0">
          <h5 className="modal-title">Add New Slote  </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalOpen1(!modalOpen1)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Rupees"
            required
            ref={addrupee}
          />
          <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Player"
            required
            ref={addplayer}
          />
           <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Time"
            required
            ref={addtime}
          />
            <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="First"
            required
            ref={first}
          />
            <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Second"
            required
            ref={second}
          />
            <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="third"
            required
            ref={third}
          />
            <br></br>
          <input
            className="textinput mt-3"
            type="number"
            name="quantity"
            placeholder="Fourth"
            required
            ref={fourth}
          />

        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen1(!modalOpen1)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={addslothandle} // Call handleAddChips function when the "Save Changes" button is clicked
          >
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
        {/* delete model */}
        <Modal toggle={() => setModalOpen2(!modalOpen2)} isOpen={modalOpen2}>
        <div className="modal-header d-flex justify-content-between align-items-center m-0">
          <h5 className="modal-title">Delete Slote  </h5>
          </div><div>
          <ModalBody><h7> Do You Want To Delete Slot</h7></ModalBody>
         
        </div>
        <ModalBody>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen2(!modalOpen2)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={handleDeleteSlot} // Call handleAddChips function when the "Save Changes" button is clicked
          >
            Save Changes
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
                SLOTES
              </h3> 


              <table className="table funds-table mt-3" id="funds-color">
                <thead>
                  <tr>
                    <th id="fuds" scope="col">
                      Id
                    </th>
                    <th id="fuds" scope="col">
                      Rupees
                    </th>
                    <th id="fuds" scope="col">
                      Player
                    </th>
                    <th id="fuds" scope="col">
                      Time
                    </th>
                    <th id="fuds" scope="col">
                      Active
                    </th>
                    <th id="fuds" scope="col">
                      SegmentType
                    </th>
                    <th id="fuds" scope="col">
                      First
                    </th>
                    <th id="fuds" scope="col">
                      Second
                    </th>
                    <th id="fuds" scope="col">
                      Third
                    </th>
                    <th id="fuds" scope="col">
                      Fourth
                    </th>
                    <th id="fuds" scope="col">
                      TotalPlay
                    </th>
                    <th id="fuds" scope="col">
                      TimeDistance
                    </th>
                    <th id="fuds" scope="col">
                      Update
                    </th>
                    <th id="fuds" scope="col">
                      Delete
                    </th>

                  </tr>
                </thead>

                <tbody>
                  {referrals.length > 0 ? (
                    referrals.map((referral, index) => (
                      <tr key={referral._id}>
                        <td>{index + 1}</td>
                        <td>{referral.rupees}</td>
                        <td>{referral.players}</td>
                        <td>{referral.time}</td>
                        <td>{referral.active ? "1" : "0"}</td>
                        <td>{referral.type}</td>
                        <td>{referral.first}</td>
                        <td>{referral.second}</td>
                        <td>{referral.third}</td>
                        <td>{referral.fourth}</td>
                        <td>{referral.totalPlay}</td>
                        <td>{referral.timeToPlay}</td>
                        <td> <Button color="primary" type="button"
                          onClick={() => apiFunction(referral.id)}>
                          Update Slotes
                        </Button></td>
                        <td> <Button color="danger" type="button"
                          onClick={() => apiFunction1(referral.id)}>
                          Delete Slotes
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
            <button
  style={{
    width: '100px', // Set the desired width
    fontSize: '14px', // Optional: Adjust the font size
    padding: '5px 10px', // Optional: Adjust the padding
    marginLeft: '10px', // Optional margin
    marginTop: '10px', // Optional margin
  }}
  className="btn btn-primary"
  onClick={() => openModal1()}
>
  Add Slots
</button>


          </div>
        </div>
      </section>
    </div>
    // model

  );
};

export default MyRefferal;
