let galleryGrid = document.getElementById('galleryGrid');
let previewSection = document.querySelector('.preview-section');
let previewContainer = document.getElementById('previewContainer');
let gallerySection = document.querySelector('.gallery-section');
let images = [];
let isLoading = false;
let resizer = document.getElementById('resizer');
let dragCoords = document.getElementById('dragCoords');

//Число добавляемых элементов при каждой «подгрузке».
const ITEMS_PER_PAGE = 5;

//Функция для создания карточки
function createImageCard(image) {
    let card = document.createElement('article');
    card.className = 'image-card';
    card.dataset.id = image.id;
    card.innerHTML = `
        <img src="${image.url}" alt="${(image.name)}" draggable="true">
        <p>${(image.name)}</p>
    `;

    card.addEventListener('click', () => {
        card.classList.add('active');

        //Показывает изображение в области превью, передавая объект image
        showImagePreview(image);
    });

    card.addEventListener('dragstart', (e) => {
        //Кладём id картинки в dataTransfer. При drop можно извлечь id и сделать active.
        e.dataTransfer.setData('text/plain', image.id.toString());
        card.style.opacity = '0.5';
    });

    //Выводим координаты элемента при переносе
    card.addEventListener('drag', (e) => {
        dragCoords.style.display = 'block';
        dragCoords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
    });

    //Восстанавливаем внешний вид карточки после завершения drag.
    card.addEventListener('dragend', () => {
        card.style.opacity = '1';
        dragCoords.style.display = 'none';
    });

    return card;
}

let activeImageId = null;

//Функция для показа изображения в окне предпросмотра
function showImagePreview(image) {
    let previewImage = document.getElementById('previewImage');
    let previewTitle = document.getElementById('previewTitle');
    let closeButton = document.getElementById('closePreview');
    let navButtons = document.querySelector('.nav-buttons');

    previewImage.src = image.url;
    previewImage.alt = image.name;
    previewImage.style.display = 'block';
    previewTitle.textContent = image.name;
    closeButton.style.display = 'flex';
    navButtons.style.display = 'flex';

    //Устанавливаем activeImageId = image.id и вызываем метод для включения/отключения стрелок
    activeImageId = image.id;
    updateNavigationButtons();

    //Выделяем активную карточку
    document.querySelectorAll('.image-card').forEach(card => {
        card.classList.toggle('active', parseInt(card.dataset.id) === image.id);
    });
}

//Функция для очистки окна превью
function clearPreview() {
    document.getElementById('previewImage').src = '';
    document.getElementById('previewImage').style.display = 'none';
    document.getElementById('previewTitle').textContent = 'Выберите изображение';
    document.getElementById('closePreview').style.display = 'none';
    document.querySelector('.nav-buttons').style.display = 'none';
    document.querySelectorAll('.image-card').forEach(c => c.classList.remove('active'));
    activeImageId = null;
}

//При нажатии на кнопку закрытия мы применяем функцию для очистки окна превью
document.getElementById('closePreview').addEventListener('click', clearPreview);

//
function updateNavigationButtons() {
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');

    if (!activeImageId) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    //Находим индекс текущего активного изображения в массиве
    let index = images.findIndex(i => i.id === activeImageId);

    //Если индекс 0 или -1, значит предыдущей картинки нет, поэтому дизейблим prev
    prevBtn.disabled = index <= 0;

    //Если индекс не найден или на последнем элементе, то дизейблим next
    nextBtn.disabled = index === -1 || index >= images.length - 1;
}

//Слушатели на prev/next берут индекс в массиве и, при возможности, вызывают showImagePreview с соседним изображением
document.getElementById('prevBtn').addEventListener('click', () => {
    let index = images.findIndex(i => i.id === activeImageId);

    if (index > 0) {
        showImagePreview(images[index - 1]);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    let idx = images.findIndex(i => i.id === activeImageId);
    if (idx < images.length - 1) showImagePreview(images[idx + 1]);
});

//Чтобы дроп выполнялся применяем e.preventDefault() т.к. браузер по дефолту запрещает это делать
previewContainer.addEventListener('dragover', e => e.preventDefault());
previewContainer.addEventListener('drop', function (e) {
    e.preventDefault();
    let id = parseInt(e.dataTransfer.getData('text/plain'));

    //Ищем объект по id в images
    //Если найден — вызываем showImagePreview(img)
    let img = images.find(it => it.id === id);
    if (img) showImagePreview(img);
});

//Делаем рабочим наше поле для добавления своих картинок
document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let nameInput = document.getElementById('imageName');
    let fileInput = document.getElementById('imageFile');
    let name = nameInput.value.trim();
    let file = fileInput.files[0];

    if (!name || !file) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    //Добавляем карточку в массив
    let url = URL.createObjectURL(file);
    let newImage = {id: Date.now(), name, url};
    images.unshift(newImage);

    //Вставляем карточку в начало
    let firstCard = galleryGrid.firstElementChild;
    let card = createImageCard(newImage);
    galleryGrid.insertBefore(card, firstCard);

    //Очищаем ввод
    nameInput.value = '';
    fileInput.value = '';
    showImagePreview(newImage);
});

