import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {token} = req.body;
      const {formData} = req.body;
     
      console.log(formData,"for, data herer");
      console.log(formData,"dfdfdf",token);
     
      var config = {
            method: "post",
            url: "https://airaicloud.com:6000/api/v1/image1/addadvertisement",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
            data: formData,
          };
     console.log("yes");
     const serverError = error.response.data.error;
console.log(serverError);

      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
     // console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
