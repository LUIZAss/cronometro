function updateClock() {
    const now = new Date();
    const natal = new Date(now.getFullYear(), 11, 25); // Natal deste ano

    // Se o Natal já passou neste ano, ajusta para o próximo ano
    if (now.getMonth() === 11 && now.getDate() > 25) {
        natal.setFullYear(natal.getFullYear() + 1);
    }

    const diff = natal - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + " Dias";
    document.getElementById("hours").innerText = hours + " Horas";
    document.getElementById("minutes").innerText = minutes + " Minutos";
    document.getElementById("seconds").innerText = seconds + " Segundos";
}

setInterval(updateClock, 1000);