//Добавляет на страницу карточки со всеми изображениями
function renderAllImages() {
    images.forEach(img => {
        let card = createImageCard(img);
        galleryGrid.appendChild(card);
    });

    //После отрисовки добавляем/перемещаем триггер в конец
    appendOrMoveTrigger();
}

//Функция для перемещения триггера в конец  
function appendOrMoveTrigger() {
    let trigger = galleryGrid.querySelector('.scroll-trigger');

    //Если триггера еще нет, то создаем его
    if (!trigger) {
        trigger = document.createElement('div');
        trigger.className = 'scroll-trigger';
        trigger.textContent = 'Прокрутите для загрузки...';
        galleryGrid.appendChild(trigger);
    } else {
        galleryGrid.appendChild(trigger);
    }
}

//Функция для подгрузки изображений
function loadMoreImages() {
    if (isLoading) return;
    isLoading = true;
    let trigger = galleryGrid.querySelector('.scroll-trigger');

    if (trigger) trigger.textContent = 'Загрузка...';

    let currentLength = images.length;
    for (let i = 1; i <= ITEMS_PER_PAGE; i++) {
        let newId = currentLength + i;
        images.push({
            id: newId,
            name: `Изображение ${newId}`,
            url: `https://loremflickr.com/300/200?random=${newId}`
        });
    }

    //Добавляем карточки перед триггером
    let newImages = images.slice(currentLength);
    newImages.forEach(img => {
        let card = createImageCard(img);
        galleryGrid.insertBefore(card, trigger);
    });

    if (trigger) trigger.textContent = 'Прокрутите для загрузки...';
    isLoading = false;

    document.getElementById('scrollToTop').style.display = 'flex';
}

let observer;

//Функция, реализующая бесконечный скролл
function setupInfiniteScroll() {

    //Создаем объект наблюдателя
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            //Если триггер виден пользователю и не идет загрузка, то подгружаем еще изображения
            if (entry.isIntersecting && !isLoading) {
                loadMoreImages();
            }
        });
    }, {
        root: gallerySection,
        rootMargin: '0px',
        threshold: 0.1
    });

    //Перемещаем триггер
    appendOrMoveTrigger();
    let trigger = galleryGrid.querySelector('.scroll-trigger');

    //Подключаем наблюдателя к триггеру
    if (trigger) observer.observe(trigger);
}

//Функция для докачки до появления внутреннего скролла
function ensureScrollableContent() {
    let iterations = 0;

    let checkAndLoad = () => {
        iterations++;

        //Если содержимое меньше видимой области — подгружаем
        if (gallerySection.scrollHeight <= gallerySection.clientHeight && iterations) {
            loadMoreImages();

            //Ждём немного, чтобы DOM обновился
            setTimeout(checkAndLoad, 400);
        }
    };

    checkAndLoad();
}

//Кнопка наверх
document.getElementById('scrollToTop').addEventListener('click', () => {
    gallerySection.scrollTo({top: 0, behavior: 'smooth'});
});

let isResizing = false;
let container = document.querySelector('.container');

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'col-resize';
    e.preventDefault();
});

//Считаем и устанавливаем ширину для галереи и превью области 
document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    let containerWidth = container.offsetWidth;
    let galleryWidth = (e.clientX / containerWidth) * 100;
    let previewWidth = 100 - galleryWidth;

    if (galleryWidth >= 30 && previewWidth >= 20) {
        gallerySection.style.width = `${galleryWidth}%`;
        previewSection.style.width = `${previewWidth}%`;
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
});

renderAllImages();
setupInfiniteScroll();
ensureScrollableContent()
