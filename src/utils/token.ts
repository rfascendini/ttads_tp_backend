import jwt from 'jsonwebtoken';

// Your secret key to sign and verify the token (keep this secret!)
const secretKey = 'utnfrrotokenapi';

function createToken(username: string) {

  // Payload for your token (you can customize this)
  const payload = {
    username: username,
  };

  // Create the JWT
  const token = jwt.sign(payload.toString(), secretKey, { algorithm: 'HS256' })

  return token.toString();

}

function verifyToken(token: string) {

    const decodedToken = jwt.verify(token, secretKey);
    
    return decodedToken;

}

export { createToken, verifyToken }