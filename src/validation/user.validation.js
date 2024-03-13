const Joi = require("joi");

// user validation
const register = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        phone_no: Joi.number().required(),
        password: Joi.string().trim().required(),
        address: Joi.string().trim().required(),
    })
};

module.exports = {
    register
};