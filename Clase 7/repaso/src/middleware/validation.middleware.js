//Middleware: es una función que siempre se encuentra entre la solicitud y la respuesta
//es decir: entre el REQ y el RES
//esta función determina si se puede continuar o no

const validateProduct = async (req, res, next) => {
    //REQ: solicitud, RES: respuesta, NEXT: es la palabra reservada que permite avanzar
    if (!req.body.name) return res.send("NAME es obligatorio.")
    console.log("Acá!!!")
    next()
}

export default {
    validateProduct
}