document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.getElementById('intro');
    const ageInputSection = document.getElementById('age-input');
    const ageInput = document.getElementById('age');
    const showRecommendationsButton = document.getElementById('show-recommendations');
    const recommendationsSection = document.getElementById('recommendations');
    const tabsSection = document.getElementById('tabs');
    const leftTab = document.getElementById('left-tab');
    const rightTab = document.getElementById('right-tab');
    const logo = document.querySelector('header img');
    const backArrow = document.getElementById('back-arrow');
    const iaInfoLink = document.getElementById('ia-info-link');
    const iaInfoSection = document.getElementById('ia-info-section');

    // Define recommendations for each age group
    const recommendations = {
        bebes: "👶🛏️ Los bebés necesitan entre 12 y 16 horas de sueño al día, incluyendo siestas. Es crucial establecer una rutina de sueño consistente y crear un ambiente oscuro y tranquilo para dormir.",
        ninos: "🧒🌙 Los niños en edad preescolar (3-5 años) necesitan 10-13 horas, y los de edad escolar (6-13 años) 9-11 horas. Fomentar hábitos saludables como una hora de acostarse regular y limitar el tiempo de pantalla antes de dormir es importante.",
        adolescentes: "🧑📱 Los adolescentes (14-17 años) necesitan 8-10 horas de sueño. Sus patrones de sueño cambian, tendiendo a acostarse más tarde y levantarse más tarde. Es vital que intenten mantener un horario regular incluso los fines de semana.",
        jovenes: "🎧🛌 Los adultos jóvenes (18-25 años) generalmente necesitan 7-9 horas de sueño por noche. Mantener un horario de sueño regular, evitar la cafeína y el alcohol antes de acostarse, y asegurarse de que el dormitorio sea propicio para el descanso son claves.",
        adultos_mayores: "👵🕰️ Los adultos mayores (65+ años) también necesitan alrededor de 7-8 horas, aunque pueden tener un sueño más fragmentado. Las siestas cortas pueden ser útiles. Es importante abordar cualquier problema de sueño con un médico."
        
    };

    // Define detailed sleep info for each age group
    const detailedSleepInfo = {
        bebes: `
            <h3>👶 Bebés (0-12 meses)</h3>
            <ul>
                <li>Horas recomendadas: 14 a 17 horas diarias, incluyendo siestas.</li>
                <li>Desarrollo cerebral: El sueño profundo es crucial para el desarrollo neuronal y la consolidación de la memoria.</li>
                <li>Patrones de sueño: Los recién nacidos duermen en intervalos cortos y no distinguen entre día y noche.</li>
                <li>Importancia de las rutinas: Establecer horarios consistentes ayuda a regular su reloj biológico.</li>
                <li>Ambiente de sueño: Un entorno oscuro y tranquilo favorece un descanso óptimo.</li>
                <li>Cambios a los 3 meses: Comienzan a dormir más horas durante la noche y menos durante el día.</li>
                <li>Vínculo con la salud: El sueño adecuado está asociado con un menor riesgo de problemas metabólicos y de desarrollo.</li>
                <li>Consejo: Evitar la sobreestimulación antes de dormir y mantener una rutina relajante.</li>
            </ul>
        `,
        ninos: `
            <h3>🧒 Niños (1-12 años)</h3>
            <ul>
                <li>Horas recomendadas: Entre 9 y 12 horas diarias, dependiendo de la edad.</li>
                <li>Desarrollo físico y cognitivo: El sueño favorece el crecimiento y la consolidación de aprendizajes.</li>
                <li>Patrones de sueño: A medida que crecen, los niños duermen más horas por la noche y menos durante el día.</li>
                <li>Importancia de las rutinas: Establecer horarios consistentes ayuda a regular su reloj biológico.</li>
                <li>Ambiente de sueño: Un entorno oscuro y tranquilo favorece un descanso óptimo.</li>
                <li>Vínculo con la salud: El sueño adecuado está asociado con un menor riesgo de problemas metabólicos y de desarrollo.</li>
                <li>Consejo: Evitar la sobreestimulación antes de dormir y mantener una rutina relajante.</li>
                <li>Impacto de la tecnología: El uso excesivo de pantallas antes de dormir puede interferir con la calidad del sueño.</li>
            </ul>
        `,
        adolescentes: `
            <h3>🧑 Adolescentes (13-18 años)</h3>
            <ul>
                <li>Horas recomendadas: 8 a 10 horas diarias.</li>
                <li>Cambios hormonales: La pubertad altera los ritmos circadianos, haciendo que se duerman y despierten más tarde.</li>
                <li>Impacto de la tecnología: El uso de dispositivos electrónicos antes de dormir puede retrasar la producción de melatonina, dificultando el sueño.</li>
                <li>Presión académica: Las exigencias escolares y sociales pueden reducir las horas de descanso.</li>
                <li>Consecuencias de la falta de sueño: Puede afectar el rendimiento académico, el estado de ánimo y la salud mental.</li>
                <li>Importancia de la rutina: Mantener horarios consistentes de sueño ayuda a regular el reloj biológico.</li>
                <li>Ambiente de sueño: Un entorno oscuro y tranquilo favorece un descanso óptimo.</li>
                <li>Consejo: Limitar el uso de pantallas al menos una hora antes de dormir.</li>
            </ul>
        `,
        jovenes: `
            <h3>👩 Jóvenes adultos (19-64 años)</h3>
            <ul>
                <li>Horas recomendadas: 7 a 9 horas diarias.</li>
                <li>Estilo de vida activo: Las demandas laborales y académicas pueden afectar la calidad del sueño.</li>
                <li>Impacto de la tecnología: El uso de dispositivos electrónicos antes de dormir puede interferir con la calidad del sueño.</li>
                <li>Consecuencias de la falta de sueño: Puede afectar el rendimiento laboral, el estado de ánimo y la salud mental.</li>
                <li>Importancia de la rutina: Mantener horarios consistentes de sueño ayuda a regular el reloj biológico.</li>
                <li>Ambiente de sueño: Un entorno oscuro y tranquilo favorece un descanso óptimo.</li>
                <li>Consejo: Limitar el uso de pantallas al menos una hora antes de dormir.</li>
                <li>Vínculo con la salud: El sueño adecuado está asociado con un menor riesgo de problemas metabólicos y de salud mental.</li>
            </ul>
        `,
        adultos_mayores: `
            <h3>👵 Adultos mayores (65+ años)</h3>
            <ul>
                <li>Horas recomendadas: 7 a 8 horas diarias.</li>
                <li>Cambios en el sueño: El envejecimiento puede alterar los patrones de sueño, con mayor frecuencia de despertares nocturnos.</li>
                <li>Producción de melatonina: Disminuye con la edad, afectando la calidad del sueño.</li>
                <li>Consecuencias de la falta de sueño: Puede aumentar el riesgo de caídas, problemas cognitivos y enfermedades crónicas.</li>
                <li>Importancia de la rutina: Mantener horarios consistentes de sueño ayuda a regular el reloj biológico.</li>
                <li>Ambiente de sueño: Un entorno oscuro y tranquilo favorece un descanso óptimo.</li>
            </ul>
        `
    };

    // Function to determine age group
    function getAgeGroup(age) {
        if (age >= 0 && age <= 2) return 'bebes';
        if (age >= 3 && age <= 13) return 'ninos';
        if (age >= 14 && age <= 17) return 'adolescentes';
        if (age >= 18 && age <= 64) return 'jovenes';
        if (age >= 65) return 'adultos_mayores';
        return null; // Handle invalid age
    }

    // Function to display recommendations in tabs
    function displayRecommendationsInTabs(group) {
        // Hide initial sections
        introSection.classList.add('hidden');
        ageInputSection.classList.add('hidden');

        // Show tabs section
        tabsSection.classList.remove('hidden'); // Assuming flexbox for tabs layout

        // Add emoji in the center
        document.getElementById('center-emoji').innerText = '✨'; // Example emoji

        // Populate left tab with icon and recommendation
        leftTab.innerHTML = `
            <img src="/public/${group}_icon.svg" alt="${group} icon" style="height: 50px; margin-bottom: 10px;">
            <h2>Recomendaciones para ${group.replace('_', ' ')}</h2>
            <p>${recommendations[group]}</p>
        `;

        // Populate right tab with detailed sleep information
        rightTab.innerHTML = detailedSleepInfo[group];

        // Add fade-in animation class to tabs section
        tabsSection.classList.add('recommendations-fade-in'); // Reusing the class, might need a new one

        // Remove the class after the animation
        setTimeout(() => {
            tabsSection.classList.remove('recommendations-fade-in');
        }, 500);

        // Remove emoji when tabs are hidden (optional, depending on desired behavior)
        // document.getElementById('center-emoji').innerText = '';

        // Show the back arrow
        backArrow.classList.add('visible');
    }

    // Function to reset to the initial state
    function resetToInitialState() {
        introSection.classList.remove('hidden');
        ageInputSection.classList.remove('hidden');
        tabsSection.classList.add('hidden');
        iaInfoSection.classList.add('hidden'); // Ensure IA section is hidden
        backArrow.classList.remove('visible');
        document.getElementById('center-emoji').innerText = ''; // Clear emoji
    }

    // Event listener for the button
    showRecommendationsButton.addEventListener('click', () => {
        const age = parseInt(ageInput.value, 10);
        if (!isNaN(age)) {
            const group = getAgeGroup(age);
            if (group) {
                displayRecommendationsInTabs(group);
            } else {
                // Handle invalid age display in tabs
                tabsSection.classList.remove('hidden');
                leftTab.innerHTML = '<h2>Edad no válida</h2><p>Por favor, introduce una edad válida.</p>';
                rightTab.innerHTML = ''; // Clear right tab
                tabsSection.classList.add('recommendations-fade-in');
                 setTimeout(() => {
                    tabsSection.classList.remove('recommendations-fade-in');
                }, 500);
            }
        } else {
             // Handle invalid input display in tabs
             tabsSection.classList.remove('hidden');
             leftTab.innerHTML = '<h2>Entrada inválida</h2><p>Por favor, introduce un número para tu edad.</p>';
             rightTab.innerHTML = ''; // Clear right tab
             tabsSection.classList.add('recommendations-fade-in');
              setTimeout(() => {
                tabsSection.classList.remove('recommendations-fade-in');
            }, 500);
        }
    });

    // Event listener for the back arrow
    backArrow.addEventListener('click', () => {
        // Check which section is currently visible to decide where to go back
        if (!iaInfoSection.classList.contains('hidden')) { // If IA section is visible
            resetToInitialState(); // Go back to initial state (intro/age input)
        } else if (!tabsSection.classList.contains('hidden')) { // If tabs are visible
             // Currently, back arrow from tabs goes to initial state. Keep this behavior.
             resetToInitialState();
        } else {
             // If neither is visible, go back to initial state anyway
             resetToInitialState();
        }
    });

    // Event listener for the IA Info link
    iaInfoLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        // Hide current sections
        introSection.classList.add('hidden');
        ageInputSection.classList.add('hidden');
        tabsSection.classList.add('hidden');

        // Show IA info section and initialize chatbot
        iaInfoSection.classList.remove('hidden');
        initializeChatbot(); // Initialize the chatbot interface
  
        // Hide center emoji if visible
        document.getElementById('center-emoji').innerText = '';

        // Show the back arrow
        backArrow.classList.add('visible');
    });

    // Event listener for 'e' key press on the logo
    logo.addEventListener('click', () => {
        // Optional: Add a visual flash effect here if desired
        // For now, just reset to initial state
        // resetToInitialState();
        logo.classList.add('flash');
        setTimeout(() => {
            logo.classList.remove('flash');
        }, 100); // Flash duration in milliseconds
        resetToInitialState();
    });

    // Theme toggle functionality
    const themeToggleEmoji = document.getElementById('theme-toggle-emoji');

    themeToggleEmoji.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            themeToggleEmoji.innerText = '☀️'; // Switch to sun emoji
        } else {
            document.body.classList.add('dark-mode');
            themeToggleEmoji.innerText = '🌙'; // Switch to moon emoji
        }
    });
});
