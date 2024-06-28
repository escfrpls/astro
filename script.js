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
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    document.documentElement.lang = currentLang === 'ru' ? 'en' : 'ru';
    const toggleBtn = document.querySelector('.toggle-language');
    toggleBtn.innerText = currentLang === 'ru' ? 'RU' : 'EN';
    // You can also update the text content of other elements here based on the selected language
}
