const lineLink = document.getElementById('line-link');
const lineModal = document.getElementById('line-modal');
const lineClose = document.getElementById('line-close');
const topLink = document.getElementById('top-link');
const mailLink = document.getElementById('mail-link');
const isPC = window.matchMedia('(hover: hover) and (pointer: fine)');

topLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

lineLink.addEventListener('click', (event) => {
    if (isPC.matches) {
        event.preventDefault();
        lineModal.showModal();
    }
});

lineClose.addEventListener('click', () => lineModal.close());

lineModal.addEventListener('click', (event) => {
    if (event.target === lineModal) lineModal.close();
});

mailLink.addEventListener('click', (event) => {
    if (isPC.matches) {
        event.preventDefault();
        window.open(
            'https://mail.google.com/mail/?view=cm&to=namikasato.75@gmail.com&su=お問い合わせ',
            '_blank',
            'noopener'
        );
    }
});

const petalBox = document.querySelector('.petals');
const petalCount = window.innerWidth < 768 ? 10 : 18;

for (let i = 0; i < petalCount; i += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal-item';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${12 + Math.random() * 12}s`;
    petal.style.animationDelay = `${-Math.random() * 24}s`;
    petal.style.setProperty('--size', `${0.55 + Math.random() * 0.75}`);
    petalBox.appendChild(petal);
}

const revealItems = document.querySelectorAll('.section-title, .profile-card, .about-text, .skill-card, .work-card, .contact-message, .contact-links');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
    item.classList.add('reveal');
    revealObserver.observe(item);
});