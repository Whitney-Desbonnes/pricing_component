const toggle = document.getElementById('toggle');
const price = document.querySelectorAll('.price');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    price.forEach(e => {
        e.classList.toggle('hiden');
    });
})