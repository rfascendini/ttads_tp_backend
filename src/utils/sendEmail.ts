import nodemailer from 'nodemailer';

function sendEmail(email: string, token: string) {

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: 'login',
      user: 'renzo.jrr10@gmail.com',
      pass: 'axla ojew pglr xehw',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'alumnado@frro.utn.edu.ar',
    to: email,
    subject: 'Solicitud de Inscripción - UTN FRRo',
    html: '¡Hola! Enviamos este correo para continuar con su proceso de inscripción.<br>Conserve este mensaje hasta completar la inscripción. En caso de no completarla, podrá reutilizar el código de acceso (token) adjunto para acceder cuantas veces sea necesario.<br>Ante cualquier inquietud, no dude en comunicarse con nosotros a través de nuestro correo electrónico: alumnado@frro.utn.edu.ar<br><br>Clave de Acceso:<strong> '+token+'</strong><br>En caso de que usted elimine este correo o pierda su clave de acceso, debe comunicarse al email anteriormente mencionado.',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error: any, info: { response: string; }) => {
    if (error) {
      console.log(error);
      return 0
    } else {
      console.log('Email sent: ' + info.response);
      return 
    }
  });

}

export { sendEmail }