let path = require("path");

let friendData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", (req,res) => {
        res.json(friendData);
    });
    app.post("/api/tables", (req,res) => {

        friendData.push(req.body);
    });
}