// app/actions.ts
'use server'; // ¡Muy importante! Esto define que es un Server Action.

import { Resend } from 'resend';
import { ContactFormEmail } from './emails/ContactFormEmail'; // Importa tu plantilla

// Instancia el cliente de Resend usando la API key del .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(answers: { [key: string]: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Usa el dominio verificado o el de prueba
      to: ['zelectomarketing@gmail.com'], // El correo donde recibirás los leads
      subject: '¡Nuevo Lead! Alguien ha completado el formulario',
      react: ContactFormEmail({ answers }), // Usa tu componente de plantilla React
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent successfully:', data);
    return { success: true };
  } catch (exception) {
    console.error('Server Action Exception:', exception);
    return { success: false, error: 'Ocurrió un error inesperado.' };
  }
}