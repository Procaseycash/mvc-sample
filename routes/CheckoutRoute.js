

router.group('/v1/checkouts', rt => {

    rt.post('/', ValidationMiddlware.bodyValidation(checkoutSchema), CheckoutController.createCheckout)
    rt.get('/', ValidationMiddlware.pathValidation(checkoutQuerySchema), CheckoutController.getCheckouts)
    rt.get('/:checkoutId', ValidationMiddlware.pathValidation(checkoutPathSchema),  CheckoutController.getCheckout)

    rt.use(ResponseHandler.globalError) // This is just a nested error thrown which is not catch within the try/catch

})

module.export = router
