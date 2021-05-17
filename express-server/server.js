const express = require('express');
const axios = require('axios');
const Flatted = require('flatted');
const app = express();
const cors = require('cors');

const port = 3001;

app.use(
  cors({
    origin: '*',
  })
);

app.get(':endpoint([\\/\\w\\.-]*)', function (req, res) {
  let serializer = [{}];
  let endpoint = `https://coding-challenge.climatechoice.tech/api/v1${req.params.endpoint}`;

  axios
    .get(endpoint)
    .then((response) => {
      serializer = Flatted.parse(Flatted.stringify(response.data));
      res.json(serializer);
      res.end();
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
