const images = {
    about: [],
    sun: [
        { src: 'img/sun1.jpg', caption: 'Солнце 1' },
        { src: 'img/sun2.jpg', caption: 'Солнце 2' }
    ],
    moon: [
        { src: 'img/moon1.jpg', caption: 'Луна 1' },
        { src: 'img/moon2.jpg', caption: 'Луна 2' }
    ],
    solar: [
        { src: 'img/solar1.jpg', caption: 'Солнечная система 1' },
        { src: 'img/solar2.jpg', caption: 'Солнечная система 2' }
    ],
    galaxy: [
        { src: 'img/galaxy1.jpg', caption: 'Галактика 1' },
        { src: 'img/galaxy2.jpg', caption: 'Галактика 2' }
    ],
    comet: [
        { src: 'img/comet1.jpg', caption: 'Комета 1' },
        { src: 'img/comet2.jpg', caption: 'Комета 2' }
    ],
    other: [
        { src: 'img/other1.jpg', caption: 'Другой объект 1' },
        { src: 'img/other2.jpg', caption: 'Другой объект 2' }
    ]
};

function showGallery(category) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    images[category].forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        img.onclick = () => showModal(image.src, image.caption);
        gallery.appendChild(img);
    });
}

function showModal(src, caption) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-img').src = src;
    document.getElementById('modal-caption').innerText = caption;
    modal.style.display = 'flex';
}

document.getElementById('modal').onclick = () => {
    document.getElementById('modal').style.display = 'none';
};

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.querySelector('.toggle-theme');
    themeButton.innerText = document.body.classList.contains('dark-theme') ? 'Светлая' : 'Темная';
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    document.documentElement.lang = newLang;
    const toggleBtn = document.querySelector('.toggle-language');
    toggleBtn.innerText = newLang === 'ru' ? 'EN' : 'RU';

    // Update text content based on language
    const galleryTitle = document.getElementById('gallery-title');
    galleryTitle.innerText = newLang === 'ru' ? 'Галерея' : 'Gallery';
    document.querySelector('.toggle-theme').innerText = newLang === 'ru' 
        ? (document.body.classList.contains('dark-theme') ? 'Светлая' : 'Темная') 
        : (document.body.classList.contains('dark-theme') ? 'Light' : 'Dark');
}
