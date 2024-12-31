let images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg", "images/photo6.jpg", "images/photo7.jpg", "images/photo8.jpg"]; // Замените на ваши фотографии
let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById('gallery-image');
    imageElement.src = images[currentIndex];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateImage();
}


function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerText = '❄'; 
    document.body.appendChild(snowflake);

    
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 1.5 + 'em'; 

    
    const fallDuration = Math.random() * 5 + 5; 
    snowflake.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(' + window.innerHeight + 'px)' }
    ], {
        duration: fallDuration * 1000,
        easing: 'linear',
        fill: 'forwards'
    });

    
    setTimeout(() => {
        snowflake.remove();
    }, fallDuration * 1000);
}

setInterval(createSnowflake, 300);