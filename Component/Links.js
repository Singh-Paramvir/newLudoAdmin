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

  // use state

  const [currentChips1, setCurrentChips1] = useState();
  const [currentChips2, setCurrentChips2] = useState();
  const [currentChips3, setCurrentChips3] = useState();
  const [currentChips4, setCurrentChips4] = useState();

  function handlePriceChange(event) {
    setCurrentChips1(event.target.value);
  }
  function handlePriceChange1(event) {
    setCurrentChips2(event.target.value);
  }
  function handlePriceChange2(event) {
    setCurrentChips3(event.target.value);
  }
  function handlePriceChange3(event) {
    setCurrentChips4(event.target.value);
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
        console.log(data.data,"9999999999999");
        console.log(data.data.data[0].link,"?????");
       
        // Update the state with the fetched data
        setCurrentChips1(data.data.data[0].link);
        setCurrentChips2(data.data.data[1].link);
        setCurrentChips3(data.data.data[2].link);
        setCurrentChips4(data.data.data[3].link);
     
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
    const second = passwordRef.current.value;
    const third = passwordRef1.current.value;
     const fourth = passwordRef2.current.value;
 
    const ID = localStorage.getItem('buttonValue')
     console.log(ID,"get id ");
    const data = {
   first,second,third,fourth
     
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

            <form class="input-sec">
              <div class="line profile-line"></div>
              <h3 class="heading-text pink-text mt-2">EDIT IMAGES LINK</h3>

              <div class="name-sec">
                <div className="input-item">
                  <h6 className="item-text">HOME SCREEN</h6>
                  <input
                    ref={emailRef}
                    value={currentChips1}
                    className="textinput"
                    type="email"
                    name="username"
                    placeholder=""
                    required
                    onChange={handlePriceChange} 
                  />
                </div>

               
              </div>
              <div className="input-item">
                  <h6 className="item-text">MY BALANCE SCREEN</h6>
                  <input
                    ref={passwordRef}
                    value={currentChips2}
                    className="textinput"
                    type="string"
                    name="last-name"
                    placeholder=""
                    required
                    onChange={handlePriceChange1} 
                  />
                </div>
                <div className="input-item">
                  <h6 className="item-text">WITHDRAW SCREEN</h6>
                  <input
                    ref={passwordRef1}
                    value={currentChips3}
                    className="textinput"
                    type="string"
                    name="last-name"
                    placeholder=""
                    required
                    onChange={handlePriceChange2} 
                  />
                </div>
                <div className="input-item">
                  <h6 className="item-text">GAMEZOP</h6>
                  <input
                    ref={passwordRef2}
                    value={currentChips4}
                    className="textinput"
                    type="string"
                    name="last-name"
                    placeholder=""
                    required
                    onChange={handlePriceChange3} 
                  />
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
