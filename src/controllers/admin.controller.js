const { adminService } = require("../services");

// create admin
const createAdmin = async (req, res) => {
    try {
        const reqBody = req.body;

        const admin = await adminService.createAdmin(reqBody);

        res.status(200).json({
            success: true,
            message: "Admin create successfully!",
            data: { admin },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get admin list
const adminList = async (req, res) => {
    try {
        const getList = await adminService.adminList();
        res.status(200).json({
            success: true,
            message: "Get admin list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update admin recode
const updateRecode = async (req, res) => {
    try {
        const adminId = req.params.adminId;

        const adminEx = await adminService.getadminById(adminId);
        if (!adminEx) {
            throw new Error("Admin not found");
        }

        await adminService.updateRecode(adminId, req.body);
        res.status(200).json({
            success: true,
            message: "Admin detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete admin recode
const deleteRecode = async (req, res) => {
    try {
        const adminId = req.params.adminId;

        const adminEx = await adminService.getadminById(adminId);
        if (!adminEx) {
            throw new Error("Admin not found");
        };

        await adminService.deleteRecode(adminId, req.body);
        res.status(200).json({
            success: true,
            message: "Admin detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createAdmin,
    adminList,
    updateRecode,
    deleteRecode
};