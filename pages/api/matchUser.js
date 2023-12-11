import axios from "axios";
// import http from 'http';
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // const {data} = req.body;
      const {token}=req.body
      const {data} = req.body;
      // const agent = new http.Agent({
      //   rejectUnauthorized: false,
      // });
      console.log(data,"data ");
      var config = {
        method: "post",
        url: "http://airaicloud.com:6000/api/v1/admin/matchcount",
        headers:{
          'Authorization': `Bearer ${token}`,
      },data,
      };
      await axios(config).then(function (response) {
        //console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data});
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
