console.log("ok");


const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

nextBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // ширина + gap
    const maxIndex = track.children.length - 4; // 4 — сколько карточек видим
    
    if (index < maxIndex) {
        index++;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});