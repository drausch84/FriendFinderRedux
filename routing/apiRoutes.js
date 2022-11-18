/* Import Friends Array */
const friends = require('../data/friends');

module.exports = function(app){
    //get request to display json data of friends array when user visits page
    app.get('/api/friends', (req, res) =>{
        res.json(friends);
    });

    //user post request that occurs when user submits the survey, hence submitting data to the express server
    app.post('/api/friends', (req, res)=>{
        //server responds to the user's survey result to compare against other 'friends' in array
        //Difference between user results and friends array is calculated
        //Friend with least difference will be the 'best match'
        
        //obj to store best match
        const bestMatch = {
            name: "",
            photo: "",
            description: "",
            friendDifference: Infinity
        };
        
        //take user's survey post request and parse it
        const userData = req.body;
        const userScores = userData.scores;

        //var to hold difference between user score and friends in array
        var totalDifference;

        //loop through all friend possibilities in array
        for(var i =0; i < friends.length; i++){
            const currentFriend = friends[i];
            totalDifference = 0;

            //log friend name
            console.log(currentFriend.name);

            //inner loop to iterate through scores of each friend in array
            for(var j = 0; j < currentFriend.scores.length; j++){
                const currentFriendScore = currentFriend.scores[j];
                const currentUserScore = userScores[j];

                //calculate difference between user score and current friend score and store difference in total difference var
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            //if the sum of the difference is less than or equal to the difference of the current 'best friend match'
            if(totalDifference <= bestMatch.friendDifference){
                //reset the best match to be the matched friend
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.description = currentFriend.description;
                bestMatch.friendDifference = totalDifference;
            }
        }
        //push user's score (which must happen after check or the user will be matched up with him or herself as best friend)
        friends.push(userData);

        //return JSON of best friend match to be used in EJS file
        res.json(bestMatch);
    });
};