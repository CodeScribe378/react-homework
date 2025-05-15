import  Joi from "joi";


export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)).messages({
        'string.pattern.base': 'it is not suitable to the pattern'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.min':'min number should be 0',
        'number.max': 'max number should be 1000000'
    }),
    year: Joi.number().max(2024).min(1990).messages({
        'number.max':'max year should be 2024',
        'number.min': 'min year should be 1990'
    })

})