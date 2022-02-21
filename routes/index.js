// imports happens here

router.group('/api', rt => {
    rt.use(CheckoutRoute);
    rt.use(CustomerRoute);
    rt.use(InvoiceRoute);
    rt.use(ResponseHandler.globalError)
});

module.exports = router;
