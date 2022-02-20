class CheckoutService {

    createCheckout (req) {

        // Validation and all

        const customerData = CustomerService.createCustomer(req.body);

        req.body.customerId = customerData.id;

        const checkout = CheckoutRepo.create(req.body);

        return checkout;


    }

    getCheckouts (req) {

        // Validation and all

        return CheckoutRepo.findAll(req.query);

    }


}
