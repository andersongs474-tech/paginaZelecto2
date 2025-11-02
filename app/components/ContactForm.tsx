// app/components/ContactForm.tsx
'use client';

import React, { useState, KeyboardEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronUp, FiChevronDown, FiLoader } from 'react-icons/fi';
import { InlineWidget } from 'react-calendly';

// Importa la Server Action (asegúrate de que la ruta sea correcta)
import { sendContactForm } from '../actions';

// Define la estructura de cada pregunta
interface Question {
  id: number;
  label: string;
  name: string;
  type: 'text' | 'email' | 'select';
  options?: string[];
}

// Lista de preguntas del formulario
const questions: Question[] = [
  { id: 1, label: '¿Cuál es tu nombre?', name: 'nombre', type: 'text' },
  { id: 2, label: '¿Para qué compañía trabajas?', name: 'compañía', type: 'text' },
  { id: 3, label: '¿Cuál es tu correo para el trabajo?', name: 'email', type: 'email' },
  {
    id: 4,
    label: '¿Cuál es tu facturación mensual en ads?',
    name: 'facturación_ads',
    type: 'select',
    options: ['No he invertido todavía', 'Menos de $1,000 USD', '$1,000 - $5,000 USD', 'Más de $5,000 USD'],
  },
];

// Variante de animación para Framer Motion
const variants = {
  enter: { x: 100, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const currentQuestion = questions[currentStep];

  // Hook para enviar el correo cuando el formulario se completa
  useEffect(() => {
    if (submissionStatus === 'submitting') {
      const submitData = async () => {
        const result = await sendContactForm(answers);
        if (result.success) {
          setSubmissionStatus('success');
        } else {
          setSubmissionStatus('error');
        }
      };
      submitData();
    }
  }, [submissionStatus, answers]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.name]: value }));
    setTimeout(goToNext, 300);
  };

  const goToNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmissionStatus('submitting');
    }
  };

  const goToPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answers[currentQuestion.name]?.trim()) {
      goToNext();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && answers[currentQuestion.name]?.trim()) {
      e.preventDefault();
      goToNext();
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex relative">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-verde rounded-full -translate-x-8 sm:-translate-x-16"></div>
        <div className="w-1/2 flex items-center pr-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">Trabajemos juntos</h2>
        </div>
        
        <div className={`w-1/2 flex flex-col justify-between relative transition-all duration-500 ${submissionStatus === 'success' ? 'h-[700px]' : 'h-[450px]'}`}>
          
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-700">
            <motion.div
              className="h-full bg-verde"
              animate={{ width: submissionStatus !== 'idle' ? '100%' : `${((currentStep + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex-grow flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              {submissionStatus === 'idle' && (
                <motion.div key={currentStep} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, type: 'tween' }} className="w-full">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <label className="flex items-center gap-4 text-2xl text-gray-300">
                      <span>{currentQuestion.id}</span>
                      <FiArrowRight />
                      <span>{currentQuestion.label}</span>
                    </label>
                    {currentQuestion.type === 'select' ? (
                      <div className="flex flex-col items-start space-y-3 pt-4">
                        {currentQuestion.options?.map((option, index) => (
                          <button key={index} type="button" onClick={() => handleSelectChange(option)} className={`px-4 py-2 border border-gray-600 rounded-md transition-colors ${answers[currentQuestion.name] === option ? 'bg-verde text-black' : 'hover:bg-gray-800'}`}>
                            {option}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="relative">
                        <input type={currentQuestion.type} name={currentQuestion.name} value={answers[currentQuestion.name] || ''} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Escribe tu respuesta aquí..." className="w-full bg-transparent border-b border-gray-600 text-3xl placeholder-gray-500 py-4 focus:outline-none focus:border-verde transition-colors" autoFocus autoComplete="off" />
                        <div className="flex items-center gap-4 mt-6">
                          <button type="submit" className="px-4 py-1.5 bg-verde text-black font-bold rounded-md hover:bg-black hover:text-white transition-colors cursor-pointer">OK</button>
                          <span className="text-sm text-gray-500">presiona <strong>Enter ↵</strong></span>
                        </div>
                      </div>
                    )}
                  </form>
                </motion.div>
              )}
              {submissionStatus === 'submitting' && (
                 <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex flex-col items-center gap-4 text-center">
                   <FiLoader className="animate-spin text-verde text-5xl" />
                   <p className="text-gray-400">Enviando tus datos...</p>
                 </motion.div>
              )}
              {submissionStatus === 'success' && (
                <motion.div key="success" variants={variants} initial="enter" animate="center" className="text-center w-full h-full flex flex-col">
                  <h3 className="text-3xl font-bold">¡Último paso!</h3>
                  <p className="text-gray-400 mt-2">Escoge una hora y un día para nuestra llamada.</p>
                  
                  <div className="mt-4 flex-grow">
                    <InlineWidget
                      url="https://calendly.com/zelectomarketing/30min"
                      styles={{ height: '100%', borderRadius: '8px' }}
                    />
                  </div>
                </motion.div>
              )}
              {submissionStatus === 'error' && (
                 <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full text-center">
                   <h3 className="text-3xl font-bold text-red-500">¡Ups! Algo salió mal</h3>
                   <p className="text-gray-400 mt-2">No pudimos enviar tu información. Por favor, inténtalo de nuevo más tarde.</p>
                 </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Ocultamos los botones de navegación cuando ya no son necesarios */}
          {submissionStatus === 'idle' && (
            <div className="flex justify-end items-center gap-2">
              <button onClick={goToPrev} disabled={currentStep === 0} className="p-2 border border-verde text-verde rounded-md disabled:border-gray-700 disabled:text-gray-700 hover:bg-verde cursor-pointer hover:text-black transition-colors">
                <FiChevronUp />
              </button>
              <button onClick={goToNext} disabled={!answers[currentQuestion?.name]} className="p-2 border border-verde text-verde rounded-md disabled:border-gray-700 disabled:text-gray-700 hover:bg-verde cursor-pointer hover:text-black transition-colors">
                <FiChevronDown />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}