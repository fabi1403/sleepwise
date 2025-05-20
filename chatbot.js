// Definición de preguntas sugeridas y respuestas predefinidas
const chatbotData = {
    suggestedQuestions: [
        '💫 ¿Cómo puedo mejorar mi calidad de sueño?',
        '😴 ¿Qué efectos tiene la falta de sueño?',
        '🌙 ¿Cuáles son los mejores hábitos antes de dormir?',
        '⏰ ¿Por qué es importante mantener un horario de sueño regular?'
    ],
    responses: {
        'mejora_calidad': {
            question: '¿Cómo puedo mejorar mi calidad de sueño?',
            answer: '✨💫 ¡Hola! Aquí tienes consejos para mejorar tu sueño: 🌟\n\n⏰ 1. Mantén un horario regular de sueño 💤\n🌙 2. Crea un ambiente oscuro y fresco en tu habitación 🌬️\n📱 3. Evita las pantallas antes de dormir 🚫\n🏃‍♂️ 4. Haz ejercicio durante el día 💪\n☕ 5. Evita la cafeína por la tarde ❌\n🧘‍♀️ 6. Practica técnicas de relajación antes de dormir 🎯'
        },
        'efectos_falta': {
            question: '¿Qué efectos tiene la falta de sueño?',
            answer: '⚠️ ¡Atención! La falta de sueño puede afectarte así: 🚨\n\n🧠 1. Disminución de la concentración y memoria 📚\n😤 2. Cambios de humor e irritabilidad 😫\n🤒 3. Debilitamiento del sistema inmune 🛡️\n⚡ 4. Mayor riesgo de problemas de salud 🏥\n😰 5. Aumento del estrés y ansiedad 💭\n📉 6. Menor rendimiento físico y mental 💪'
        },
        'habitos': {
            question: '¿Cuáles son los mejores hábitos antes de dormir?',
            answer: '🌟 ¡Descubre los mejores hábitos para un dulce sueño! 💫\n\n📚 1. Leer un libro tranquilamente 📖\n🚿 2. Tomar una ducha tibia relajante 💆‍♀️\n🧘‍♀️ 3. Practicar meditación o respiración profunda 🌸\n🥗 4. Evitar comidas pesadas 🚫\n📱 5. Apagar dispositivos electrónicos 🌙\n✨ 6. Mantener una rutina relajante 🎯'
        },
        'horario_regular': {
            question: '¿Por qué es importante mantener un horario de sueño regular?',
            answer: '⏰ ¡Descubre por qué un horario regular es tu mejor amigo! 🌟\n\n🌙 1. Ayuda a regular tu reloj biológico ⚡\n💫 2. Mejora la calidad del sueño 🎯\n😴 3. Facilita quedarse dormido y despertar 🌅\n💪 4. Optimiza las funciones corporales 🔄\n❤️ 5. Reduce el riesgo de problemas de salud 🏥\n✨ 6. Mejora el estado de ánimo y la energía durante el día 🌞'
        }
    }
};

// Función para inicializar el chatbot
function initializeChatbot() {
    const chatBox = document.getElementById('chat-box');
    const suggestedQuestionsContainer = document.createElement('div');
    suggestedQuestionsContainer.className = 'suggested-questions';

    // Agregar preguntas sugeridas
    chatbotData.suggestedQuestions.forEach(question => {
        const questionButton = document.createElement('button');
        questionButton.className = 'suggested-question-btn';
        questionButton.textContent = question;
        questionButton.addEventListener('click', () => handleUserQuestion(question));
        suggestedQuestionsContainer.appendChild(questionButton);
    });

    chatBox.appendChild(suggestedQuestionsContainer);
}

// Función para manejar las preguntas del usuario
function handleUserQuestion(question) {
    const chatBox = document.getElementById('chat-box');
    
    // Agregar mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = question;
    chatBox.appendChild(userMessage);

    // Encontrar la respuesta correspondiente
    let response = '';
    const cleanQuestion = question.replace(/[💫😴🌙⏰]/g, '').trim();
    for (const key in chatbotData.responses) {
        if (chatbotData.responses[key].question === cleanQuestion) {
            response = chatbotData.responses[key].answer;
            break;
        }
    }

    // Simular delay de respuesta
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = response || 'Lo siento, no tengo una respuesta para esa pregunta.';
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

// Inicializar el chatbot cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initializeChatbot);