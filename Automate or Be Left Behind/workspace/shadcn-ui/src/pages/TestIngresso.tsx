import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface QuizAnswer {
  question: string;
  answer: string;
  score: number;
}

export default function TestIngresso() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1 = personal data, 2-9 = questions, 10 = open question
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    prefisso: '+39',
    whatsappConfirm: false
  });
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<'IDONEO' | 'BORDERLINE' | 'NON_IDONEO' | null>(null);
  const [intentConfirmations, setIntentConfirmations] = useState({
    ambitious: false,
    committed: false,
    ready: false
  });

  // Scroll to top only when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = [
    { code: '+39', flag: '🇮🇹', name: 'Italia' },
    { code: '+1', flag: '🇺🇸', name: 'USA' },
    { code: '+44', flag: '🇬🇧', name: 'UK' },
    { code: '+33', flag: '🇫🇷', name: 'Francia' },
    { code: '+49', flag: '🇩🇪', name: 'Germania' },
    { code: '+34', flag: '🇪🇸', name: 'Spagna' },
    { code: '+41', flag: '🇨🇭', name: 'Svizzera' },
    { code: '+43', flag: '🇦🇹', name: 'Austria' }
  ];

  const questions = [
    {
      id: 'motivazione',
      question: 'Perché vuoi entrare in questo percorso?',
      options: [
        { text: 'Voglio un modo facile per guadagnare soldi senza impegno', score: 0 },
        { text: 'Voglio costruire una carriera digitale e indipendente', score: 3 },
        { text: 'Voglio crescere in un settore in forte espansione e avere più libertà', score: 3 }
      ]
    },
    {
      id: 'tempistiche',
      question: 'Quanto sei pronto a iniziare?',
      options: [
        { text: 'Non so ancora, forse più avanti', score: 0 },
        { text: 'Tra 30–60 giorni', score: 1 },
        { text: 'Subito, sono pronto a mettermi in gioco', score: 3 }
      ]
    },
    {
      id: 'tempo_disponibile',
      question: 'Quanto tempo sei disposto a dedicare ogni settimana?',
      options: [
        { text: 'Meno di 2 ore', score: 0 },
        { text: '3–5 ore', score: 1 },
        { text: '6+ ore', score: 3 }
      ]
    },
    {
      id: 'attitudine',
      question: 'Come ti descriveresti?',
      options: [
        { text: 'Preferisco sicurezza e routine', score: 0 },
        { text: 'Sono motivato e curioso, mi piace imparare', score: 1 },
        { text: 'Sono ambizioso, amo le sfide e cerco libertà', score: 3 }
      ]
    },
    {
      id: 'visione',
      question: 'Qual è la tua priorità principale?',
      options: [
        { text: 'Avere sicurezza senza rischi', score: 0 },
        { text: 'Libertà finanziaria e geografica', score: 3 },
        { text: 'Imparare competenze digitali richieste', score: 3 }
      ]
    },
    {
      id: 'resilienza',
      question: 'Se incontri una difficoltà nel percorso… cosa fai?',
      options: [
        { text: 'Mi scoraggio e penso di mollare', score: 0 },
        { text: 'Cerco aiuto ma potrei fermarmi se è troppo difficile', score: 1 },
        { text: 'Affronto il problema, cerco soluzioni e vado avanti', score: 3 }
      ]
    },
    {
      id: 'formazione_passata',
      question: 'Hai già investito in formazione in passato? Se sì, in che ambito?',
      options: [
        { text: 'No, mai', score: 1 },
        { text: 'Sì, corsi motivazionali o crescita personale', score: 1 },
        { text: 'Sì, corsi di business / marketing / digitale', score: 3 }
      ]
    },
    {
      id: 'predisposizione_investimento',
      question: 'Quanto sei disposto a investire su di te per costruire la tua carriera digitale?',
      options: [
        { text: 'Nulla, vorrei solo qualcosa di gratis', score: 0 },
        { text: 'Posso iniziare con un piccolo impegno ma voglio crescere', score: 1 },
        { text: 'Sono pronto a investire tempo, energia e denaro nel mio futuro', score: 3 }
      ]
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  const [formazioneDettagli, setFormazioneDettagli] = useState('');
  const [sfida12Mesi, setSfida12Mesi] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');

  const totalSteps = questions.length + 3; // intro + personal data + questions + open question
  const progress = currentStep === 0 ? 0 : ((currentStep) / (totalSteps - 1)) * 100;

  const handleAnswerChange = (answerIndex: number) => {
    setCurrentAnswer(answerIndex.toString());
  };

  const handleNext = () => {
    if (currentStep === 0) {
      // Intro step - check intent confirmations
      if (intentConfirmations.ambitious && intentConfirmations.committed && intentConfirmations.ready) {
        setCurrentStep(1);
      }
    } else if (currentStep === 1) {
      // Personal data step
      if (formData.nome && formData.email && formData.telefono && formData.whatsappConfirm) {
        setCurrentStep(2);
      }
    } else if (currentStep >= 2 && currentStep <= questions.length + 1) {
      // Question steps
      if (currentAnswer !== '') {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentStep - 2] = currentAnswer;
        setSelectedAnswers(newAnswers);
        setCurrentAnswer('');
        
        if (currentStep < questions.length + 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setCurrentStep(currentStep + 1); // Go to open question
        }
      }
    } else if (currentStep === questions.length + 2) {
      // Open question step
      if (sfida12Mesi.trim() !== '') {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      if (currentStep >= 2 && currentStep <= questions.length + 1) {
        setCurrentAnswer(selectedAnswers[currentStep - 2] || '');
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let zeroScores = 0;

    selectedAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== '') {
        const score = questions[questionIndex].options[parseInt(answerIndex)].score;
        totalScore += score;
        if (score === 0) zeroScores++;
      }
    });

    if (totalScore >= 16 && zeroScores <= 1) {
      return 'IDONEO';
    } else if (totalScore >= 12 && totalScore <= 15) {
      return 'BORDERLINE';
    } else {
      return 'NON_IDONEO';
    }
  };

  const handleSubmit = () => {
    const finalResult = calculateScore();
    setResult(finalResult);
    setShowResult(true);

    console.log('Form Data:', formData);
    console.log('Quiz Answers:', selectedAnswers);
    console.log('Formazione Dettagli:', formazioneDettagli);
    console.log('Sfida 12 Mesi:', sfida12Mesi);
    console.log('Intent Confirmations:', intentConfirmations);
    console.log('Result:', finalResult);
  };

  const canProceed = () => {
    if (currentStep === 0) {
      return intentConfirmations.ambitious && intentConfirmations.committed && intentConfirmations.ready;
    } else if (currentStep === 1) {
      return formData.nome && formData.email && formData.telefono && formData.whatsappConfirm;
    } else if (currentStep >= 2 && currentStep <= questions.length + 1) {
      return currentAnswer !== '';
    } else if (currentStep === questions.length + 2) {
      return sfida12Mesi.trim() !== '';
    }
    return false;
  };

  const renderResult = () => {
    switch (result) {
      case 'IDONEO':
        return (
          <div className="text-center space-y-6 p-8 bg-green-50 rounded-2xl border-4 border-green-500">
            <h3 className="text-3xl font-black text-green-600">🎯 COMPLIMENTI, SEI IDONEO ALLA FASE 2!</h3>
            <p className="text-xl font-bold text-gray-800">
              Ora fissa il tuo slot per la fase finale con uno dei nostri Selezionatori per comprendere se puoi iniziare anche tu il nostro percorso trasformativo.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-black text-xl px-12 py-6">
              📅 PRENOTA IL TUO SLOT CON UN SELEZIONATORE
            </Button>
            <p className="text-sm text-gray-600">⚠️ I posti sono limitati</p>
          </div>
        );
      case 'BORDERLINE':
        return (
          <div className="text-center space-y-6 p-8 bg-yellow-50 rounded-2xl border-4 border-yellow-500">
            <h3 className="text-3xl font-black text-yellow-600">⚠️ IL TUO PROFILO È IN VALUTAZIONE</h3>
            <p className="text-xl font-bold text-gray-800">
              Grazie per aver completato il Test di Ingresso. Il tuo profilo sarà valutato manualmente da un nostro Selezionatore prima di accedere alla Fase 2.
            </p>
            <p className="text-lg text-gray-600">Ti ricontatteremo presto con l'esito della valutazione.</p>
          </div>
        );
      case 'NON_IDONEO':
        return (
          <div className="text-center space-y-6 p-8 bg-red-50 rounded-2xl border-4 border-red-500">
            <h3 className="text-3xl font-black text-red-600">❌ NON SEI IDONEO AL PERCORSO</h3>
            <p className="text-xl font-bold text-gray-800">
              Al momento non sei idoneo al nostro percorso. Ti ringraziamo per l'interesse: questo programma è riservato a persone con caratteristiche specifiche.
            </p>
            <p className="text-lg text-gray-600">Ti auguriamo il meglio per il tuo futuro.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {renderResult()}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="font-bold"
            >
              🏠 Torna alla Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header - Only show on intro page */}
        {currentStep === 0 && (
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black text-center">
              📝 TEST DI INGRESSO<br />
              <span className="text-red-600">PRIMA FASE</span>
            </h1>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-200 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Questo non è un modulo qualsiasi.
              </h2>
              <p className="text-xl font-semibold text-gray-700 mb-6">
                👉 È il primo passo per capire se hai le caratteristiche giuste per accedere al nostro percorso trasformativo.
              </p>
              <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 mb-8">
                <p className="text-lg font-bold text-red-700 mb-4">
                  Se cerchi scuse, comfort zone o "provo tanto per provare" → fermati qui.
                </p>
                <p className="text-lg font-bold text-green-700">
                  Se invece sei ambizioso, dinamico e pronto a superare ogni difficoltà, rispondi con sincerità.
                </p>
              </div>

              {/* Intent Confirmations */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                  Prima di iniziare, conferma le tue intenzioni:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="ambitious"
                      checked={intentConfirmations.ambitious}
                      onCheckedChange={(checked) => 
                        setIntentConfirmations({...intentConfirmations, ambitious: checked as boolean})
                      }
                    />
                    <Label htmlFor="ambitious" className="text-lg font-medium cursor-pointer">
                      🎯 Sono ambizioso e voglio costruire una carriera digitale di successo
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="committed"
                      checked={intentConfirmations.committed}
                      onCheckedChange={(checked) => 
                        setIntentConfirmations({...intentConfirmations, committed: checked as boolean})
                      }
                    />
                    <Label htmlFor="committed" className="text-lg font-medium cursor-pointer">
                      💪 Sono disposto a impegnarmi seriamente e superare le difficoltà
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="ready"
                      checked={intentConfirmations.ready}
                      onCheckedChange={(checked) => 
                        setIntentConfirmations({...intentConfirmations, ready: checked as boolean})
                      }
                    />
                    <Label htmlFor="ready" className="text-lg font-medium cursor-pointer">
                      🚀 Sono pronto a investire tempo ed energie nel mio futuro
                    </Label>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`text-xl font-black px-12 py-6 ${
                      canProceed() 
                        ? 'bg-red-600 hover:bg-red-700 text-white pulse-red' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    🎯 INIZIA IL TEST
                  </Button>
                  {!canProceed() && (
                    <p className="text-red-600 font-bold mt-4">
                      ⚠️ Conferma tutte le intenzioni per procedere
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Bar - Only show after intro */}
        {currentStep > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-700">
                Progresso: {currentStep} di {totalSteps - 1}
              </span>
              <span className="text-lg font-bold text-red-600">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        )}

        {/* Form Card - Only show after intro */}
        {currentStep > 0 && (
          <Card className="shadow-2xl border-4 border-red-200">
            <CardHeader className="bg-red-600 text-white">
              <CardTitle className="text-2xl font-black text-center">
                {currentStep === 1 && "📋 I TUOI DATI"}
                {currentStep >= 2 && currentStep <= questions.length + 1 && `❓ DOMANDA ${currentStep - 1}`}
                {currentStep === questions.length + 2 && "✍️ DOMANDA FINALE"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              
              {/* Personal Data Step */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">I tuoi dati di contatto</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nome" className="text-lg font-bold">Nome *</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        className="mt-2 text-lg p-4"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-lg font-bold">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-2 text-lg p-4"
                        placeholder="la.tua@email.com"
                      />
                    </div>
                    <div>
                      <Label className="text-lg font-bold">Numero WhatsApp *</Label>
                      <div className="flex mt-2 space-x-2">
                        <Select value={formData.prefisso} onValueChange={(value) => setFormData({...formData, prefisso: value})}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                {country.flag} {country.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          value={formData.telefono}
                          onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                          className="flex-1 text-lg p-4"
                          placeholder="123 456 7890"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                      <Checkbox
                        id="whatsapp"
                        checked={formData.whatsappConfirm}
                        onCheckedChange={(checked) => setFormData({...formData, whatsappConfirm: checked as boolean})}
                      />
                      <Label htmlFor="whatsapp" className="text-lg font-medium cursor-pointer">
                        📱 Confermo che questo numero è attivo su WhatsApp
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Question Steps */}
              {currentStep >= 2 && currentStep <= questions.length + 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    {questions[currentStep - 2].question}
                  </h3>
                  <RadioGroup
                    value={currentAnswer}
                    onValueChange={(value) => handleAnswerChange(parseInt(value))}
                  >
                    {questions[currentStep - 2].options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 border-2 border-transparent hover:border-red-200">
                        <RadioGroupItem value={optionIndex.toString()} id={`option_${optionIndex}`} />
                        <Label 
                          htmlFor={`option_${optionIndex}`} 
                          className="text-lg font-medium cursor-pointer flex-1"
                        >
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {/* Optional field for training details */}
                  {currentStep === 8 && currentAnswer === '2' && (
                    <div className="space-y-4 mt-6 p-4 bg-gray-50 rounded-lg">
                      <Label htmlFor="formazione-dettagli" className="text-lg font-bold">
                        Scrivi quali corsi hai fatto (opzionale)
                      </Label>
                      <Textarea
                        id="formazione-dettagli"
                        value={formazioneDettagli}
                        onChange={(e) => setFormazioneDettagli(e.target.value)}
                        className="text-lg p-4"
                        placeholder="Descrivi i corsi di business/marketing/digitale che hai seguito..."
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Open Question Step */}
              {currentStep === questions.length + 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    Qual è la più grande sfida che hai superato negli ultimi 12 mesi?
                  </h3>
                  <Textarea
                    value={sfida12Mesi}
                    onChange={(e) => setSfida12Mesi(e.target.value)}
                    className="text-lg p-4"
                    placeholder="Racconta la sfida più significativa che hai affrontato e superato nell'ultimo anno..."
                    rows={6}
                  />
                  <p className="text-sm text-gray-600 text-center">
                    * Questa domanda ci aiuta a capire la tua capacità di resilienza e problem solving
                  </p>
                </div>
              )}

              {/* Navigation Buttons - Only show after intro */}
              {currentStep > 0 && (
                <div className="flex justify-between items-center pt-8">
                  <Button
                    onClick={handlePrevious}
                    disabled={currentStep <= 1}
                    variant="outline"
                    className="font-bold px-8 py-3"
                  >
                    ← Indietro
                  </Button>

                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`font-black px-8 py-3 text-lg ${
                      canProceed() 
                        ? 'bg-red-600 hover:bg-red-700 text-white pulse-red' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {currentStep === questions.length + 2 ? '🚀 INVIA TEST' : 'Avanti →'}
                  </Button>
                </div>
              )}

              {currentStep > 0 && !canProceed() && (
                <p className="text-red-600 font-bold text-center">
                  ⚠️ {currentStep === 1 ? 'Completa tutti i campi e conferma WhatsApp per continuare' : 
                       currentStep === questions.length + 2 ? 'Rispondi alla domanda per inviare il test' :
                       'Seleziona una risposta per continuare'}
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}