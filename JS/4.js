const messages = [
    "💕 Eres una persona increíble y especial. ¡Gracias por estar en mi vida! 💕",
    "🌟 Cada momento contigo es una estrella en mi cielo. ¡Nunca dejes de brillar! ✨",
    "💖 No importa la distancia, siempre tendrás un lugar en mi corazón. 💖"
];

function openCard(index) {
    document.getElementById("message").textContent = messages[index];
    document.getElementById("message-box").style.display = "block";
}

function closeMessage() {
    document.getElementById("message-box").style.display = "none";
}

document.getElementById("home-button").addEventListener("click", function() {
    let button = this;
    button.style.animation = "bounce 0.5s"; // Aplica la animación de rebote

    setTimeout(() => {
        window.location.href = "../menu.html"; // Redirige después de la animación
    }, 500);
});

/* Agrega la animación en CSS */
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(style);