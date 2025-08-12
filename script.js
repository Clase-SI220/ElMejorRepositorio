// JavaScript súper simple para el MEJOR REPOSITORIO DEL MUNDO

// Función para mostrar mensaje épico
function mostrarMensaje() {
    const mensajes = [
        "¡Bienvenido al repositorio más épico del universo!",
        "¡Estás a punto de vivir la mejor experiencia de programación!",
        "¡Preparate para aprender como nunca antes!",
        "¡Eres parte de algo legendario!",
        "¡Este repositorio cambiará tu vida de programador!"
    ];
    
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    alert(mensajeAleatorio);
}

// Función para saludar al docente
function saludarDocente() {
    const saludos = [
        "¡Hola Profesor José Andrés! ¡Eres el mejor!",
        "¡Gracias por ser un docente increíble!",
        "¡Aprendemos mucho contigo, profesor!",
        "¡Eres una leyenda de la programación!",
        "¡Gracias por guiarnos en este viaje épico!"
    ];
    
    const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
    alert(saludoAleatorio);
    
    // Pequeña animación al botón
    const btn = event.target;
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 100);
}

// Función para crear confetti (súper simple)
function confetti() {
    const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#e67e22'];
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    // Crear 50 piezas de confetti
    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(confettiPiece);
    }
    
    // Remover el confetti después de 3 segundos
    setTimeout(() => {
        document.body.removeChild(container);
    }, 3000);
    
    alert("¡CONFETTI ÉPICO! ¡Este repositorio es genial!");
}

// Smooth scroll para los links del navbar
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Añadir clase fade-in a las cards cuando se cargan
    const cards = document.querySelectorAll('.hover-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200);
    });
});

// Efecto de cambio de color aleatorio en el título (súper inútil pero divertido)
setInterval(() => {
    const title = document.querySelector('.hero-title');
    if (title) {
        const colors = ['#fff', '#ffd700', '#ff69b4', '#00ff00', '#ff4500', '#9370db'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;
        
        // Volver al color original después de 1 segundo
        setTimeout(() => {
            title.style.color = '#fff';
        }, 1000);
    }
}, 10000); // Cada 10 segundos

// Función súper inútil que cuenta clicks
let clickCounter = 0;
document.addEventListener('click', function() {
    clickCounter++;
    if (clickCounter === 50) {
        alert("¡Has hecho 50 clicks! ¡Eres un campeón del clicking!");
        clickCounter = 0; // Reset
    }
});

console.log("El MEJOR REPOSITORIO DEL MUNDO se ha cargado correctamente!");
console.log("Creado para la clase de Programación Aplicada con José Andrés Hurtado");
console.log("¡Que tengas un día épico programando!");
