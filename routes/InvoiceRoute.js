

router.group('/v1/invoices', rt => {

    rt.post('/',  ValidationMiddlware.bodyValidation(invoiceSchema), InvoiceController.createInvoice)
    rt.get('/',  ValidationMiddlware.queryValidation(invoiceQuerySchema), InvoiceController.getInvoices)
    rt.get('/:checkoutId',  ValidationMiddlware.pathValidation(invoicePathSchema), InvoiceController.getInvoice)

})

module.export = router
