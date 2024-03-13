const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone_no: {
            type: Number
        },
        address: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;

