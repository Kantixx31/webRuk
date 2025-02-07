// Password configuration
const CORRECT_PASSWORD = "123456";
const ANNIVERSARY_DATE = new Date('2025-02-14T00:00:00');

// Password checking
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password === CORRECT_PASSWORD) {
        document.getElementById('passwordPage').style.display = 'none';
        document.getElementById('galleryPage').style.display = 'block';
        startCountdown();
    } else {
        alert('รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
        document.getElementById('passwordInput').value = '';
    }
}

// Enter key support for password input
document.getElementById('passwordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

// Countdown timer
function startCountdown() {
    function updateCountdown() {
        const now = new Date();
        const difference = ANNIVERSARY_DATE - now;

        if (difference < 0) {
            document.getElementById('countdown').innerHTML = 'Happy 5th Anniversary! 🎉';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = 
            `ครบรอบ 5 ปีในอีก: ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Page navigation
function showMessage() {
    document.getElementById('galleryPage').style.display = 'none';
    document.getElementById('messagePage').style.display = 'block';
}

function showGallery() {
    document.getElementById('messagePage').style.display = 'none';
    document.getElementById('galleryPage').style.display = 'block';
}

// Image loading error handling
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.onerror = function() {
        this.src = 'images/placeholder.jpg';
        this.alt = 'Image not found';
    };
});

// Audio player customization
const audioPlayer = document.getElementById('audioPlayer');
if (audioPlayer) {
    audioPlayer.volume = 0.7; // Set default volume to 70%
}
