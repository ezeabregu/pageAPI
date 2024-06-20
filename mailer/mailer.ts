import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ezzedeveloper@gmail.com",
    pass: "szjtpzieollbmzxr",
  },
  from: "ezzedeveloper@gmail.com",
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (to: string, code: string): Promise<void> => {
  const mailOptions = {
    from: '"Page" ezzedeveloper@gmail.com',
    to,
    subject: "Código de verificación para Page",
    text: `
            Llegó tu codigo para Page.
            El código es ${code}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado");
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};
