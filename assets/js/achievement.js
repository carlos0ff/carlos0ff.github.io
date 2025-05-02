function updateCurrentTime() {
    const now = new Date();

    document.getElementById('current-time').textContent = now.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
  

updateCurrentTime();
setInterval(updateCurrentTime, 1000);

const countdownDate = new Date("2027-12-10T00:00:00").getTime();

    const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        window.location.href = "final.html";
    }
};
  
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

document.getElementById('debugBtn').addEventListener('click', () => {

const errorMessages = [
    "NullPointerException: Vida amorosa = null",
    "StackOverflowError: Muito conteúdo pra estudar",
    "ClassCastException: Não da pra converter aluno em rico",
    "OutOfMemoryError: Cérebro sobrecarregado",
    "ArrayIndexOutOfBoundsException: Não tem vaga no mercado"
];

const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
alert(`💥 ERRO CRÍTICO 💥\n\n${randomError}\n\nSolução: Tentar novamente amanhã`);

});

let coffeeCount = 0;

document.getElementById('coffeeBtn').addEventListener('click', () => {
    coffeeCount++;

    const coffeeBtn = document.getElementById('coffeeBtn');

    const responses = [
        `☕ Café #${coffeeCount}! ${coffeeCount > 5 ? '💀' : ''}`,
        `${coffeeCount}x café = ${coffeeCount * 2}h acordado`,
        "Sistema imunológico: 🏳️",
        "Batimento cardíaco: 📈"
    ];

    coffeeBtn.innerHTML = `<i class="fas fa-coffee mr-2"></i> ${responses[coffeeCount % responses.length]}`;

    if(coffeeCount > 3) {
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);
    }

    if(coffeeCount > 10) {
        alert("⚠️ ATENÇÃO: Chamando SAMU... Seu coração está como um while(true) sem break!");
        coffeeBtn.classList.add('bg-red-600');
        coffeeBtn.classList.remove('bg-blue-500');
    }
});