class CustomerRepo {

    create(data) {
        data.id = Math.random();
        return Customer.create(data);
    }

    findById(id) {
        return Customer.findOne( { id } );
    }

    findByEmail(email) {
        return Customer.findOne( { email } );
    }

    findAll (query) {
        return Customer.find(query);
    }
}
