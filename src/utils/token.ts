import jwt from 'jsonwebtoken';

// Your secret key to sign and verify the token (keep this secret!)
const secretKey = 'utnfrrotokenapi';

function createToken(username: string) {

  // Payload for your token (you can customize this)
  const payload = {
    username: username,
  };

  // Create the JWT
  const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' })

  return token;

}

function verifyToken(token: any) {

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);

    // The token is valid, and decodedToken contains the payload
    return decodedToken;

  } catch (error) {
    // Token verification failed
    throw new Error("Token verification failed.")
  }


}

export { createToken, verifyToken }