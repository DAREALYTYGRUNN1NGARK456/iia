const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
	mongoURI
} = require("./config.json")
const Photo = new Schema({
	id: String,
	extn: String,
	deletionPassword: String
});

Photo.methods.filename = function () {
	return this.id + '.' + this.extn;
}

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

module.exports = mongoose.model('Photo', Photo);