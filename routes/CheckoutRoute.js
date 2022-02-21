

router.group('/v1/checkouts', rt => {

    rt.post('/', ValidationMiddlware.bodyValidation(checkoutSchema), CheckoutController.createCheckout)
    rt.get('/', ValidationMiddlware.pathValidation(checkoutQuerySchema), CheckoutController.getCheckouts)
    rt.get('/:checkoutId', ValidationMiddlware.pathValidation(checkoutPathSchema),  CheckoutController.getCheckout)

})

module.export = router
