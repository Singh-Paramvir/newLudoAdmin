import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
let ID;
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRef1 = useRef();
  const passwordRef2 = useRef();


  

  useEffect(() => {
    // Function to fetch the current chips and prices from the server
    async function fetchCurrentData() {
      try {
        let buttonValue = localStorage.getItem('buttonValue')
        const data1 ={
          buttonValue
        }
        const token = localStorage.getItem("token");
        // Make the API call to fetch the data
        // let res = await axios.post("/api/getadddata", { token: token,data1 });
        const data = res.data; // Assuming the response contains chips and prices data
        console.log(data.data.data[0].perDay,"9999999999999");
       
 

      } catch (err) {
        console.log(err);
        // Handle any error if needed
      }
    }

    // Call the function to fetch the data
    fetchCurrentData();
  }, []);

 
  const router = useRouter(); // this route helps us to going next page

 
 async function onSubmitHandler(event) { 
  console.log("function hit");
    event.preventDefault();

    const heading = emailRef.current.value;
    const message = passwordRef.current.value;
     const users = passwordRef1.current.value;
 
    const ID = localStorage.getItem('buttonValue')
     console.log(ID,"get id ");
    const data = {
     heading,message,users
     
    };

    console.log(data, "data here");
    var token = localStorage.getItem("token");
      console.log(token, "to get the token form local new one");
      const res = await axios.post("/api/sendNotification",{ token: token, data });
     console.log(res,"response");
     
      setTimeout(() => {
        window.location.reload();
      }, 2000);

  
  }

  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <section class="profile-sec pb-0">
        <div class="container">
          <div class="row justify-content-center">
            <ToastContainer
              position="top-right"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <form class="input-sec">
              <div class="line profile-line"></div>
              <h3 class="heading-text pink-text mt-2">Send Notification</h3>

              <div className="name-sec">
  <div className="input-item">
    <h6 className="item-text">HEADING</h6>
    <textarea
      ref={emailRef}
      // value={currentChips1}
      className="textinput"
      rows={4} // Set the number of visible lines
      name="heading"
      placeholder=""
      required
     
    />
  </div>
</div>

             <div className="input-item">
  <h6 className="item-text">MESSAGE</h6>
  <textarea
    ref={passwordRef}
    // value={currentChips2}
    className="textinput"
    name="message"
    placeholder=""
    style={{ height: '80px' }}  
    required

  />
</div>

           {/* Dropdown Select with Options */}
           <div className="input-item">
              <h6 className="item-text">SELECT OPTION</h6>
              <select
               ref={passwordRef1}
                name="selectOption"
                className="textinput"
                // Add your desired options
                // For example:
                // <option value="all">All</option>
                // <option value="todaysUser">Today's User</option>
                // Add more options as needed
              >
                <option value="0">All Users</option>
                <option value="1">Today's User</option>
                <option value="2">Last 3 days Active</option>
                <option value="3">Last 7 days Active</option>
              </select>
            </div>  
              
              
              
              <a
                href="funds-page.html"
                class="btn btn-round btn-warning w-100 "
                style={{ marginTop: "126px", marginBottom: "20px" }}
                type="button"
                onClick={onSubmitHandler}
              >
                UPDATE
              </a>

            </form>
          </div>
        </div>
      </section>

      <script src="js/bootstrap.bundle.js"></script>
    </div>
  );
};

export default Login;

