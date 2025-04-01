const { StatusCodes } = require('http-status-codes');

const { Booking } = require('../models/index');
const { AppError,ValidationError } = require('../utils/error/index');
 
class BookingRepository {
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
            
        } catch (error) {
            if(error.name = "SequelizeValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'cannot create booking ',
                'there was some issue in creating the booking please try again',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

module.exports = BookingRepository;