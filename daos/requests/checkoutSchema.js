module.exports = {
    amount: Yup.number().max(10000),
    title: Yup.string()
}
