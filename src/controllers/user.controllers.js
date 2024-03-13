const { userService } = require("../services");

// user register
const register = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.register(reqBody);
        if (!user) {
            throw new Error("User not found")
        }

        res.status(200).json({
            success: true,
            message: "User create successfully...",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// user login
const login = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.findUser(reqBody.email)

        if (!user) {
            throw new Error("User not found")
        }

        if (reqBody.password != user.password) {
            res.status(400).json({ message: 'password invalid' })
        }

        let data = {
            _id: user._id,
            email: user.email
        }

        let token = createToken(data);
        console.log(token);

        res.cookie('token', token)
        res.status(200).json({ message: "login success..." })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};
// get list
const userList = async (req, res) => {
    try {
        const getList = await userService.userList();

        res.status(200).json({
            success: true,
            message: "Get user list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await timesheetService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }

        await userService.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        };

        await userService.deleteRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = { register,login, userList, updateRecode, deleteRecode }