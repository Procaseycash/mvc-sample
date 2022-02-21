class CustomerRepo extends RepoBase {

    create(data) {
        data.id = Math.random();
        return Customer.create(data);
    }

    findById(id) {
        return Customer.findOne( { id } );
    }

    findAll (query) {
        return Customer.find(query);
    }

    findByEmail(email) {
        return Customer.findOne( { email } );
    }
}
