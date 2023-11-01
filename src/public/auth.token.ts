
import { verifyToken } from '../utils/token.js'

function authToken(req: any, res: any): any {

  const token = req.headers.authorization;
  
  if (!token) {
    res.status(500).json({ status: 'error', message: 'No se enviaron parametros.' });
  }

  const tokenVerified = verifyToken(token)

  if (tokenVerified) {
    res.status(200).json({ status: 'success', message: 'Token válido'});
  } else {
    res.status(419).json({ status: 'error', message: 'Token inexistente o expirado.' });
  }
}

export { authToken }