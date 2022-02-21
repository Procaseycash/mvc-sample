class InvoiceRepo extends RepoBase {

    create(data) {
        data.id = Math.random();
        return Invoice.create(data);
    }

    findById(id) {
        return Invoice.findOne( { id } );
    }

    findAll (query) {
        return Invoice.find(query);
    }

    findByCustomerId(customerId) {
        return Invoice.findOne( { customerId } );
    }

}
