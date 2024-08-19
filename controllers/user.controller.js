const User = require('../models/user.schema');

const userController = {
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
};

// login
const loggedIn ={
    async login(req, res) {
        try {
            const user = await User.findOne(req.body);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;
