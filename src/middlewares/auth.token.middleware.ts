import { verifyToken } from "../utils/token.js";


const middleware = function (req : any, res : any, next : any) {

  if(verifyToken(req.headers.authorization)) {
    next()
  } else {
    res.status(419).json({ status: 'error', message: 'Token inexistente o expirado.' });
  }
}


export { middleware }