import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight">
            <span className="text-red-500">CHI NON IMPARA</span><br />
            <span className="text-white">AUTOMAZIONE AI</span><br />
            <span className="text-red-500">OGGI....</span><br />
            <span className="text-white">È UN FUTURO</span><br />
            <span className="text-red-500 bg-white px-4 py-2 rounded-lg">DISOCCUPATO</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl font-bold text-red-400">
              99% dei freelancer non sa nemmeno cosa lo aspetta nei prossimi 2 anni.
            </p>
            
            <div className="bg-red-600 p-8 rounded-2xl border-4 border-white shadow-2xl">
              <p className="text-2xl md:text-3xl font-black mb-4">
                🔥 ULTIMA OPPORTUNITA
              </p>
              <p className="text-lg md:text-xl font-bold">
                Per entrare nel mondo dell'automazione e AI prima che sia troppo tardi
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/test-ingresso">
              <button className="bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl px-8 py-4 rounded-xl border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                FAI IL TEST DI INGRESSO ORA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 - Il Lavoro Cambia */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-black">
              IL LAVORO CAMBIA<br />
              LE AZIENDE CERCANO<br />
              AUTOMAZIONE E AI
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-red-600">PRIMA (2023)</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Lavori manuali e ripetitivi</li>
                    <li>• Competizione su prezzo</li>
                    <li>• Sostituibili facilmente</li>
                    <li>• Guadagni limitati</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-green-600">ADESSO (2024)</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Automazione e AI</li>
                    <li>• Competizione su valore</li>
                    <li>• Insostituibili</li>
                    <li>• Guadagni illimitati</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/test-ingresso">
              <button className="bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl px-8 py-4 rounded-xl border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                FAI IL TEST DI INGRESSO ORA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 - Il Futuro è Automazione */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black">
            IL FUTURO E'<br />
            AUTOMAZIONE E AI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border-2 border-red-600">
              <h3 className="text-2xl font-black text-red-400 mb-4">🎯 MARKETING</h3>
              <p className="text-lg">Automazione completa di campagne, lead generation, e customer journey con AI.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border-2 border-red-600">
              <h3 className="text-2xl font-black text-red-400 mb-4">🚀 VENDITE</h3>
              <p className="text-lg">Chatbot intelligenti, CRM automatizzati, e closing assistito da AI.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border-2 border-red-600">
              <h3 className="text-2xl font-black text-red-400 mb-4">💻 BUSINESS</h3>
              <p className="text-lg">Processi aziendali completamente automatizzati e ottimizzati con intelligenza artificiale.</p>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/test-ingresso">
              <button className="bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl px-8 py-4 rounded-xl border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                FAI IL TEST DI INGRESSO ORA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 - Il Momento Giusto */}
      <section className="py-20 px-6 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black">
            IL MOMENTO GIUSTO<br />
            E' ADESSO
          </h2>
          
          <div className="bg-white text-black p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-blue-900">
              PERCHE' SE ASPETTI...<br />
              PERDI TUTTO
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-black text-red-600">CHI ASPETTA:</h4>
                <ul className="space-y-2">
                  <li>• Rimane indietro nella tecnologia</li>
                  <li>• Perde opportunità di mercato</li>
                  <li>• Diventa obsoleto</li>
                  <li>• Compete solo sul prezzo</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-black text-green-600">CHI AGISCE ORA:</h4>
                <ul className="space-y-2">
                  <li>• Diventa leader nel settore</li>
                  <li>• Cattura il mercato per primo</li>
                  <li>• Costruisce vantaggio competitivo</li>
                  <li>• Guadagna 10x di più</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/test-ingresso">
              <button className="bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl px-8 py-4 rounded-xl border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                FAI IL TEST DI INGRESSO ORA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 - Per Chi è Questo Percorso */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-black">
            🌍 PER CHI È QUESTO PERCORSO
          </h2>
          
          <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-gray-200 max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-gray-800 mb-8">
              Questo percorso è solo per chi vuole costruirsi una carriera digitale vera con automazione e AI.
            </p>
            
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 mb-8">
              <p className="text-xl font-bold text-red-700">
                Se cerchi scuse, comfort zone o "vediamo se funziona" → NON ENTRARE.
              </p>
            </div>
            
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-2xl">✅</span>
                <span className="text-lg font-semibold">Mentalità problem solving con AI.</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-2xl">✅</span>
                <span className="text-lg font-semibold">Leadership e ambizione digitale.</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-2xl">✅</span>
                <span className="text-lg font-semibold">Passione per automazione e intelligenza artificiale.</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-2xl">✅</span>
                <span className="text-lg font-semibold">🌍 Voglia di viaggiare e libertà geografica.</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-2xl">✅</span>
                <span className="text-lg font-semibold">💰 Fame di libertà finanziaria attraverso l'AI.</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-black text-white rounded-xl">
              <p className="text-2xl font-black">
                SE TI RICONOSCI<br />
                HAI LA GIUSTA MENTALITA'<br />
                PER ACCEDERE AL<br />
                TEST DI INGRESSO
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/test-ingresso">
              <button className="bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl px-8 py-4 rounded-xl border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                FAI IL TEST DI INGRESSO ORA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 - Urgenza Finale */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-red-400">
              NON SEI IN RITARDO<br />
              SEI GIA' INDIETRO
            </h2>
            
            <div className="bg-red-600 p-10 rounded-2xl border-4 border-white shadow-2xl max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-black mb-6">
                QUESTO E' IL TUO MOMENTO<br />
                O ENTRI ORA NELL'ERA DELL'AI<br />
                O RESTI FUORI
              </p>
              
              <div className="bg-white text-black p-6 rounded-xl">
                <p className="text-2xl font-black">
                  🔑 ULTIMA OPPORTUNITA
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <TestimonialCard 
              name="Marco R."
              text="In 6 mesi ho automatizzato completamente il mio business. Ora guadagno 3x lavorando la metà del tempo."
              role="Automation Specialist"
            />
            <TestimonialCard 
              name="Laura S."
              text="L'AI ha rivoluzionato il mio approccio al marketing. I miei clienti ora mi pagano 10x di più per le stesse ore."
              role="AI Marketing Expert"
            />
          </div>

          <div className="pt-8">
            <Link to="/test-ingresso">
              <button className="bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl px-8 py-4 rounded-xl border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                FAI IL TEST DI INGRESSO ORA
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}