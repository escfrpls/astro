const images = {
    about: [
        { text: `<h1>Welcome!</h1>
                <p>This is blog/archive of my photos and stargazing observations.</p>
                <p>At the moment I am starting my way in astronomy, I can say I am realizing my childhood dream.</p>
                <p>The equipment I'm currently using: Sky-Watcher BK 1309 EQ2 130/900, 10mm (90x) and 25mm(36x), 5mm (x257) Kellner Super, Barlow lens x2, Barlow lens x1. For photos, I use Xiaomi Mi 10T Pro, Canon 450d, Jupiter37a, Lenovo thinkpad x201</p>
                <p>My github source <a href="https://github.com/escfrpls/astro/">here</a>.</p>` }
    ],
    sun: [
        { src: 'img/sun1.jpg', caption: 'Sun 1' },
        { src: 'img/sun2.jpg', caption: 'Sun 2' }
    ],
    moon: [
        { src: 'img/moon_first_photo_28.06.2024.png', caption: 'Moon, First Photo, 28.06.2024, (Xiaomi Mi 10T Pro, 10mm)' },
    ],
    solar: [
        { src: 'img/Saturn_first_photo_27.06.2024.png', caption: 'Saturn, First Photo, 27.06.2024, (Xiaomi Mi 10T Pro, 25mm + Barlow x2)' },
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

function showAbout() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    const aboutText = images.about[0].text;
    const aboutDiv = document.createElement('div');
    aboutDiv.innerHTML = aboutText;
    gallery.appendChild(aboutDiv);
}

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
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');

    modalImg.src = src;
    modalCaption.innerText = caption;

    modal.style.display = 'flex';
    modal.style.alignItems = 'flex-start'; // Выравнивание по верхнему краю
    modal.style.justifyContent = 'flex-start'; // Выравнивание по левому краю
}

document.getElementById('modal').onclick = () => {
    document.getElementById('modal').style.display = 'none';
};

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.querySelector('.toggle-theme');
    themeButton.innerText = document.body.classList.contains('dark-theme') ? 'Light' : 'Dark';
}

window.onload = function() {
    showAbout();
};
