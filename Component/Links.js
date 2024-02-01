import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
let ID;
const Login = () => {
  const emailRef = useRef();
 

  // use state

  const [currentChips1, setCurrentChips1] = useState();


  function handlePriceChange(event) {
    setCurrentChips1(event.target.value);
  }
 
  

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
        let res = await axios.post("/api/getgamezop1", { token: token,data1 });
        const data = res.data; // Assuming the response contains chips and prices data
        console.log(data.data.data,"9999999999999");
      
       
        // Update the state with the fetched data
        setCurrentChips1(data.data.data);
       
     
        console.log(buttonValue,"bvbvbvb");
      
        notify("Data Get Successfully");

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

    const first = emailRef.current.value;
   
 
    const ID = localStorage.getItem('buttonValue')
     console.log(ID,"get id ");
    const data = {
   first
     
    };

    console.log(data, "data here");
    var token = localStorage.getItem("token");
      console.log(token, "to get the token form local new one");
      const res = await axios.post("/api/updatelinks",{ token: token, data });
     console.log(res,"response");
     
      setTimeout(() => {
        window.location.reload();
      }, 1000);

  
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

            <form  style={{width:"500px"}}  class="input-sec">
              <div class="line profile-line"></div>
              <h3 class="heading-text pink-text mt-2">EDIT GAMEZOP LINK</h3>

              <div  className="name-sec">
    <div className="input-item">
      <br></br>
        <h6 className="item-text">GAMEZOP LINK ARRAY</h6>
        <textarea
            style={{ height: "180px", margin: "15px 0px", }}
            ref={emailRef}
            value={currentChips1}
            className="textinput"
            name="username"
            placeholder=""
            required
            onChange={handlePriceChange}
        />
    </div>

               
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
