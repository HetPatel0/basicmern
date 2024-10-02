const mongoose = require("mongoose");
const schema = mongoose.Schema({
    client_id: Number,
    acc_no: Number,
    client_name: String,
    amount_ac :Number
});
module.exports = mongoose.model("Clients",schema,"Clients");
