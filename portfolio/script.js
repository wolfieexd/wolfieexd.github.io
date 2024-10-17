// Matrix effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binaryDigits = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
        ctx.fillText(text, index * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });
}

setInterval(drawMatrix, 50);

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Sujan S\nWelcome to My Portfolio !!";
    const typingTextElement = document.getElementById("typing-text");
    
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text.charAt(index) === '\n') {
                typingTextElement.innerHTML += '<br>';
            } else {
                typingTextElement.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(type, 50);
        } else {
            // Text is fully typed, stop the cursor animation
            typingTextElement.style.borderRight = 'none';
            typingTextElement.style.textAlign = 'center';
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('emailLink');
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'mailto:sujan5149481@gmail.com?subject=Contact from Portfolio&body=Hello Sujan,';
    });
});