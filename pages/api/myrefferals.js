import axios from 'axios';
import https from 'https';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { token} = req.body;
      const {data} = req.body;
      console.log(token, 'to be sent to the API!',data);

      const agent = new https.Agent({
        rejectUnauthorized: false,
      });

      const config = {
        method: 'post',
        url: 'https://airaicloud.com:6000/api/v1/admin/getalluser',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data,
        httpsAgent: agent,
      };

      const response = await axios(config);

      console.log(JSON.stringify(response.data));
      res.status(200).json({ data: response.data });
    } catch (error) {
      console.error(error);

      if (error.response) {
        res.status(error.response.status).json({ error: error.response.data });
      } else if (error.request) {
        res.status(500).json({ error: 'No response received from the server' });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
