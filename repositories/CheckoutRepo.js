class CheckoutRepo {

    create(data) {
        data.id = Math.random();
        return Checkout.create(data);
    }

    findById(id) {
        return Checkout.findOne( { id } );
    }

    findByCustomerId(customerId) {
        return Checkout.findOne( { customerId } );
    }

    findAll (query) {
        return Checkout.find(query);
    }
}
