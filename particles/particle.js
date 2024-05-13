var container = document.querySelector("background background-box");
var animationDuration = 5;

function randInt(min, max) {
    return Math.random() * (max - min) + min;
}

window.addEventListener("load", function() {
    setInterval(function() {
        let particle = document.createElement("particle");
        let size = randInt(0, 50) + "vmin";
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = randInt(0, 100) + "vw";
        particle.style.top = randInt(0, 100) + "vh";
        particle.style.background = "rgb(" + randInt(0, 360) + ", " + randInt(0, 360) + ", " + randInt(0, 360) + ")";
        container.appendChild(particle);
        setTimeout(function() {
            particle.remove();
        }, animationDuration * 1000);
    }, 300);
});