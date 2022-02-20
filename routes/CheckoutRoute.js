

router.group('/v1/checkouts', rt => {

    rt.post('/', CheckoutController.createCheckout)
    rt.get('/', CheckoutController.getCheckouts)
    rt.get('/:checkoutId', CheckoutController.getCheckout)

})

module.export = router
