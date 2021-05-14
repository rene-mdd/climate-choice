const express = require("express");
const axios = require("axios");
const Flatted = require('flatted');
const app = express();
const cors = require("cors")

const port = 3001;

app.use(cors({
    origin: "*"
}))

app.get(":endpoint([\\/\\w\\.-]*)", function(req, res, next) {

    let a = [{}];
  

    let endpoint = `https://coding-challenge.climatechoice.tech/api/v1${req.params.endpoint}`

    axios.get(endpoint).then(response => {
        a = Flatted.parse(Flatted.stringify(response.data));
        res.json(a);
        res.end();
    }).catch(error => {
        console.log(error);
    })

    
})

// app.use(doesNotModifyBody);
// app.use(doesModifyBody);

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})