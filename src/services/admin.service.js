const { admin } = require("../models");



const createAdmin = async (reqBody) => {
    return admin.create(reqBody);
};

const adminList = async (req, res) => {
    return admin.find()
};

const getadminById = async (adminId) => {
    return admin.findById(adminId);
};

const updateRecode = async (adminId, updateBody) => {
    return admin.findByIdAndUpdate(adminId, { $set: updateBody });
};

const deleteRecode = async (adminId) => {
    return admin.findByIdAndDelete(adminId);
};

module.exports = {
    createAdmin,
    adminList,
    getadminById,
    updateRecode,
    deleteRecode
};