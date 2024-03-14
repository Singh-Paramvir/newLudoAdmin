import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const LinkPage = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = localStorage.getItem('token');
   
    if(!checkToken){
      router.push("/");
    }
   
    const storedSegment = localStorage.getItem('buttonValue');
    if (storedSegment) {
      setSelectedSegment(storedSegment);
    }
  }, []);

  useEffect(() => {
    const handleBackButtonClick = () => {
      localStorage.clear();
    };

    const backButton = document.querySelector(".back-button");
    if (backButton) {
      backButton.addEventListener("click", handleBackButtonClick);
    }

    return () => {
      if (backButton) {
        backButton.removeEventListener("click", handleBackButtonClick);
      }
    };
  }, []);

  const handleButtonClick = async (buttonValue) => {
    if (selectedSegment !== null) {
      try {
        console.log("Button value:", buttonValue);
        localStorage.setItem('buttonValue',buttonValue)
      } catch (error) {
        console.error('Error making API call:', error);
      }
    } else {
      // Handle the case where no segment is selected
      console.warn('Please select a segment before submitting.');
    }
  };
  const onSegmentClick = (segment, buttonValue) => {
    setSelectedSegment(segment);
    handleButtonClick(buttonValue);
  };
  function onSubmitHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec" onSubmit={onSubmitHandler}>
              <h3 className="funds-heading">Your Dashboard</h3>
              <h4 className="wel-text">
                {/* Welcome NAME ! */}
                <strong style={{ marginBottom: "10px !important" }}>
                  {" "}
                  Welcome Admin!
                </strong>{" "}
                <br /> <br />
                Hey there, Ludo fanatics! Get ready to roll the dice and dive into an epic journey of strategy and fun. As the game's master, I'm here to ensure your Ludo adventure is packed with excitement and challenges. Let's roll, move those pieces, and aim for victory together!
              </h4>
              <br></br>
                {/* Segment selection buttons */}
                <div className="segment-buttons">
  <button
    className={`segment-button ${selectedSegment === "1" ? "active" : ""}`}
    onClick={() => onSegmentClick("1", 1)}
  >
    Segment 1
  </button>

  <button
    className={`segment-button ${selectedSegment === "2" ? "active" : ""}`}
    onClick={() => onSegmentClick("2", 2)}
  >
    Segment 2
  </button>

  <button
    className={`segment-button ${selectedSegment === "3" ? "active" : ""}`}
    onClick={() => onSegmentClick("3", 3)}
  >
    Segment 3
  </button>

  <button
    className={`segment-button ${selectedSegment === "0" ? "active" : ""}`}
    onClick={() => onSegmentClick("0", 0)}
  >
    All Users
  </button>
</div>

{/* ... (the rest of your code) */}

<style jsx>{`
  .segment-button {
    background-color: orange;
    color: white;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .segment-button.active {
    background-color: #15a384;
    color: white;
    /* Add any other styles you want for the active button */
  }
`}</style>



              {/* Submit button */}
              {/* <button type="button" onClick={handleButtonClick}>Submit</button> */}

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

              

              <div className="col-head mt-3 text-center d-flex justify-content-center" id="col-head">
                <h6 className="mb-0 mt-0" style={{ fontSize: "14px" }}>
                </h6>

                <div className="col-md-7 left-headSec">
                  <div className="link-head  " id="first-sec">

                    <Link href={"/updateProfile"}>
                      <div
                        className="link-item first-sec first-set"
                        id="first-item "
                      >
                        SLOTES
                      </div>
                    </Link>

                    <div className="link-item third-sec" id="sec-item" onClick={() => router.push("/myRefferals")}>
                      ALL USERS
                    </div>

                    <Link href={"/total"}>
                      <div className="link-item five-sec" id="sec-item">
                        SORT USER
                      </div>
                    </Link>
                    <Link href={"/fa"}>
                      <div className="link-item six-sec" id="seconds-item">
                        PENDING REQUEST
                      </div>
                    </Link>

                    <Link href={"/login"}>
                      <div
                        className="link-item eleven-sec "
                        id="thirds-item"
                      >
                        APPROVED REQUEST
                      </div>
                    </Link>
                    <Link href={"/fa1"}>
                      <div
                        className="link-item ten-sec "
                        id="ten-item"
                      >
                        SOCIAL LINK
                      </div>
                    </Link>

                    <Link href={"/advertisement"}>
                      <div
                        className="link-item acc-sec "
                        id="acc-item"
                      >
                        Advertisement
                      </div>
                    </Link>
                    <Link href={"/segper"}>
                      <div
                        className="link-item fourteen-sec "
                        id="thirds-item"
                      >
                        SEGMENT PERCENTAGE
                      </div>
                    </Link>
                    <Link href={"/perfor"}>
                      <div
                        className="link-item fifteen-sec "
                        id="thirds-item"
                      >
                        PERFORMANCE
                      </div>
                    </Link>
                    <Link href={"/matchS"}>
                      <div
                        className="link-item acc-sec1 "
                        id="acc-item"
                      >
                        SORT MATCHES
                      </div>
                    </Link>
                    <Link href={"/cpc"}>
                      <div
                        className="link-item fifteen-sec "
                        id="thirds-item"
                      >
                        CPC
                      </div>
                    </Link>
                    <Link href={"/watchAdd"}>
                      <div
                        className="link-item sixteen-sec"
                        id="thirds-item"
                      >
                        EXTRA ADDS
                      </div>
                    </Link>
                    <Link href={"/allData"}>
                      <div
                        className="link-item seventeen-sec "
                        id="acc-item"
                      >
                        Ludo Assets
                      </div>
                    </Link>

                    <Link href={"/notification"}>
                      <div
                        className="link-item fifteen-sec "
                        id="thirds-item"
                      >
                        NOTIFICATION
                      </div>
                    </Link>
                    <Link href={"/gamezop"}>
                      <div
                        className="link-item eighteen-sec"
                        id="thirds-item"
                      >
                        GAMEZOP ADDS
                      </div>
                    </Link>
                    <Link href={"/links"}>
                      <div
                        className="link-item nineteen-sec "
                        id="acc-item"
                      >
                        LINKS
                      </div>
                    </Link>
                  </div>

                </div>

                <div className="col-md-3"></div>
              </div>

            

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkPage;
