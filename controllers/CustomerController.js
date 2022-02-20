class CustomerController {

    createCustomer (req, res) {
        try {
            const customer = CustomerService.createCustomer( req.body );
            return ResponseHandler.success(res, customer);
        } catch ( e ) {
            ResponseHandler.error(res, e)
        }

    }


}
