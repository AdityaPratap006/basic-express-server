const express = require('express');

const app = express();

app.get('/', (req, res) => {

    const user = {
        name: 'John Wick',
        hobby: 'Killing!',
    }
    res.send(user);
    // res.send('<h1>My server is running!</h1>')
})

app.listen(5000, () => {
    console.log('App is running on port 5000')
})