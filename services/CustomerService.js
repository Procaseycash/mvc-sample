class CustomerService {

    createCustomer (data) {

        // Validation and all

        const customerData = CustomerRepo.create(data);

        // Other needed info

        return customerData;

    }


}
