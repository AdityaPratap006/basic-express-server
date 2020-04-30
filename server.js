const express = require('express');

const secrets = require('./secrets.js');

const app = express();

app.get('/', (req, res) => {

    const user = {
        name: 'John Wick',
        birthplace: 'Belarus',
        hobby: 'Killing!',
        nickName: secrets.NICK_NAME
    }
    res.send(user);
    // res.send('<h1>My server is running!</h1>')
})

app.listen(5000, () => {
    console.log('App is running on port 5000')
})