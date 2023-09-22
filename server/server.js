const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 3001;

const userDatabase = [];

// Create users endpoint
app.get('/user', (req, res) => {
    const { type, phone } = req.body;
    const user = {
        type,
        phone
    };

    // userDatabase.push(user);

    const welcomeMessage = 'EMERGENCY!!! Im in need of' + user.type + ', kindly contact me at ' + user.phone;

    sendSms('+917997074680', welcomeMessage);

    res.status(201).send({
        message: 'Message sent successfully',
        data: user
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;