class CheckoutRepo extends RepoBase {

    create(data) {
        data.id = Math.random();
        return Checkout.create(data);
    }

    findById(id) {
        return Checkout.findOne( { id } );
    }

    findAll (query) {
        return Checkout.find(query);
    }

    findByCustomerId(customerId) {
        return Checkout.findOne( { customerId } );
    }

}
