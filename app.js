console.log("ciao!!");
var users = [
    {
        name: 'Carlo',
        surname: 'Leonardi'
    },
    {
        name: 'Mario',
        surname: 'Merola'
    },
    {
        name: 'Pippo',
        surname: 'Leonardi'
    },
    {
        name: 'Mario',
        surname: 'Rossi'
    }
];

var express = require('express');
var app = express();

app.get('/users/:index', function(req, res){
    console.log("------------------");
    console.log("req.params:", req.params);
    console.log("req.query:", req.query);
    console.log("req.body:", req.body);
    if (isNaN(req.params.index) || parseInt(req.params.index) < 0) {
        res.status(400).json({message: req.params.index + ' is not a positive number'})
    } else if (parseInt(req.params.index) >= users.length) {
        res.status(404).json({message: 'User not found'})
    } else {
        var user = users[req.params.index];
        res.json(user);
    }
});


app.get('/users', function(req, res){
    if (req.query.name) {
        /*var filteredArray = [];
        for(var user of users) {
            if (user.name.toLowerCase() === req.query.name.toLowerCase()) {
                filteredArray.push(user);
            }
        }*/
        var filteredArray = users.filter(function(item){
            return item.name.toLowerCase() === req.query.name.toLowerCase()
        })
        res.json(filteredArray);
    } else {
        res.json(users);
    }
})



app.listen(3001);