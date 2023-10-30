import { verifyToken } from "../utils/token.js";


const middleware = function (req : any, res : any, next : any) {

  if(verifyToken(req.headers.authorization)) {
    next()
  }
}


export { middleware }