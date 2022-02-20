

router.group('/v1/invoices', rt => {

    rt.post('/', InvoiceController.createInvoice)
    rt.get('/', InvoiceController.getInvoices)
    rt.get('/:checkoutId', InvoiceController.getInvoice)

})

module.export = router
