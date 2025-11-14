import jwt from 'jsonwebtoken';

//Solo con fines educativos!
//esto va al .env!!!
const SECRET = "clave_ultra_secreta"

const generateToken = async (data) => {

    //Para hashear las credenciales
    //https://www.npmjs.com/package/bcrypt
    const payload = {
        user: data.u,
        password: data.p
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2m' });
    return token;
}

const validateToken = async (req, res, next) => {

    const tkn = req.headers.authorization;

    //sacamos el "Bearer" del token
    const splitBearer = tkn.split(" ")[1]

    const validation = await jwt.verify(splitBearer, SECRET);
    next();
}

export default {
    generateToken,
    validateToken
};