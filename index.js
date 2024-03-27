const dropdownBtn = document.querySelector('.dropdownBtn');
const dropdownMenu = document.querySelector('#content');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('visable');
})

window.addEventListener('click', (e) => {
    if(e.target !== dropdownBtn) {
        dropdownMenu.classList.remove('visable');
    }
})