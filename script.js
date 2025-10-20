const images = {
    about: [
        { text: `<h1>Welcome!</h1>
                <p>This is blog/archive of my photos and stargazing observations.</p>
                <p>At the moment I am starting my way in astronomy, I can say I am realizing my childhood dream.</p>
                <p>The equipment I'm currently using: Sky-Watcher BK 1309 EQ2 130/900, Lenovo thinkpad x201 and x230, ND96-0.9, EQ-2 RA motor drive, Super 25mm(36x), 10mm (90x), 5mm (x257), Barlow lens x2, Barlow lens x1. For photos, I use Xiaomi Mi 10T Pro, Canon 450d, Jupiter37a. ZWO ASI 662MC + ZWO UV/IR Cut (1,25")</p>
                <p>My github source <a href="https://github.com/escfrpls/astro/">here</a>.</p>` }
    ],
    sun: [
        { src: 'img/sun_19.10.2024.png', caption: 'First Sun, 19.10.2024, (Xiaomi Mi 10T Pro, Super 25mm)' },
        { src: 'img/sun_09.08.2025.png', caption: 'Sun, 09.08.2025, (Xiaomi Mi 10T Pro, Super 25mm)' }
    ],
    moon: [
        { src: 'img/moon_first_photo_28.06.2024.png', caption: 'Moon, First Photo, 28.06.2024, (Xiaomi Mi 10T Pro, Super 25mm)' },
        { src: 'img/moon_20.07.2024.png', caption: 'Moon, 20.07.2024, (Xiaomi Mi 10T Pro, Super 25mm, ND96-0.9)' },
        { src: 'img/Supermoon_19.10.2024.png', caption: 'Supermoon, 18.10.2024, (Xiaomi Mi 10T Pro, Super 25mm, ND96-0.9)' },
        { src: 'img/red_moon-09.09.2025.png',  caption: 'Red Moon, 09.09.2025, (Xiaomi Mi 10T Pro, Super 10mm)' }
    ],
    solar: [
        { src: 'img/Saturn_first_photo_27.06.2024.png', caption: 'Saturn, First Photo, 27.06.2024, (Xiaomi Mi 10T Pro, Super 10mm + Barlow x2)' },
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
        { src: 'img/Noctilucent cloud 03.07.2025.png', caption: 'Noctilucent cloud, 03.07.2025, (Xiaomi Mi 10T Pro)' },
        { src: 'img/Pleiades_first_photo_08.09.2025.png', caption: 'Pleiades, 09.08.2025, (Xiaomi Mi 10T Pro + Super 10mm)' },
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

window.onload = function() {
    showAbout();
};
