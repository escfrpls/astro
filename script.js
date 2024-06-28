const images = {
    about: [],
    sun: [
        { src: 'img/sun1.jpg', caption: 'Sun 1' },
        { src: 'img/sun2.jpg', caption: 'Sun 2' }
    ],
    moon: [
        { src: 'moon_first_photo_28.06.2024.png', caption: 'First photo Moon, 28.06.2024' },
        { src: 'img/moon2.jpg', caption: 'Moon 2' }
    ],
    solar: [
        { src: 'Saturn_first_photo_27.06.2024.png', caption: 'First photo Saturn, 27.06.2024' },
        { src: 'img/solar2.jpg', caption: 'Solar System 2' }
    ],
    galaxy: [
        { src: 'img/galaxy1.jpg', caption: 'Galaxy 1' },
        { src: 'img/galaxy2.jpg', caption: 'Galaxy 2' }
    ],
    comet: [
        { src: 'img/comet1.jpg', caption: 'Comet 1' },
        { src: 'img/comet2.jpg', caption: 'Comet 2' }
    ],
    other: [
        { src: 'img/other1.jpg', caption: 'Other Object 1' },
        { src: 'img/other2.jpg', caption: 'Other Object 2' }
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
    themeButton.innerText = document.body.classList.contains('dark-theme') ? 'Light' : 'Dark';
}
