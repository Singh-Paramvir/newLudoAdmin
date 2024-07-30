import axios from "axios";
// import http from 'http';

export default async function handler(req, res) {
  // const session = await getSession({req})
  if (req.method === "POST") {
    try {
      const {token} = req.body;
      const {data1} = req.body;
      console.log(data1,"data 1");
      const data = { buttonValue: data1.buttonValue };
console.log(data, "data");
      // const agent = new http.Agent({
      //   rejectUnauthorized: false,
      // });
      var config = {
        method: "post",
        url: "http://192.168.29.57:6000/api/v1/admin/getlinks",
        headers: {
          'Authorization': `Bearer ${token}`
        },data,
      };
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}



