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

const translations = {
    ru: {
        galleryTitle: 'Астрофото',
        menu: 'Меню',
        about: 'Обо мне',
        sun: 'Солнце',
        moon: 'Луна',
        solar: 'Солнечная система',
        galaxy: 'Галактики',
        comet: 'Кометы',
        other: 'Другие объекты',
        dark: 'Темная',
        light: 'Светлая',
        languageToggle: 'EN'
    },
    en: {
        galleryTitle: 'Astrophoto',
        menu: 'Menu',
        about: 'About Me',
        sun: 'Sun',
        moon: 'Moon',
        solar: 'Solar System',
        galaxy: 'Galaxies',
        comet: 'Comets',
        other: 'Other Objects',
        dark: 'Dark',
        light: 'Light',
        languageToggle: 'RU'
    }
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
    const currentLang = document.documentElement.lang;
    themeButton.innerText = document.body.classList.contains('dark-theme') ? translations[currentLang].light : translations[currentLang].dark;
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    document.documentElement.lang = newLang;

    // Update text content based on language
    const elementsToTranslate = [
        { id: 'gallery-title', key: 'galleryTitle' },
        { selector: '.toggle-theme', key: 'dark' },
        { selector: '.toggle-language', key: 'languageToggle' },
    ];
    
    elementsToTranslate.forEach(item => {
        const element = item.id ? document.getElementById(item.id) : document.querySelector(item.selector);
        element.innerText = translations[newLang][item.key];
    });

    // Update menu items
    const menuItems = document.querySelectorAll('nav ul li ul li a');
    const menuKeys = ['about', 'sun', 'moon', 'solar', 'galaxy', 'comet', 'other'];
    menuItems.forEach((item, index) => {
        item.innerText = translations[newLang][menuKeys[index]];
    });

    // Update theme button text
    const themeButton = document.querySelector('.toggle-theme');
    themeButton.innerText = document.body.classList.contains('dark-theme') ? translations[newLang].light : translations[newLang].dark;
}
