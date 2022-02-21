

router.group('/v1/customers', rt => {

    rt.post('/',  ValidationMiddlware.bodyValidation(customerSchema),  CustomerController.createCustomer)
    rt.get('/',  ValidationMiddlware.queryValidation(customerQuerySchema),  CustomerController.getCustomers)
    rt.get('/:checkoutId', ValidationMiddlware.pathValidation(customerPathSchema), CustomerController.getCustomer)

})

module.export = router
