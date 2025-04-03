const Joi = require("joi");

const ListingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        image: Joi.string().uri().required(),
        price: Joi.number().min(0).required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
    }).required()
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required()
    }).required()
});

module.exports = { ListingSchema, reviewSchema };
