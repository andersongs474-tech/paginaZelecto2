// app/emails/ContactFormEmail.tsx
import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Text,
  Section,
  Hr,
} from '@react-email/components';

interface ContactFormEmailProps {
  answers: { [key: string]: string };
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ answers }) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f6f6f6', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #dddddd' }}>
          <Heading style={{ fontSize: '24px', color: '#333333' }}>
            Nuevo Lead desde el Formulario de Contacto
          </Heading>
          <Text style={{ fontSize: '16px', color: '#555555' }}>
            Has recibido una nueva respuesta del formulario conversacional.
          </Text>
          <Hr style={{ borderColor: '#cccccc' }} />
          <Section>
            {Object.entries(answers).map(([key, value]) => (
              <div key={key}>
                <Text style={{ fontSize: '16px', margin: '10px 0' }}>
                  <strong style={{ textTransform: 'capitalize' }}>{key}:</strong> {value}
                </Text>
              </div>
            ))}
          </Section>
          <Hr style={{ borderColor: '#cccccc' }} />
          <Text style={{ fontSize: '12px', color: '#999999' }}>
            Este correo fue enviado automáticamente desde tu sitio web.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;