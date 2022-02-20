

router.group('/v1/customers', rt => {

    rt.post('/', CustomerController.createCustomer)
    rt.get('/', CustomerController.getCustomers)
    rt.get('/:checkoutId', CustomerController.getCustomer)

})

module.export = router
