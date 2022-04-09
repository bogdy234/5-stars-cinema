const mongoose = require("mongoose");
const {Schema} = mongoose;

const hallSchema = new Schema({
    number: Number,
    seats: Number,
    createdAt: {type: Date, default: Date.now},
    modifiedAt: {type: Date, default: Date.now},
});

const Hall = mongoose.model("Hall", hallSchema);

module.exports = Hall;
