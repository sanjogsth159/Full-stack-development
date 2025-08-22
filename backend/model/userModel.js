const {mongoose} = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role : {
        type: String,
        enum: ["professional", "admin"],
        default: "professional",
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
