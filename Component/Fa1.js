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
  const passwordRef3 = useRef();
  const passwordRef4 = useRef();
  const passwordRef5 = useRef();
  const passwordRef8 = useRef();
  // use state

  const [currentChips1, setCurrentChips1] = useState(0);
  const [currentChips2, setCurrentChips2] = useState(0);
  const [currentChips3, setCurrentChips3] = useState(0);
  const [currentChips4, setCurrentChips4] = useState(0);
  const [currentChips5, setCurrentChips5] = useState(0);
  const [currentChips6, setCurrentChips6] = useState(0);
  const [currentChips7, setCurrentChips7] = useState(0);
  const [currentChips8, setCurrentChips8] = useState(0);
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
  function handlePriceChange4(event) {
    setCurrentChips5(event.target.value);
  }
  function handlePriceChange5(event) {
    setCurrentChips6(event.target.value);
  }
  function handlePriceChange6(event) {
    setCurrentChips7(event.target.value);
  }
  function handlePriceChange8(event) {
    setCurrentChips8(event.target.value);
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
        let res = await axios.post("/api/sociallink", { token: token,data1 });
        const data = res.data; // Assuming the response contains chips and prices data
        console.log(data.data.data.id,"9999999999999");
        ID : data.data.data.id
        // Update the state with the fetched data
        setCurrentChips1(data.data.data.instagram);
        setCurrentChips2(data.data.data.rateUs);
        setCurrentChips3(data.data.data.termscondition);
        setCurrentChips4(data.data.data.privancyPolicy);
        setCurrentChips5(data.data.data.maximum);
        setCurrentChips6(data.data.data.minimum);
        setCurrentChips7(data.data.data.withdrawFee);
        setCurrentChips8(data.data.data.String);
        console.log(buttonValue,"bvbvbvb");
        if(buttonValue == 0){
          notifyError("Please Select a SegmentType");
          return;
        }
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

  async function login(data) {
    console.log(data,"asasas");
    try {
      var token = localStorage.getItem("token");
      console.log(token, "to get the token form local new one");
      const res = await axios.post("/api/fa",{ token: token, data });
      const response = res.data;
      console.log(response, "response data");
      

      notify("Data Updated Successfully");
      setTimeout(() => {
        router.push("/dashboard"); // here we are going to next page
      }, 1000);
    } catch (err) {
      notifyError("Data Not Update");
      console.log(err);
    }
  }

 async function onSubmitHandler(event) { 
  console.log("function hit");
    event.preventDefault();

    const instagram = emailRef.current.value;
    const rateUs = passwordRef.current.value;
    const termscondition = passwordRef1.current.value;
    const privancyPolicy = passwordRef2.current.value;
    const maximum = passwordRef3.current.value;
    const minimum = passwordRef4.current.value;
    const withdrawFee = passwordRef5.current.value;
    const String = passwordRef8.current.value;
    const ID = localStorage.getItem('buttonValue')
     console.log(ID,"get id ");
    const data = {
      ID ,
      instagram,
      rateUs,
      termscondition,
      privancyPolicy,
      maximum,
      minimum,
      withdrawFee,
      String
    };

    console.log(data, "data here");
    var token = localStorage.getItem("token");
      console.log(token, "to get the token form local new one");
      const res = await axios.post("/api/updateSocial",{ token: token, data });

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
              <h3 class="heading-text pink-text mt-2">UPDATE SOCIAL LINK AND FEE</h3>

              <div class="name-sec">
                <div className="input-item">
                  <h6 className="item-text">INSTAGRAM</h6>
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
                  <h6 className="item-text">RATEUS</h6>
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
                  <h6 className="item-text">TERMS&CONDITION</h6>
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
                  <h6 className="item-text">PRIVACYPOLICY</h6>
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
                <div className="input-item">
                  <h6 className="item-text">MAXIMUM</h6>
                  <input
                    ref={passwordRef3}
                    value={currentChips5}
                    className="textinput"
                    type="number"
                    name="last-name"
                    placeholder=""
                    required
                    onChange={handlePriceChange4} 
                  />
                </div>
                <div className="input-item">
                  <h6 className="item-text">MINIMUM</h6>
                  <input
                    ref={passwordRef4}
                    value={currentChips6}
                    className="textinput"
                    type="number"
                    name="last-name"
                    placeholder=""
                    required
                    onChange={handlePriceChange5} 
                  />
                </div>
                <div className="input-item">
                  <h6 className="item-text">WITHDRAE FEE</h6>
                  <input
                    ref={passwordRef5}
                    value={currentChips7}
                    className="textinput"
                    type="number"
                    name="last-name"
                    placeholder=""
                    required
                    onChange={handlePriceChange6} 
                  />
                </div>
                <div className="input-item">
                  <h6 className="item-text">STRING</h6>
                  <input
                    ref={passwordRef8}
                    value={currentChips8}
                    className="textinput"
                    type="string"
                    name="last-name"
                    placeholder=""
                    required
                    onChange={handlePriceChange8} 
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
