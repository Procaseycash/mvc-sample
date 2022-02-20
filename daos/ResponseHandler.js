class ResponseHandler {

    success(res, data, message = 'Info Successful', statusCode = 201) {
        res.status(statusCode).json({data, message, statusCode})
    }


    error(res, data, message = 'Failed Info', statusCode = 400) {

        logger.error(data.traceId, message, data);

        // Other info here
        res.status(statusCode).json({data, message, statusCode})
    }

}
