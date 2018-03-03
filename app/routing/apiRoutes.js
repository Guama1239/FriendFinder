// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
//var friends = require("../data/friends");
//console.log(friends);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // app.get("/api/waitlist", function (req, res) {
    //     res.json(waitListData);
    // });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
        //console.log(req.body);
        //console.log("this is the previous to the last pushed element of the array",friends[friends.length-1]);
        friends.push(req.body);
        //("this is the last element pushed to the array",friends[friends.length-1]);
        var newMember = friends[friends.length-1];
        console.log("New Member Looking for Love", newMember);
        // console.log("displaying array de amigos",friends);
        for (let index = 0; index < friends.length-1; index++) {
            //console.log("this is index #", index, friends[index].scores);   
            for (let i = 0; i < 10; i++){
            console.log(Math.abs(Number(newMember.scores[i])-Number(friends[index].scores[i]))); 
        }}
        
        // if (tableData.length < 5) {
        //     tableData.push(req.body);
        //     res.json(true);
        // }
        // else {
        //     waitListData.push(req.body);
        //     res.json(false);
        // }
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friends = [];
        //waitListData = [];

        console.log(friends);
    });
};
