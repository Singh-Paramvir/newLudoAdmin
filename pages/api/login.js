import axios from "axios";
// import http from 'http';
import CircularJSON from 'circular-json';

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      // const agent = new http.Agent({
      //   rejectUnauthorized: false,
      // });
      console.log(data, "to be send to api!!!!!!!!!!");
    
      var config = {
        method: "post",
        url: "http://airaicloud.com:6000/api/v1/auth/adminlogin",
        data,
        // httpAgent: agent
      };
      
      const response = await axios(config);
      console.log(CircularJSON.stringify(response.data));
      res.status(200).json({ data: CircularJSON.parse(CircularJSON.stringify(response.data)) });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
