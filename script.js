// Animationen beim Scrollen anzeigen
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Popup-Funktion für die Anmeldung
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Popup-Container erstellen
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Popup-Inhalt
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Vielen Dank!</h2>
            <p>Deine Anmeldung war erfolgreich. Wir melden uns bald bei dir!</p>
            <button id="closePopup">Schließen</button>
        </div>
    `;

    // Popup zum Body hinzufügen
    document.body.appendChild(popup);

    // Popup-Schließen-Funktion
    document.getElementById('closePopup').addEventListener('click', () => {
        popup.remove();
    });

    // Animation für das Popup
    popup.classList.add('show-popup');
});

// Animation hinzufügen, wenn die Seite geladen wird
window.addEventListener('load', () => {
    document.querySelector('header').classList.add('visible');
});
