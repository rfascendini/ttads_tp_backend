import { Request, Response } from 'express'
import { verifyToken } from '../utils/token.js'

function authToken(req: Request, res: Response): any {

  const { token } = req.body;

  if (!token) {
    res.status(500).json({ status: 'error', message: 'No se enviaron parametros.' });
  }

  const tokenVerified = verifyToken(token)

  if (tokenVerified) {
    res.status(200).json({ status: 'success', message: 'Token válido'});
  } else {
    res.status(200).json({ status: 'error', message: 'Token inexistente o expirado.' });
  }
}

export { authToken }