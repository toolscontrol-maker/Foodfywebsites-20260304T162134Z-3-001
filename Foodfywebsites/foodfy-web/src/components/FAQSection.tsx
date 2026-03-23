import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import './FAQSection.css';

const FAQS = [
    {
        question: "¿Qué es Foodfy exactamente?",
        answer: "Foodfy es el primer ecosistema operativo para restaurantes impulsado por Inteligencia Artificial. No somos solo una web o un TPV; somos el cerebro que gestiona tus pedidos, tu visibilidad online y tu atención al cliente de forma automática para que tú solo te preocupes de cocinar."
    },
    {
        question: "¿Cómo funcionan los Agentes IA por teléfono?",
        answer: "Nuestros agentes utilizan tecnología de voz avanzada para atender llamadas en tiempo real. Pueden entender acentos, responder dudas sobre la carta y tramitar pedidos directamente a tu sistema. Nunca comunican, nunca se cansan y atienden a 50 personas a la vez si es necesario."
    },
    {
        question: "¿Necesito conocimientos técnicos para usar el Web Maker?",
        answer: "Para nada. Es una herramienta 'drag & drop' diseñada para hosteleros, no para programadores. En menos de 10 minutos puedes tener tu web lista, con tu menú sincronizado y optimizada para aparecer en los primeros resultados de Google."
    },
    {
        question: "¿Realmente cobráis 0% de comisión por pedido?",
        answer: "Exacto. Creemos que tu margen debe ser para ti. Con Foodfy pagas una suscripción fija mensual y todos los pedidos que entren por tu web o tus agentes IA son 100% tuyos. Sin letras pequeñas ni comisiones ocultas."
    },
    {
        question: "¿Cuánto tarda en estar todo funcionando?",
        answer: "La configuración inicial de la web y el dashboard es instantánea. Para los Agentes IA, el proceso de 'entrenamiento' con tu carta suele tardar entre 24 y 48 horas. Después de eso, tu restaurante estará operando en el futuro."
    }
];

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq-section" id="faq">
            <div className="container">
                <div className="faq-header">
                    <div className="faq-badge">
                        <HelpCircle size={14} /> Preguntas frecuentes
                    </div>
                    <h2 style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-primary)' }}>
                        Resolvemos tus dudas
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, marginTop: '0.5rem' }}>
                        Todo lo que necesitas saber sobre Foodfy.
                    </p>
                </div>

                <div className="faq-container">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                <div className="faq-icon">
                                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

