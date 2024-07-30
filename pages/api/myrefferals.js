import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { token } = req.body;
      const { data } = req.body;
      console.log(token, 'to be sent to the API!', data);

      const config = {
        responseLimit: false,
        timeout: 20000, // Set the timeout to 20 seconds
        method: 'post',
        url: 'http://192.168.29.57:6000/api/v1/admin/getalluser',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data,
      };

      const response = await axios(config);

      // console.log(JSON.stringify(response.data));
      res.status(200).json({ data: response.data });
    } catch (error) {
      console.error(error);

      if (error.response) {
        res.status(error.response.status).json({ error: error.response.data });
      } else if (error.request) {
        res.status(504).json({ error: 'Gateway Timeout: No response received from the server' });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
