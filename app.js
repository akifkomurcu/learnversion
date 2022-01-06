const express = require('express')
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/vegas.html', (req, res) => {
    res.sendFile(__dirname + '/vegas.html')

})
app.get('/premier.html', (req, res) => {
    res.sendFile(__dirname + '/premier.html')

})
app.get('/generic.html', (req, res) => {
    res.sendFile(__dirname + '/generic.html')

})
app.get('/elements.html', (req, res) => {
    res.sendFile(__dirname + '/elements.html')

})






app.listen(port, () => {

    console.log("server running on:", port);

})