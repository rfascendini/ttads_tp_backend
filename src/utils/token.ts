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

function generateRandomToken(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}

export { createToken, verifyToken, generateRandomToken}


