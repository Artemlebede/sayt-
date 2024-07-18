document.addEventListener('DOMContentLoaded', function() {
    const ruBtn = document.getElementById('ru-btn');
    const enBtn = document.getElementById('en-btn');
    const ruContent = document.getElementById('ru-content');
    const enContent = document.getElementById('en-content');

    ruBtn.addEventListener('click', function() {
        ruContent.classList.add('visible');
        enContent.classList.remove('visible');
    });

    enBtn.addEventListener('click', function() {
        enContent.classList.add('visible');
        ruContent.classList.remove('visible');
    });

    // Default language
    ruContent.classList.add('visible');
});