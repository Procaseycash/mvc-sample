class CheckoutController {

    createCheckout (req, res) {
        try {
            const checkout = CheckoutService.createCheckout( req.body );
            return ResponseHandler.success(res, checkout);
        } catch ( e ) {
            ResponseHandler.error(res, e)
        }

    }

    findCheckouts (req, res) {
        try {
            const checkout = CheckoutService.findCheckouts( req.body );
            return ResponseHandler.success(res, checkout);
        } catch ( e ) {
            ResponseHandler.error(res, e)
        }

    }


}
