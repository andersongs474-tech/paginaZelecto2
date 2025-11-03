// app/actions.tsx (¡Nota la extensión .tsx!)
'use server';

import { Resend } from 'resend';
import { ContactFormEmail } from './emails/ContactFormEmail'; // Importas el componente

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(answers: { [key: string]: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Cambia esto por tu dominio verificado
      to: ['zelectomarketing@gmail.com'],
      subject: '¡Nuevo Lead! Alguien ha completado el formulario',
      // Ahora, con la extensión .tsx, esto funcionará sin errores.
      react: <ContactFormEmail answers={answers} />,
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