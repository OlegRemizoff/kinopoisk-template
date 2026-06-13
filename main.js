console.log("ok");



// Filter 

// Находим все фильтры на странице
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    const toggleBtn = filter.querySelector('.filter-toggle');

    // Клик по кнопке внутри конкретного фильтра
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем срабатывание клика по document
        
        // Опционально: закрываем другие открытые фильтры перед открытием текущего
        filters.forEach(otherFilter => {
            if (otherFilter !== filter) {
                otherFilter.classList.remove('active');
            }
        });

        filter.classList.toggle('active');
    });
});

// Закрытие ВСЕХ фильтров при клике вне их области
document.addEventListener('click', () => {
    filters.forEach(filter => {
        filter.classList.remove('active');
    });
});

// Запрещаем закрытие фильтра при клике внутри его контента
filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});





//Slider

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

const btn = document.getElementById('btn');
const menu = document.getElementById('menu');


btn.addEventListener('click', () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});


