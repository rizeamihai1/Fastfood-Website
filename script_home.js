document.addEventListener('DOMContentLoaded', (event) => {
    const navigare = document.querySelector('nav');
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    navigare.style.backgroundColor = '#f19234';
    console.log(backgroundColor);
    
    const button = document.querySelector('button');
    button.style.backgroundColor = '#f18234';

    const rotatie = Math.random() * 360;
    const imagine = document.querySelector('.profile-image img');
    imagine.style.transform = `rotate(${rotatie}deg)`;
});

