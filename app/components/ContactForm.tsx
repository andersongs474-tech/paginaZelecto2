// app/components/ContactForm.tsx
export default function ContactForm() {
    return (
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Envíanos tus datos</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" />
                <input type="text" placeholder="Empresa" className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
              <input type="text" placeholder="Sitio Web" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" />
              <select className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400">
                <option>Facturación mensual en ads</option>
                <option>No estoy invirtiendo aún</option>
                <option>Menos de $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>Más de $5,000</option>
              </select>
              <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-bold p-4 rounded-lg transition-colors">
                Enviar y solicitar diagnóstico
              </button>
            </form>
          </div>
          <div className="bg-black p-8 rounded-lg">
             <h2 className="text-3xl font-bold mb-4">O agenda directamente</h2>
             <p className="text-gray-400 mb-6">Elige un hueco en nuestro calendario y tengamos una llamada de 30 minutos para analizar tu caso. Sin compromiso.</p>
             <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                 <p className="text-gray-400">Aquí irá el widget de Calendly</p>
             </div>
          </div>
        </div>
      </section>
    );
}