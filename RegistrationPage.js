import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // this route helps us to go to the next page

  useEffect(() => {
    window.localStorage.clear();
  }, []);

  async function login(data) {
    console.log(data, "from send");
    try {
      const res = await axios.post("api/login", data);
      const response = res.data;
      console.log(response, "response data aya ure");
      localStorage.setItem("token", response.data.data);
      localStorage.setItem("buttonValue", 0);

      notify("User Login Successfully");
      setTimeout(() => {
        router.push("/dashboard"); // here we are going to the next page
      }, 1000);
    } catch (err) {
      notifyError("Please Check Email or Password");
      console.log(err);
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      email,
      password,
    };

    console.log(data, "data here");

    login(data);
  }

  function forgotHandler(event) {
    console.log("yes fun hit");
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
              <h3 class="heading-text pink-text mt-2"> LOGIN ADMIN</h3>

              <div class="name-sec">
                <div className="input-item">
                  <h6 className="item-text">EMAIL</h6>
                  <input
                    ref={emailRef}
                    className="textinput"
                    type="email"
                    name="username"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
              </div>

              <div className="input-item password-input">
                <h6 className="item-text">PASSWORD</h6>
                <div className="password-wrapper">
                  <input
                    ref={passwordRef}
                    className={`textinput ${showPassword ? 'password-visible' : ''}`}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your Password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </button>
                </div>
              </div>

              <button
                class="btn btn-round btn-warning w-100"
                style={{ marginTop: "126px", marginBottom: "20px" }}
                type="button"
                onClick={onSubmitHandler}
              >
                CONTINUE
              </button>

              <p
                className="para-text"
                onClick={forgotHandler}
                style={{
                  // cursor: "pointer", // Change mouse pointer
                }}
              >
                Forgot Password? <span style={{ fontWeight: "600" }}>FORGOT</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      <script src="js/bootstrap.bundle.js"></script>
    </div>
  );
};

export default Login;
