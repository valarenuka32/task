const { user } = require("../models");

// user register
const register = async (reqBody) => {
    return user.create(reqBody)
};

// find user by email
const findUser = async (email) => {
    return user.findOne({ email })
};

// get all user list
const userList = async () => {
    return user.find()
};

// get user details by id
const getUserById = async (userId) => {
    return user.findById(userId)
};

// user details update by id
const updateRecode = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody })
};

// user details delete by id
const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId)
};

module.exports = {
    register,
    findUser,
    getUserById,
    deleteRecode,
    updateRecode,
    userList
};