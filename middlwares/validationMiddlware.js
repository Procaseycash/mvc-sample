class ValidationMiddlware {
    bodyValidation(schema) {
        return (req, res, next) => {
            try {
                schema.validate( req.body );
            } catch ( e ) {
                ResponseHandler.error( res, e );
            }
        };
    }
    queryValidation(schema) {
        return (req, res, next) => {
            try {
                schema.validate( req.query );
            } catch ( e ) {
                ResponseHandler.error( res, e );
            }
        };
    }

    pathValidation(schema) {
        return (req, res, next) => {
            try {
                schema.validate( req.params );
            } catch ( e ) {
                ResponseHandler.error( res, e );
            }
        };
    }
}
