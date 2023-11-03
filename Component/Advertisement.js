import axios from "axios";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const Advertisement = () => {
  const imageRef = useRef();
  const router = useRouter();

  async function uploadImage(data) {
    try {
      const formData = new FormData();
      formData.append("id", "1"); // Fixed ID of 1
      formData.append("image", imageRef.current.files[0]);

      const res = await axios.post("api/advertise", formData);

      notify("Image uploaded successfully");
      setTimeout(() => {
        // router.push("/dashboard");
      }, 1000);
    } catch (err) {
      notifyError("Image upload failed");
      console.log(err);
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    uploadImage();
  }

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
    <div>
      <section className="profile-sec pb-0">
        <div className="container">
          <div className="row justify-content-center">
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

            <form className="input-sec">
              <div className="line profile-line"></div>
              <h3 className="heading-text pink-text mt-2">UPLOAD IMAGE</h3>

              {/* Image upload input field */}
              <div className="input-item">
                <h6 className="item-text">IMAGE</h6>
                <input
                  ref={imageRef}
                  type="file"
                  name="image"
                  accept="image/*" // Allow only image files
                  required
                />
              </div>

              <button
                className="btn btn-round btn-warning w-100"
                style={{ marginTop: "126px", marginBottom: "20px" }}
                type="button"
                onClick={onSubmitHandler}
              >
                UPLOAD
              </button>
            </form>
          </div>
        </div>
      </section>

      <script src="js/bootstrap.bundle.js"></script>
    </div>
  );
};

export default Advertisement;
