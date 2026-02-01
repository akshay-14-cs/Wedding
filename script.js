// --- CURTAIN & MUSIC LOGIC ---
const curtainOverlay = document.getElementById("curtain-overlay");
const enterBtn = document.getElementById("enter-btn");
const bgMusic = document.getElementById("bg-music");

enterBtn.addEventListener("click", function() {
    // 1. Slide the curtains
    curtainOverlay.classList.add("curtain-open");
    
    // 2. Play the music
    bgMusic.play().catch(error => {
        console.log("Music play failed (browser might blocked it):", error);
    });

    // 3. Optional: Remove the overlay from DOM after animation (2 seconds)
    setTimeout(() => {
        curtainOverlay.style.display = 'none';
    }, 2000);
});

// --- EXISTING POPUP LOGIC ---
const venueModal = document.getElementById("venue-modal");
const haldiModal = document.getElementById("haldi-modal");
const venueCard = document.getElementById("venue-card");
const haldiCard = document.getElementById("haldi-card");
const closeButtons = document.querySelectorAll(".close-btn");

venueCard.onclick = function() { venueModal.style.display = "flex"; }
haldiCard.onclick = function() { haldiModal.style.display = "flex"; }

closeButtons.forEach(btn => {
    btn.onclick = function() {
        const modalId = this.getAttribute('data-target');
        document.getElementById(modalId).style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target == venueModal) { venueModal.style.display = "none"; }
    if (event.target == haldiModal) { haldiModal.style.display = "none"; }
}

// --- COUNTDOWN LOGIC ---
// Set the date we're counting down to (Feb 25, 2026 at 2:15 PM)
const weddingDate = new Date("Feb 25, 2026 14:15:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the count down is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "<h2 class='mantra'>|| शुभविवाह संपन्न ||</h2>";
    }
}, 1000);
// --- FLOWER SHOWER LOGIC ---
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Randomly choose a petal style (Red Rose, Orange Marigold, or Gold)
    const styleChoice = Math.floor(Math.random() * 3) + 1;
    petal.classList.add(`petal-style-${styleChoice}`);

    // Random starting position (Left 0% to 100%)
    petal.style.left = Math.random() * 100 + 'vw';

    // Random animation duration (Speed: 5s to 12s)
    const duration = Math.random() * 7 + 5;
    petal.style.animationDuration = duration + 's';

    // Random size variation
    const size = Math.random() * 0.5 + 0.5; // Scale from 0.5 to 1
    petal.style.transform = `scale(${size})`;

    document.body.appendChild(petal);

    // Remove petal after it falls to save memory
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Create a flower every 300 milliseconds
setInterval(createPetal, 300);