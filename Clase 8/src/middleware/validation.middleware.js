const validateProduct = async (req, res, next) => {
    if (!req.body.name && !req.body.color) return res.send("NAME es obligatorio.")
    next()
}

export default {
    validateProduct
}