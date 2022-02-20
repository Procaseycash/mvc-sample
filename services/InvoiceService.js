class InvoiceService {

    createInvoice (data) {

        // Validation and all

        const customerData = CustomerService.createCustomer(data);

        data.customerId = customerData.id;

        const invoice = InvoiceRepo.create(data);

        return invoice;


    }


}
