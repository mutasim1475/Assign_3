let mongoose = require('mongoose');
// create a team model
let teamModel = mongoose.Schema({
name: String,
W: Number,
L: Number,
GF: Number,
GA: Number,
},
{
    collection: "team"
}
);
module.exports= mongoose.model('Team', teamModel);

