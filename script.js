let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    let mensagemAlerta = "Dados do Formulário:\n\n";

    formData.forEach((valor, chave) => {
        let chaveFormatada = chave.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase());

        mensagemAlerta += `${chaveFormatada}: ${valor}\n`;
    });

    alert(mensagemAlerta);

    contactForm.reset();
});
