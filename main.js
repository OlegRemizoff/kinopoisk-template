console.log("ok");


// Находим все контейнеры слайдеров на странице
document.querySelectorAll('.slider-wrapper').forEach(slider => {
    // Ищем элементы СТРОГО внутри текущего слайдера
    const track = slider.querySelector('.slider-track');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
    const firstCard = slider.querySelector('.card');

    // Если в каком-то слайдере нет элементов, пропускаем его во избежание ошибок
    if (!track || !nextBtn || !prevBtn || !firstCard) return;

    // Свой собственный индекс для КАЖДОГО слайдера (инкапсуляция)
    let index = 0;
    const maxIndex = track.children.length - 4; // 4 — сколько карточек видим

    // Функция обновления видимости кнопок
    function updateButtons() {
        // Если карточек всего 4 или меньше, скрываем обе кнопки сразу
        if (maxIndex <= 0) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            return;
        }

        // Скрываем "Назад", если мы в самом начале
        prevBtn.style.display = index === 0 ? 'none' : 'block';
        
        // Скрываем "Вперед", если дошли до конца
        nextBtn.style.display = index >= maxIndex ? 'none' : 'block';
    }

    // Инициализация кнопок при загрузке страницы
    updateButtons();

    nextBtn.addEventListener('click', () => {
        const cardWidth = firstCard.offsetWidth + 20; // ширина + gap
        
        if (index < maxIndex) {
            index++;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
            updateButtons(); // Проверяем кнопки после сдвига
        }
    });

    prevBtn.addEventListener('click', () => {
        const cardWidth = firstCard.offsetWidth + 20;
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
            updateButtons(); // Проверяем кнопки после сдвига
        }
    });
});

