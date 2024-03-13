const Joi = require("joi");

// create admin
const createAdmin = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        phone_no: Joi.number().integer(),
        position: Joi.string().trim().required(),
        password: Joi.string().trim().required(),
    })
};

module.exports = {
    createAdmin
};