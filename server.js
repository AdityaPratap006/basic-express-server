const express = require('express');

const secrets = require('./secrets.js');

const app = express();

app.get('/', (req, res) => {

    const user = {
        name: 'John Wick',
        birthplace: 'Belarus',
        hobby: 'Killing!',
        nickName: secrets.NICK_NAME,
        mission: 'Destroy the high table',
        weapons: ['Glock26', 'Glock34', 'AR-15', 'Benelli M4'],
    }
    res.send(user);
    // res.send('<h1>My server is running!</h1>')
})

app.listen(4000, () => {
    console.log('App is running on port 4000')
})