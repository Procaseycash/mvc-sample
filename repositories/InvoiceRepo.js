class InvoiceRepo {

    create(data) {
        data.id = Math.random();
        return Invoice.create(data);
    }

    findById(id) {
        return Invoice.findOne( { id } );
    }

    findByCustomerId(customerId) {
        return Invoice.findOne( { customerId } );
    }

    findAll (query) {
        return Invoice.find(query);
    }
}
