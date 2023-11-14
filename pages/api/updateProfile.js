import axios from "axios";
import https from 'https';
// import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  // const session = await getSession({req})
  if (req.method === "POST") {
    try {
      const {token}= req.body;
      const data = req.body;
      const agent = new https.Agent({
        rejectUnauthorized: false,
      });
      var config = {
        method: "post",
        url: "https://airaicloud.com:6000/api/v1/admin/getslotes",
        headers: {
            'Authorization': `Bearer ${token}`
          },httpsAgent: agent,
      };
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data});
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
