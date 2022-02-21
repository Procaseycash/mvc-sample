class ResponseHandler {

    success(res, data, message = 'Info Successful', statusCode = 201) {
        // Just an agree data representation format and nothing more and we can decide what format we tends to use.
        // {data: {}, message: 'Message the needs to use for notication', status: 200}
        res.status(statusCode).json({data, message, status: statusCode})
    }


    error(res, data, message = 'Failed Info', statusCode = 400) {

        // We can do more in this error layer
        logger.error(data.traceId, message, data);

        // Other format for how error is return, a format can be agreed upon
        // {data: [list of errors flagged], message: 'some validation for name & email are incorrect', status: 400 }
        res.status(statusCode).json({data, message, status: statusCode})
    }

}
