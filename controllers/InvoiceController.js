class InvoiceController {

    createInvoice (req, res) {
        try {
            const invoice = InvoiceService.createInvoice( req.body );
            return ResponseHandler.success(res, invoice);
        } catch ( e ) {
            ResponseHandler.error(res, e)
        }

    }


}
