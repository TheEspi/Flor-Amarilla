const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const garden = document.getElementById("garden");
const message = document.getElementById("message");
const typedText = document.getElementById("typedText");

const text = "🌻Feliz Día de las Flores Amarillas🌻, Quiero que sepas que te quiero muchísimo y que eres una persona muy especial para mí. ";

startBtn.addEventListener("click", () => {
    intro.classList.add("hide");
    garden.classList.add("show");

    setTimeout(() => {
        message.classList.add("show");
        typeMessage();
    }, 5200);
});

function typeMessage() {
    let i = 0;
    const speed = 34;

    function type() {
        if (i < text.length) {
            typedText.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Pequeñas partículas doradas al tocar la pantalla
document.addEventListener("click", (e) => {
    for (let i = 0; i < 7; i++) {
        const spark = document.createElement("span");
        spark.textContent = "✦";
        spark.style.position = "fixed";
        spark.style.left = e.clientX + "px";
        spark.style.top = e.clientY + "px";
        spark.style.color = "#ffd83d";
        spark.style.fontSize = (10 + Math.random() * 14) + "px";
        spark.style.pointerEvents = "none";
        spark.style.zIndex = "100";
        spark.style.transition = "transform 1s ease, opacity 1s ease";
        document.body.appendChild(spark);

        requestAnimationFrame(() => {
            spark.style.transform = `translate(${(Math.random()-.5)*130}px, ${-30-Math.random()*100}px) scale(0)`;
            spark.style.opacity = "0";
        });

        setTimeout(() => spark.remove(), 1100);
    }
});
