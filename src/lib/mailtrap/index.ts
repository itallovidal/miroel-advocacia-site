// import Nodemailer from 'nodemailer'
// import {env} from "../../../env.ts";
// import {IFormSchema} from "../../pages/home/form/form.tsx";
//
// export class MailtrapSender {
//   private SENDER_EMAIL = '[INSERIR O EMAIL DE ENVIO AQUI]'
//   private RECIPIENT_EMAIL = 'miroelpaulinoadvocacia@gmail.com'
//   private transport = Nodemailer.createTransport({
//     host: 'live.smtp.mailtrap.io',
//     port: 587,
//     auth: {
//       user: env.MAILTRAP_AUTH_USER,
//       pass: env.MAILTRAP_AUTH_PASS,
//     },
//   })
//
//   async sendEmail(person: IFormSchema) {
//     const mailData = {
//       from: {
//         address: this.SENDER_EMAIL,
//         name: 'Formulário do Site',
//       },
//       to: this.RECIPIENT_EMAIL,
//       subject: 'Possível novo caso!',
//       text: `Veja as informações do cliente ${person.name}.`,
//       html: `
// <!doctype html>
// <html lang="pt-BR">
//   <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//   </head>
//   <body style="font-family: sans-serif;">
//     <div style="display: block" class="email-container">
//       <h1>Possível novo caso!</h1>
//       <p>Olá, Miroel,</p>
//       <p>Gostaría de informar que temos uma nova.</p>
//
//       <h2>Informações Enviadas:</h2>
//       <ul>
//           <li>Nome: ${person.name}</li>
//           <li>Email: ${person.email}</li>
//           <li>Telefone: ${person.phone}</li>
//       </ul>
//       <h2>Sobre o caso:</h2>
//       <p>${person.text}</p>
//
//       <span>-- <br> <br></span>
//
//       <span>Essas informações vieram diretamente do formulário do site.</span>
//     </div>
//     <style>
//       span{
//         font-style: italic;
//       }
//       p{
//         line-height: 26px;
//       }
//       h1, h2{
//         color: #B1976B;
//         font-size: 24px;
//         font-weight: bold;
//         margin-top: 20px;
//       }
//
//       h2{
//         font-size: 18px;
//       }
//       .email-container{
//         margin: auto;
//         max-width: 600px;
//         padding: 16px;
//         border-radius: 8px;
//         background-color: #f9f9f9;
//       }
//       ul li{ margin-block: 12px }
//       a:hover { border-left-width: 1em; min-height: 2em; }
//     </style>
//   </body>
// </html>
//         `,
//     }
//
//     try {
//       await this.transport.sendMail(mailData)
//       console.log('email enviado!')
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }
