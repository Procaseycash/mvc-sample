class ValidationMiddlware {
    bodyValidation(schema) {
        return (req, res, next) => {
            try {
                schema.validate( req.body );
                next()
            } catch ( e ) {
                ResponseHandler.error( res, e );
            }
        };
    }
    queryValidation(schema) {
        return (req, res, next) => {
            try {
                schema.validate( req.query );
                next()
            } catch ( e ) {
                ResponseHandler.error( res, e );
            }
        };
    }

    pathValidation(schema) {
        return (req, res, next) => {
            try {
                schema.validate( req.params );
                next()
            } catch ( e ) {
                ResponseHandler.error( res, e );
            }
        };
    }
}
