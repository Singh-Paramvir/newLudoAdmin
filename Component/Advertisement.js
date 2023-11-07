import axios from "axios";
import React, { useRef,useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";

const Advertisement = () => {
  const [image1, setImage1] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);
  
  const [showImage1, setShowImage1] = useState();
  async function formSubmitHandler(event) {
    console.log("yes");
    event.preventDefault();

    const formData = new FormData();

    
    formData.append("avatar", image1);

    console.log(image1, "to check the first image");
    console.log([...formData], "to get the data of formData");

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, $pair[1]`);
    }

    console.log(formData, "to check the data entered by the user");
    const token = localStorage.getItem("token");
    console.log(token);
    let res = await axios.post("/api/advertise", { token: token,formData });
    // try {
    //   console.log("ander a gya");
    //   var config = {
    //     method: "post",
    //     url: "http://192.168.1.5:6000/api/v1/image1/addadvertisement",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     data: formData,
    //   };
    //   await axios(config).then(function (response) {
    //     console.log(JSON.stringify(response.data.data));
    //     toast.success("User Profile Updated Successfully");
    //     setTimeout(() => {
    //       router.push ("/dashboard")
    //     }, 500);
    //     // res.status(200).json({ data: response.data});
    //   });
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Something Went Wrong");
    //   // res.status(500).json({ Error: err });
    // }
  }

  function uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage1(event.currentTarget.files[0]);
      setShowImage1(URL.createObjectURL(img));
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    uploadImage();
  }
  const handleClick = () => setLoadingRef(false);
  const notify = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="new-dashboard ">
    
      <section className="profile-sec profile-sects">
        <div className="container">
          <div className="row justify-content-center">
          
            <ToastContainer />

            <form
              className="input-sec input-top p-0"
              id="form-setup"
              onSubmit={formSubmitHandler}
            >
              <div className="input-line" id="index-line"></div>

              <div className="padding-set">
                {/* <h3 className="heading-text mt-4">
                  {" "}
                  Join the Global Community
                </h3> */}
                {/* <img className="stier-logo" src="/navbar/white-logo.png"></img> */}

               

                <br></br>
                <div className="input-item mb-4" id="kyc-sec">
                  <h6 className="item-text"> Upload Home Image</h6>

                  <img className="kyc-image"  type="file"></img>
                  <input
                    type="file"
                    placeholder="Upload Front Side"
                    style={{ marginTop: "10px" }}
                    onChange={(e) => uploadImage(e)}
                  />
                </div>

         

                <Button
                  variant="primary"
                  className="btn btn-round btn-warning w-100 "
                  style={{ marginTop: "0px", marginBottom: "20px" }}
                  type="submit"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                >
                  {isLoadingRef ? "Loading…" : "     UPDATE"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertisement;
