/*==============================================================
script.js
Happy Friendship Day ❤️
==============================================================*/


// ============================================================
// Smooth Scroll
// ============================================================

const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

});



// ============================================================
// Surprise Button
// ============================================================

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {

    surpriseMessage.classList.remove("hidden");

    launchConfetti();

});



// ============================================================
// Animated Counters
// ============================================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let value = 0;

            const increment = target / 60;

            const timer = setInterval(() => {

                value += increment;

                if (value >= target) {

                    counter.textContent = target;

                    clearInterval(timer);

                } else {

                    counter.textContent = Math.floor(value);

                }

            }, 25);

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));



// ============================================================
// Fade In Sections While Scrolling
// ============================================================

const animatedElements = document.querySelectorAll(
    ".card,.timeline-item,.letter,.stat,.promise-section,.surprise,#endingMessage"
);

animatedElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transition =
                "all .8s ease";

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

animatedElements.forEach(el => observer.observe(el));



// ============================================================
// Floating Hearts
// ============================================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.opacity = "0.45";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";

    heart.style.transition = "transform 8s linear, opacity 8s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 150}px)`;

        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1800);



// ============================================================
// Confetti
// ============================================================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let confetti = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);



function launchConfetti() {

    confetti = [];

    for (let i = 0; i < 220; i++) {

        confetti.push({

            x: Math.random() * canvas.width,

            y: -20,

            r: 4 + Math.random() * 6,

            d: Math.random() * 220,

            color: [

                "#FFD166",
                "#FF5D92",
                "#CDB4DB",
                "#90E0EF",
                "#FFFFFF"

            ][Math.floor(Math.random() * 5)],

            tilt: Math.random() * 10 - 5,

            speed: 2 + Math.random() * 5

        });

    }

    animateConfetti();

}



function animateConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c, i) => {

        ctx.beginPath();

        ctx.fillStyle = c.color;

        ctx.fillRect(

            c.x,

            c.y,

            c.r,

            c.r * 1.8

        );

        c.y += c.speed;

        c.x += Math.sin(c.d);

        c.d += 0.04;

        if (c.y > canvas.height + 30) {

            confetti.splice(i, 1);

        }

    });

    if (confetti.length > 0) {

        requestAnimationFrame(animateConfetti);

    }

}



// ============================================================
// Footer Easter Egg
// ============================================================

const ending = document.getElementById("endingMessage");

const endingObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            ending.animate([

                {

                    opacity: 0,

                    transform: "scale(.9)"

                },

                {

                    opacity: 1,

                    transform: "scale(1)"

                }

            ], {

                duration: 900,

                fill: "forwards"

            });

        }

    });

});

endingObserver.observe(ending);



// ============================================================
// Title Animation
// ============================================================

const titles = [

    "❤️ Happy Friendship Day",

    "👑 Chhota Don",

    "✨ 12 Saal Bemisaal",

    "💥 Pocket Sized Pataka"

];

let index = 0;

setInterval(() => {

    document.title = titles[index];

    index++;

    if (index >= titles.length)

        index = 0;

}, 2500);



// ============================================================
// Console Message
// ============================================================

console.log(
`A small gift dedicated to Pranya Mehra.
Happy Friendship Day ❤️
12 years down.
Countless more to go.`
);
